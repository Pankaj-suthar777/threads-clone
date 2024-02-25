import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "@/validation/registerSchema";
import { CustomErrorReporter } from "@/validation/CustomErrorReporter";
import bcrypt, { hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    vine.errorReporter = () => new CustomErrorReporter();

    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(data);

    // check email

    const isEmailExist = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (isEmailExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Email Already taken . please use another one.",
        },
      });
    }

    // check username if exist

    const isUsernameExist = await prisma.user.findUnique({
      where: {
        username: payload.username,
      },
    });

    if (isUsernameExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Username Already taken . please use another one.",
        },
      });
    }

    //hash password
    const salt = bcrypt.genSaltSync(10);
    payload.password = hashSync(payload.password, salt);

    // insert record in db
    await prisma.user.create({
      data: payload,
    });

    return NextResponse.json({
      status: 200,
      message: "Account created successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
