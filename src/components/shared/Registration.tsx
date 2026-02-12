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
  const [step, setStep] = useState(3);
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
      {step === 1 && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 relative">
          <div className="flex gap-3">
            <Info className="text-teal-500 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-teal-800 leading-relaxed">
              অ্যাকাউন্ট করতে ফোন নাম্বার দিন
            </p>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md  h-full">
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="login-phone"
                className="text-gray-700 font-medium"
              >
                ফোন নম্বর <Required />
              </Label>
              <div className="relative">
                <Input
                  id="login-phone"
                  type="tel"
                  placeholder="আপনার ফোন নম্বর লিখুন"
                  {...register("phone")}
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone size={16} />
                </span>
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            <button
              type="submit"
              //   disabled={isSendingOTP || !phone}
              className="w-full h-14 bg-primary hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

        {step === 2 && (
          <OTPInput
            phone={phone as string}
            onVerify={handleVerifyOtp}
            isVerifying
          />
        )}
        {step === 3 && (
          <form
            onSubmit={handleSubmit(onSignupSubmit)}
            className="space-y-4 px-1.5"
          >
            <div className="space-y-2">
              <Label
                htmlFor="signup-phone"
                className=" font-medium text-gray-700"
              >
                নাম <Required />
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="signup-name"
                  type="tel"
                  placeholder="আপনার নাম লিখুন"
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
                  placeholder="একটি  পাসওয়ার্ড দিন"
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
                  placeholder="পুনরায় পাসওয়ার্ড দিন"
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
              className="w-full h-11 bg-primary hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              //   disabled={isSigning || isLoging}
            >
              {/* {isSigning || isLoging ? "Creating account..." : "Create Account"}
               */}
              অ্যাকাউন্ট খুলুন
            </Button>
          </form>
        )}
      </div>
      <p className="text-gray-400 mt-3.5">
        আগেই অ্যাকাউন্ট আছে?
        <span className="text-green"> লগইন করুন</span>
      </p>
    </div>
  );
};

export default Registration;
