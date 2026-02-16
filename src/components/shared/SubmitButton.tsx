import { FC } from "react";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import LoadingButton from "./Loading";

type TSubmitButton = {
  isLoading: boolean;
  title?: string;
  fullWidth?: boolean;
  className?: string;
};

const SubmitButton: FC<TSubmitButton> = ({
  isLoading,
  title = "Submit",
  fullWidth,
  className,
}) => {
  return (
    <div className="flex justify-end mt-5">
      {isLoading ? (
        <LoadingButton />
      ) : (
        <Button
          className={clsx(
            "ml-auto bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
            fullWidth ? "w-full" : "w-full max-w-md",
            className,
          )}
          type="submit"
          size="lg"
        >
          <CheckCircle2 className="mr-2 h-5 w-5" />
          {title}
        </Button>
      )}
    </div>
  );
};

export default SubmitButton;
