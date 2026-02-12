import React, { useState, useEffect } from "react";
import { RefreshCw, AlertCircle } from "lucide-react";
// import { useLazySendOTPQuery } from "@/redux/features/user.Api";

const OTPInput = ({
  phone,
  onVerify,
  isVerifying,
}: {
  phone: string;
  onVerify: (code: string, phone: string) => void;
  isVerifying: boolean;
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const [resendTimer, setResendTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);

  // const [triggerSendOtp, { isLoading }] = useLazySendOTPQuery();

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("").concat(Array(4).fill("")).slice(0, 4);
    setOtp(newOtp);

    if (newOtp.every((digit) => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleVerify = async (code: string) => {
    onVerify(code, phone);
  };

  const handleResend = async () => {
    if (!canResend) return;

    setCanResend(false);
    setResendTimer(120);
    setOtp(["", "", "", ""]);
    setError("");

    // Simulate resend API call
    const res = await triggerSendOtp(phone).unwrap();
    if (res.success) {
      document.getElementById("otp-0")?.focus();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">ওটিপি যাচাইকরণ</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{phone}</span>
          <br />
          এই নম্বরে ওটিপি পাঠানো হয়েছে
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-3" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={isVerifying}
              className={`w-12 h-14 text-center text-2xl font-semibold border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : digit
                  ? "border-blue-500 focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-500"
              } ${isVerifying ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          ))}
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {isVerifying && (
          <div className="flex items-center justify-center gap-2 text-blue-600 text-sm">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span>যাচাই করা হচ্ছে...</span>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-600">কোড পাননি?</span>
          <button
            onClick={handleResend}
            disabled={!canResend || isVerifying || isLoading}
            className={`font-semibold flex items-center gap-1 transition-colors ${
              canResend && !isVerifying
                ? "text-blue-600 hover:text-blue-700"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {canResend ? "আবার পাঠান" : `পুনরায় পাঠান (${resendTimer}s)`}
          </button>
        </div>
      </div>

      <button
        onClick={() => handleVerify(otp.join(""))}
        disabled={otp.some((digit) => digit === "") || isVerifying}
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg transition-all hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
      >
        {isVerifying ? "যাচাই করা হচ্ছে..." : "যাচাই করুন"}
      </button>
    </div>
  );
};

export default OTPInput;
