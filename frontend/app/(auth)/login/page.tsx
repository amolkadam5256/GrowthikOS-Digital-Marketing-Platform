"use client";

import React, { useState } from "react";
import Link from "next/link";
import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(email, password);
      // Save tokens to localStorage
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
      localStorage.setItem("user", JSON.stringify(response.user));
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-foreground">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card p-8 border border-secondary-50/10 rounded-xl shadow-lg">
          {success ? (
            <div className="rounded-md bg-success-500/10 p-4 border border-success-500/30">
              <h3 className="text-sm font-medium text-success-500">
                Login Successful!
              </h3>
              <p className="mt-2 text-sm text-success-500/90">
                You have logged in successfully. Welcome to the platform.
              </p>
              <div className="mt-4">
                <Link
                  href="/"
                  className="text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  Go to Home Page &rarr;
                </Link>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-md bg-destructive-500/10 p-4 border border-destructive-500/30 text-sm text-destructive-500">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-foreground"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-background px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-secondary-500/30 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-foreground"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 bg-background px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-secondary-500/30 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          )}

          <p className="mt-10 text-center text-sm text-secondary-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-primary-500 hover:text-primary-400"
            >
              Start a free trial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
