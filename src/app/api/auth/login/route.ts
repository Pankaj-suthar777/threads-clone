import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { loginSchema } from "@/validation/registerSchema";
import { CustomErrorReporter } from "@/validation/CustomErrorReporter";
import bcrypt, { compareSync, hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    vine.errorReporter = () => new CustomErrorReporter();

    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(data);

    // check email

    const findUSer = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!findUSer) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "No Account found with this email.",
        },
      });
    }

    //check password
    const checkPassword = compareSync(payload.password, findUSer.password!);

    if (checkPassword) {
      return NextResponse.json({
        status: 200,
        message: "User logged in successfully",
      });
    }

    return NextResponse.json({
      status: 400,
      errors: {
        email: "Invalid credentials",
      },
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
