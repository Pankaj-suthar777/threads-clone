"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const params = useSearchParams();
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });

  function submit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <div className="bg-background">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
          </div>
          {params.get("message") ? (
            <div className="bg-green-400 p-4 rounded-lg my-4">
              <strong>Success!</strong> {params.get("message")}
            </div>
          ) : null}
          <h1 className="text-2xl font-bold">Login</h1>
          <p>Welcome back</p>
          <form onSubmit={submit}>
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
            </div>
            <div className="mt-5">
              <Button className="w-full">Login</Button>
            </div>
          </form>
          <div className="mt-5">
            <span className="w-full">Don't have an account ?</span>
            <Link href="/register" className="text-orange-400 font-bold ml-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
