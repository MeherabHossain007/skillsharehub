"use client";
import { supabase } from "@/supabase/client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MFALogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState("enterPhone"); // Initial stage
  const [error, setError] = useState(null);
  const [resendDisabled, setResendDisabled] = useState(false);

  const resendTimer = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Clear previous errors on input change
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
    setError(null); // Clear previous errors on input change
  };

  const sendOtp = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
        },
      });

      if (error) {
        throw error;
      }

      setStage("enterOtp");
      startResendTimer();
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) {
        throw error;
      }

      // Handle successful login (e.g., redirect to protected area)
      if (session) {
        router.push("http://localhost:3000/auth/callback");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const startResendTimer = () => {
    setResendDisabled(true); // Disable resend button initially
    resendTimer.current = setTimeout(() => {
      setResendDisabled(false); // Allow resend after time limit
    }, 30000); // Example: Allow resend after 30 seconds
  };

  const clearResendTimer = () => {
    if (resendTimer.current) {
      clearTimeout(resendTimer.current);
      resendTimer.current = null;
    }
  };

  useEffect(() => {
    return () => clearResendTimer(); // Clear timer on component unmount
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md">
          <div className="flex justify-center p-6">
            <Image
              src="https://lbqycppmvrcvlgiwsqfm.supabase.co/storage/v1/object/public/Thumbnail/istockphoto-1257404830-612x612.jpg"
              height={100}
              width={100}
              alt="Check Email"
              className="w-20 h-20 rounded-full mx-auto"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Find Your Login URL</h2>
            <p className="text-gray-700">
              We have sent an email with your login URL. Check your inbox and
              follow the instructions.
            </p>
            <a
              href="https://mail.google.com/"
              className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md mt-4"
            >
              <span className="mr-2">Find Login URL</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFALogin;
