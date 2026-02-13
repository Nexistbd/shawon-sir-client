"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Info, Lock, Phone, X } from "lucide-react";

import LoadingButton from "./Loading";
import Registration from "./Registration";
import { useLoginSheet } from "./LoginSheet";
import { errorTotast } from "@/utils/CustomToast";
import { TError } from "@/types";

const loginSchema = z.object({
  phone: z.string().min(11, "ফোন নম্বর অবশ্যই ১১ সংখ্যার হতে হবে"),
  password: z
    .string()
    .min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে")
    .max(10, "পাসওয়ার্ড ১০ অক্ষরের বেশি হতে পারবেনা "),
});

// Validation schema for registration

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get closeLogin from context if available
  let closeLogin: (() => void) | undefined;
  try {
    closeLogin = useLoginSheet().closeLogin;
  } catch {
    // Not in LoginSheetProvider, ignore
  }

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        phone: data.phone,
        password: data.password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        console.error("Login failed:", result.error);
        // toast.error("লগইন ব্যর্থ হয়েছে। আপনার ফোন নম্বর এবং পাসওয়ার্ড যাচাই করুন।");
      } else {
        // Close the sheet if used in a modal
        if (closeLogin) {
          closeLogin();
        }
        // Redirect to the callback URL after successful login
        // Clear the login query param to prevent auto-opening on refresh
        const newSearchParams = new URLSearchParams();
        newSearchParams.set("callbackUrl", callbackUrl);
        router.push(`${pathname}?${newSearchParams.toString()}`);
        const targetUrl = callbackUrl || pathname;

        router.replace(targetUrl);
        router.refresh();
      }
    } catch (error) {
      errorTotast(error as TError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFFFD] dark:bg-black/60 p-4">
      <Card className="w-full max-w-md shadow-lg border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header with Logo and Close Button */}

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full px-6"
          >
            <TabsList className="w-full bg-light-green dark:bg-green-950 rounded-xl mb-6 h-12 p-1">
              <TabsTrigger
                value="login"
                className="rounded-lg h-10 flex-1 data-[state=active]:bg-green data-[state=active]:dark:bg-primary  data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                লগইন
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="rounded-lg h-10 flex-1 data-[state=active]:bg-green data-[state=active]:dark:bg-primary  data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                নতুন অ্যাকাউন্ট
              </TabsTrigger>
            </TabsList>

            {/* Login Tab Content */}
            <TabsContent value="login" className="mt-0 pb-6">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 relative">
                <div className="flex gap-3">
                  <Info className="text-teal-500 shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-teal-800 leading-relaxed">
                    ফোন নাম্বার এবং পাসওয়ার্ড দিয়ে লগইন করুন
                  </p>
                </div>
              </div>

              <form
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="login-phone"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  >
                    ফোন নম্বর
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-phone"
                      type="tel"
                      placeholder="আপনার ফোন নম্বর লিখুন"
                      {...loginForm.register("phone")}
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone size={16} />
                    </span>
                  </div>
                  {loginForm.formState.errors.phone && (
                    <p className="text-red-500 text-sm">
                      {loginForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="login-password"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  >
                    পাসওয়ার্ড
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="আপনার পাসওয়ার্ড লিখুন"
                      {...loginForm.register("password")}
                      className="pl-10 pr-10 h-12 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={16} />
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {loginForm.formState.errors.password && (
                    <p className="text-red-500 text-sm">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-orange-600 text-white text-lg h-12 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <LoadingButton /> : "লগইন করুন"}
                </Button>

                <div className="text-center pt-2">
                  <a
                    href="#"
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </a>
                </div>
              </form>
            </TabsContent>

            {/* Register Tab Content */}
            <TabsContent value="register" className="mt-0 pb-6">
              <Registration />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
