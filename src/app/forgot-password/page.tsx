"use client";
import Required from "@/components/shared/Required";
import { formatPhoneNumber } from "@/components/shared/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/redux/feature/auth/authApi";
import { setPhoneNumber } from "@/redux/feature/auth/authSliece";
import { useAppDispatch } from "@/redux/hook";
import { TError } from "@/types";
import { errorTotast, successTotast } from "@/utils/CustomToast";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FieldValues, useForm } from "react-hook-form";

const ForgetPasswordPage = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [phone, setPhone] = useState("");
  const dispatch = useAppDispatch();

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm();

  const handlePhoneChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    // Clear error when user types
    if (errors.phone) {
      setError("phone", errors.phone);
    }
  };

  //

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = (await forgotPassword({ phone })) as any;

      if (res && res.error) {
        errorTotast(res.error);
      } else {
        successTotast("Code send successfully");

        dispatch(setPhoneNumber(phone));
        router.push("/reset-password");
      }
    } catch (error) {
      errorTotast(error as TError);
    }
  };

  return (
    <div className=" h-full min-h-screen flex  justify-center  mt-36">
      <div className=" w-full md:w-125   border dark:border-gray-600 h-75 rounded-md">
        <div className="pb-10  w-full">
          <p className="p-3 bg-[#003135] shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  w-full font-bold rounded text-white">
            Forgot Password
          </p>
        </div>

        <div className="px-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" space-y-2.5 w-full">
              <Label>
                আপনার ফোন নাম্বার দিন। <Required />{" "}
              </Label>
              <Input
                required
                {...register("phone", { required: true })}
                maxLength={11}
                onChange={handlePhoneChange}
                type="text"
                color="success"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <span className="text-red-500">Phone is required</span>
              )}

              {/* send rijik  */}

              {isLoading ? (
                <Button color="success">Loading</Button>
              ) : (
                <Button type="submit" className="w-full mt-10  text-white">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
