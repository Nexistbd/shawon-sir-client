import { ArrowRight, Eye, EyeOff, Info, Lock, Phone, User } from "lucide-react";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Required from "./Required";
import { formatPhoneNumber, validatePassword } from "./validation";
import LoadingButton from "./Loading";
import OTPInput from "./OTPInput";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CurrentPhone, setPhoneNumber } from "@/redux/feature/auth/authSliece";
import { errorTotast, showToast } from "@/utils/CustomToast";
import { logger } from "@/utils/logger";
import { TError } from "@/types";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const currentPhone = useAppSelector(CurrentPhone);
  const [phone, setPhone] = useState(currentPhone);
  const {
    handleSubmit,
    reset,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const handleAdd = async (data: FieldValues) => {};
  const handlePhoneChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    // Clear error when user types
    if (errors.phone) {
      setError("phone", errors.phone);
    }
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!phone) {
        showToast("phone number required", "error");
        return;
      }

      dispatch(setPhoneNumber(phone));

      //   const res = await sendOtp(phone).unwrap();

      //   // success case
      //   if (res.success) {
      //     showToast(res.message || "OTP sent successfully", "success");
      //     setStep(2);
      //   } else if (res.err.statusCode === 208) {
      //     showToast(res.message || "Phone Alredy Exist", "error");
      //     return;
      //   }
    } catch (err) {
      const error = err as TError;
      logger.log(error, "as error");

      errorTotast(error);
    }
  };

  const handleVerifyOtp = async (code: string) => {
    try {
      //   const res = await verifyOtp({ phone, code }).unwrap();
      //   if (res.success) {
      //     showToast("Verified successfully", "success");
      //     setStep(3);
      //   }
    } catch (err) {
      errorTotast(err as TError);
    }
  };

  const onSignupSubmit = async (data: FieldValues) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });

      return;
    }
    try {
      const payload = {
        ...data,
        phone,
      };
      const loggedData = {
        phone,
        password: data.password,
      };

      //   const registration = await signUp(payload).unwrap();
      //   if (registration.success) {
      //     const res = await login(loggedData).unwrap();

      //     const user = VerifyJwt(res.data.accessToken);

      //     // in redux state

      //     dispatch(setUser({ user: user, token: res.data.accessToken }));
      //     if (res.success) {
      //       await router.push(from);
      //     }
      //     successTotast();
      //     reset();
      //     setPhone("");
      //     dispatch(removePhone());
      //   }
    } catch (err) {
      errorTotast(err as TError);
    }
  };

  return (
    <div>
      <div className="my-3.5 mb-5 pb-2.5 border-b  ">
        <h1 className="text-3xl font-bold opacity-80">Sign Up</h1>
        <p className="text-sm font-light">Welcome To Career Aid </p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 h-full">
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="login-phone"
                className="text-lg font-semibold text-gray-700 block"
              >
                ফোন নাম্বার দিন <Required />
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="login-phone"
                  type="tel"
                  value={phone as string}
                  onChange={handlePhoneChange}
                  placeholder="01XXXXXXXXX"
                  className="w-full pl-12 pr-4 h-14 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-lg"
                  //   disabled={isSendingOTP}
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.phone?.message as string}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                নোট: +88 লিখতে হবে না, সরাসরি 01 দিয়ে শুরু করুন
              </p>
            </div>

            <button
              type="submit"
              //   disabled={isSendingOTP || !phone}
              className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {/* {isSendingOTP ? (
                <>
                  <LoadingButton />
                  অপেক্ষা করুণ...
                </>
              ) : (
                <>
                  পরবর্তী
                  <ArrowRight className="h-5 w-5" />
                </>
              )} */}
              <>
                পরবর্তী
                <ArrowRight className="h-5 w-5" />
              </>
            </button>
          </form>
        )}

        {/* {step === 2 && (
          <OTPInput
            phone={phone as string}
            onVerify={handleVerifyOtp}
            isVerifying
          />
        )} */}
        {step === 3 && (
          <form onSubmit={handleSubmit(onSignupSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="signup-phone"
                className="text-sm font-medium text-gray-700"
              >
                নাম <Required />
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="signup-name"
                  type="tel"
                  placeholder="Enter your name"
                  className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  {...register("name", {
                    required: "Name  is required",
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-600">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="signup-password"
                className="text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড <Required />
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  {...register("password", {
                    required: "Password is required",
                    validate: validatePassword,
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="signup-confirm-password"
                className="text-sm font-medium text-gray-700"
              >
                পুনরায় পাসওয়ার্ড <Required />
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="signup-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">
                  {errors.confirmPassword.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              //   disabled={isSigning || isLoging}
            >
              {/* {isSigning || isLoging ? "Creating account..." : "Create Account"}
               */}
              একাউন্ট খুলুন
            </Button>
          </form>
        )}
      </div>
      <p className="text-gray-400 mt-3.5">
        আগেই অ্যাকাউন্ট আছে?
        <span className="text-green">লগইন করুন</span>
      </p>
    </div>
  );
};

export default Registration;
