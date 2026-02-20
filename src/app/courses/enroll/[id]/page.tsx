"use cient";

import { use, useEffect, useState } from "react";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { validatePhone } from "@/components/shared/validation";
import {
  useEnrollCourseMutation,
  useGetSingleCourseByIdQuery,
} from "@/redux/feature/courseApi";
import { useRouter } from "next/navigation";
import { useVerifyPromoCodeMutation } from "@/redux/feature/VerifyCuppon.Api";
import { useCheckStudentCourseForEnrollQuery } from "@/redux/feature/student.api";
import Swal from "sweetalert2";
import { FieldValues, useForm } from "react-hook-form";
import { showToast } from "@/utils/CustomToast";
import { TError } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import Required from "@/components/shared/Required";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/shared/Loading";
import Link from "next/link";
import {
  applyCoupon,
  selectCartData,
  setPayNow,
  updateCart,
} from "@/redux/feature/slice/courseSlice";
import ManualPayment from "@/components/features/ManualPayment";
import EnrollCart from "@/components/features/EnrollCart";
import config from "@/config";

type TCourseEnrollProps = {
  params: Promise<{ id: string }>;
};

const CourseEnrollmentPage = ({ params }: TCourseEnrollProps) => {
  const param = use(params);
  const id = param.id;
  const [step] = useState(1);
  const [isApply, setIsApply] = useState(false);

  const { reset } = useForm();

  const router = useRouter();
  const { data: enrollCourse, isLoading: enrollCoursLoading } =
    useGetSingleCourseByIdQuery(id);
  const { data: sessionData } = useSession();

  const [senderNumber, setSenderNumber] = useState("");
  const [method, setMethod] = useState("bkash");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSenderNumber(value);
    setError(""); // Reset on typing
  };

//   const handleBlur = () => {
//     const err = validatePhone(senderNumber);
//     setError(err);
//   };

  // const [enroll, { data: enrollData, isLoading }] = useEnrollCourseMutation();
  const [enroll, { isLoading }] = useEnrollCourseMutation();

  const [verifyCuppon] = useVerifyPromoCodeMutation();

  const courseId = enrollCourse?.data?._id;

  // check course for student enroll

  const { data: isEnroll, isLoading: isEnrollLoading } =
    useCheckStudentCourseForEnrollQuery(courseId && courseId);

  const {
    baseFee,
    totalAmount,
    discountAmount,
    discountValue,

    amount,

    totalPaid,
    netPayable,
    payNow,
  } = useAppSelector(selectCartData);

  if (isEnroll?.data) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have already enrolled",

      // showCancelButton: true,
      confirmButtonColor: "#228B22",
      cancelButtonColor: "#d33",
      confirmButtonText: "View Information",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/dashboard");
      }
    });
  }

  // handle submit

  const handleonSubmit = async () => {
    try {
      const enrollInfo = {
        courseId,

        netPayable,
        totalPaid,

        courseName: enrollCourse?.data?.name,
        discountValue,
        discountAmount,
        method: method,
        amount: amount.toString(),
        totalAmount,
        senderNumber,
        course_code: enrollCourse?.data?.course_code,

        // submitBy: {
        //   _id: user?.id,
        //   model: "User",
        // },
      };

      //

      if (enrollCourse?.data?.defaultDiscount > 0) {
        Swal.fire({
          title: "কুপন ব্যবহার করেছেন?",
          text: "কুপন ব্যবহার না করলে ডিসকাউন্ট পাবেন না!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "হ্যাঁ, ব্যবহার করেছি!",
          cancelButtonText: "না",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await enroll(enrollInfo).unwrap();
            // console.log(res, "res");

            if (res.success) {
              // setStep(2);
              reset();
            }
          }
        });
      } else {
        const res = await enroll(enrollInfo).unwrap();
        // console.log(res, "res");
        reset();
        if (res.success) {
          showToast("Enrollment Requested Successfully", "success");
          router.push("/");

          //TODO setStep(2);
        }
      }
    } catch (err) {
      // console.log(error?.data);
      const error = err as TError;
      reset();
      showToast(`${error?.data?.message || "Something went wrong"}`, "error");
    }
  };

  const handleApplyCuppon = async (e: FieldValues) => {
    setIsApply(true);
    e.preventDefault();

    const form = e.target;
    const cuppon = form.cuppon.value;
    // console.log(cuppon, "cuppon data");
    const course = enrollCourse?.data._id;

    try {
      const cupponData = {
        promoText: cuppon,
        course,
      };
      // console.log(cupponData, "cuppon");

      const cupponRes = await verifyCuppon(cupponData).unwrap();

      if (cupponRes.success) {
        dispatch(applyCoupon(cupponRes.data.amount));
        setIsApply(true);

        showToast("Applied Successfull", "success");
      }
    } catch (err) {
      const error = err as TError;
      // console.log(error);
      setIsApply(false);
      showToast(`${error?.data?.message}`, "error");
    }
  };

  useEffect(() => {
    if (enrollCourse?.data) {
      dispatch(
        updateCart({
          courseDetails: enrollCourse.data,
          courseId: enrollCourse.data._id,
        }),
      );
    }
  }, [enrollCourse, dispatch]);

  const handlePayNowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);

    // Ensure the payment amount doesn't exceed the total
    const validatedAmount = Math.min(inputValue, netPayable);

    dispatch(updateCart({ payNow: validatedAmount }));
  };

  if (enrollCoursLoading) {
    return (
      <div className="h-screen flex justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto h-full   px-2  py-20 lg:py-36 ">
      <ManualPayment />

      {/* step 1-==============*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="container mx-auto  ">
          {/* course cart */}
          <EnrollCart
            totalAmount={totalAmount}
            totalPaid={payNow}
            category={enrollCourse?.data?.category}
            courseData={enrollCourse?.data}
            baseFee={baseFee}
            netPayable={netPayable}
            discountAmount={discountAmount}
          />
        </div>

        {step === 1 && (
          <div className="w-full bg-white dark:bg-[#000a1a] py-5">
            {/* Discount promotion */}
            {enrollCourse?.data?.defaultDiscount > 0 && (
              <h1 className="text-xl text-danger text-center my-5">
                <span className="text-green-600 font-bold">
                  {enrollCourse?.data?.defaultPromo}
                </span>{" "}
                কুপন কোড ব্যবহারে {enrollCourse?.data?.defaultDiscount} টাকা
                ছাড়!
              </h1>
            )}

            {/* Coupon application */}
            <div className="w-full max-w-lg mx-auto text-black dark:text-gray-100 rounded border py-5 px-1.5 my-3.5">
              <form onSubmit={handleApplyCuppon} className="flex items-center">
                <div className="w-full grid gap-2.5">
                  <Label>Apply Coupon</Label>
                  <Input
                    type="text"
                    name="cuppon"
                    placeholder="A5B..."
                    color="success"
                    className="rounded-lg bg-gray-300"
                    defaultValue={enrollCourse?.data?.defaultPromo}
                  />
                </div>
                <div className="mt-6 ms-4">
                  <Button
                    disabled={isApply}
                    type="submit"
                    className="bg-gray-300 dark:bg-green-700 dark:text-white border border-red-200 rounded text-black relative flex items-center justify-center px-4 py-2"
                  >
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-800"></span>
                    </span>
                    <span className="relative">Apply</span>
                  </Button>
                </div>
              </form>
            </div>

            {/* Sender number */}
            <div className="space-y-2 max-w-lg mx-auto">
              <Label htmlFor="phone">
                Payment Method <Required />{" "}
              </Label>

              <select
                className="px-3 py-1.5 drop-shadow-2xl border-2 border-gray-200 dark:border-neutral-700 right-1 rounded w-full"
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="bkash">Bkash</option>
              </select>

              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <div className="space-y-2 mt-2.5 max-w-lg mx-auto">
              <Label htmlFor="phone">
                Sender Number <Required />{" "}
              </Label>
              <Input
                id="phone"
                type="text"
                value={senderNumber}
                onChange={handleChange}
                // onBlur={handleBlur}
                placeholder="018********"
                className={error ? "border-red-500" : ""}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            {/* Pay now input */}
            <div className="grid gap-2.5 max-w-lg mx-auto mt-5">
              <Label>
                Pay Now <Required />{" "}
              </Label>
              <Input
                onChange={handlePayNowChange}
                min={0}
                max={netPayable}
                type="number"
                placeholder={`Enter amount (Max: ${netPayable})`}
                onKeyUp={(e) => {
                  const input = e.target as HTMLInputElement;
                  const inputValue = Number(input.value);
                  if (inputValue > netPayable) {
                    input.value = netPayable.toString();
                    dispatch(setPayNow(netPayable));
                  }
                }}
                onBlur={(e) => {
                  const input = e.target as HTMLInputElement;
                  const inputValue = Number(input.value);

                  if (inputValue > netPayable) {
                    input.value = netPayable.toString();
                    dispatch(setPayNow(netPayable));
                  } else if (inputValue < 0 || isNaN(inputValue)) {
                    input.value = "0";
                    dispatch(setPayNow(0));
                  }
                }}
              />
            </div>
          </div>
        )}
        {/* TODO */}
        {/* {step === 2 && !isLoading && <CoursePayment enrollData={enrollData} />} */}
      </div>
      {/*  */}
      <div className="">
        {isLoading ? (
          <LoadingButton />
        ) : isEnroll?.data ? (
          <button className="w-full bg-green-500 px-2 py-2 mt-3 cursor-pointer text-white rounded-md mx-auto">
            <Link href={`${config.domain}`}>View Information</Link>
          </button>
        ) : (
          <Button
            disabled={isEnrollLoading}
            onClick={handleonSubmit}
            color="success"
            type="submit"
            className=" mt-10 text-lg font-bold cursor-pointer w-full text-white rounded-md mx-auto"
          >
            {/* Proceed to Payment */}
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseEnrollmentPage;
