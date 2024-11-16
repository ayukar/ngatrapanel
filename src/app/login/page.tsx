"use client"
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

type FormValues = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Login Data:", data);
    // Implement login logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-black/50 p-8 shadow-lg backdrop-blur-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">SocPanel</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`mt-1 w-full rounded-md border-gray-700 bg-gray-800 p-3 text-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500`}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`mt-1 w-full rounded-md border-gray-700 bg-gray-800 p-3 text-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500`}
              {...register("password", { required: "Password is required" })}
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-sm text-blue-400 hover:underline">Forgot?</a>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        {/* Login with Google */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-700 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Create Account Link */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            No account yet?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
