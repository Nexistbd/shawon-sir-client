"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Info, Lock, Phone, X } from "lucide-react";
import Image from "next/image";
import assets from "@/assets";
import LoadingButton from "./Loading";
import Registration from "./Registration";

// Validation schema for login
const loginSchema = z.object({
  phone: z.string().min(11, "ফোন নম্বর অবশ্যই ১১ সংখ্যার হতে হবে"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
});

// Validation schema for registration

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFFFD] p-4">
      <Card className="w-full max-w-md shadow-lg border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="w-12 h-12  ">
              <Image src={assets.logo.logoSvg} alt="logo" />
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full px-6"
          >
            <TabsList className="w-full bg-light-green rounded-xl mb-6 h-12 p-1">
              <TabsTrigger
                value="login"
                className="rounded-lg h-10 flex-1 data-[state=active]:bg-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                লগইন
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="rounded-lg h-10 flex-1 data-[state=active]:bg-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
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
                    className="text-gray-700 font-medium"
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
                    className="text-gray-700 font-medium"
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
                  className="w-full bg-primary  hover:bg-orange-600 text-white text-lg  h-12 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold "
                >
                  <LoadingButton />
                  লগইন করুন
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
