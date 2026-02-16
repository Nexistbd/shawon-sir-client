"use client";

import LoadingButton from "@/components/shared/Loading";
import OtpCountDown from "@/components/shared/OtpCountDown";
import Required from "@/components/shared/Required";
import SubmitButton from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/redux/feature/auth/authApi";
import { CurrentPhone, removePhone } from "@/redux/feature/auth/authSliece";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { successTotast } from "@/utils/CustomToast";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ResetPassPage = () => {
  const [isEnable, setIsEnable] = useState(true);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [forgotPassword, { isLoading: fogtLoading }] =
    useForgotPasswordMutation();
  const phoneNumber = useAppSelector(CurrentPhone);

  const dispatch = useAppDispatch();

  const router = useRouter();

  // handle reset

  const handleReset = async () => {
    const res = (await forgotPassword({ phone: phoneNumber })) as any;
    // console.log(res, "res");
    if (res && res.error) {
      const errorMessage = res.error;
      errorMessage(errorMessage);
    } else {
      successTotast("Code send successfully");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //

  const onSubmit = async (data: FieldValues) => {
    const code = data.code;
    const password = data.password;

    try {
      const resetData = {
        phone: phoneNumber,
        code,
        password,
      };

      const res = (await resetPassword(resetData)) as any;
      // console.log(res, "res");
      if (res && res.error) {
        const errorMessage = res.error;
        errorMessage(errorMessage);
      } else {
        successTotast("Pasword Changed successfully");
        // set in state

        dispatch(removePhone());

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  flex justify-center  mt-24">
      <div className=" w-full md:w-[500px]   border h-[400px] rounded-md">
        <div className="flex bg-[#003135] text-white ">
          <p className="rounded p-3 w-full font-bold">Reset Password</p>
          <OtpCountDown setIsEnable={setIsEnable} />
        </div>

        <div className="p-3  mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* code */}

            <div className=" space-y-2.5 w-full">
              <Label>
                OTP <Required />
              </Label>
              <Input
                {...register("code", { required: true })}
                maxLength={4}
                color="success"
                type="text"
                placeholder="OTP"
              />
              {errors.code && (
                <span className="text-red-500">Phone is required</span>
              )}

              {/* send rijik  */}
            </div>

            {/* password */}
            <div className="space-y-2.5 mt-5 w-full">
              <Label>
                New Password <Required />
              </Label>
              <Input
                {...register("password", { required: true })}
                minLength={6}
                type="password"
                placeholder="Password"
                color="success"
              />
              {errors.password && (
                <span className="text-red-500">Phone is required</span>
              )}

              {/* send rijik  */}
            </div>

            {/* submit button */}

            <div className="flex justify-end">
              <div>
                {isLoading ? (
                  <LoadingButton />
                ) : (
                  <SubmitButton isLoading={isLoading} />
                )}
              </div>
            </div>
          </form>
          <div className="mt-2 ">
            {fogtLoading ? (
              <LoadingButton />
            ) : (
              <Button
                onClick={handleReset}
                disabled={isEnable}
                className={`${
                  isEnable ? "bg-gray-500" : "bg-success-500"
                } w-36 mt-5 text-white`}
              >
                Resend
              </Button>
            )}
          </div>
          <Link className="flex items-center mt-3.5" href={"/forgot-password"}>
            <ArrowLeft />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;
