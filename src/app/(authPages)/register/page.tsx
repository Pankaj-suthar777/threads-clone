"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
    username: "",
    name: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState(false);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    axios.post("/api/auth/register", authState).then((res) => {
      setLoading(false);
      const response = res.data;

      if (response.status === 200) {
        router.push(`/login?message=${response.message}`);
      } else if (response.status === 400) {
        setErrors(response.errors);
      }
    });
  }
  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
          </div>
          <h1 className="text-2xl font-bold">Register</h1>
          <p>Welcome to the threads</p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="name"
                placeholder="Enter your name"
                id="name"
                onChange={(e) =>
                  setAuthState({ ...authState, name: e.target.value })
                }
              />
              <span className="text-red-400 font-bold">{errors?.name}</span>
            </div>
            <div className="mt-5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                placeholder="Enter your unique username"
                id="username"
                onChange={(e) =>
                  setAuthState({ ...authState, username: e.target.value })
                }
              />
              <span className="text-red-400 font-bold">{errors?.username}</span>
            </div>
            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={(e) =>
                  setAuthState({ ...authState, email: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={(e) =>
                  setAuthState({ ...authState, password: e.target.value })
                }
              />
              <span className="text-red-400 font-bold">{errors?.password}</span>
            </div>
            <div className="mt-5">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="cpassword"
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    password_confirmation: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-5">
              <Button disabled={loading} className="w-full">
                {loading ? "Processing..." : "Register"}
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <span className="w-full">Already have an account ?</span>
            <Link href="/login" className="text-orange-400 font-bold ml-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
