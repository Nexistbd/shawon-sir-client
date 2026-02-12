import { TError } from "@/types";
import Swal from "sweetalert2";

export const showToast = (
  title: string,
  icon: "success" | "error" | "warning" | "info",
  position: "top" | "top-end" | "center" | "bottom-end" = "top-end",
  timer: number = 2500,
) => {
  Swal.fire({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    title,
    icon,
  });
};

export const successTotast = (message?: string) => {
  showToast(message ? message : "Added successfully", "success");
};
export const errorTotast = (error?: TError) => {
  showToast(error?.data?.message || "somethig went wrong", "error");
};
