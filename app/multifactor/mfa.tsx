"use client";
import { supabase } from "@/utils/supabase/client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const MFALogin = () => {
  const [email, setEmail] = useState(""); // Initial stage
  const [error, setError] = useState(null);
  const [resendDisabled, setResendDisabled] = useState(false);

  const resendTimer = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Clear previous errors on input change
  };

  const sendOtp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: "http://localhost:3000/auth/callback",
        },
      });

      if (error) {
        throw error;
      }

      startResendTimer();
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
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-bold mt-3 mb-2"
              >
                Enter Your Email
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={email}
                onChange={handleEmailChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm px-3 py-2 border border-gray-300"
              />
              <button
                className="btn bg-blue-500 text-white border-0 mt-5 hover:bg-blue-800 "
                onClick={sendOtp}
              >
                Send Login Link
              </button>
              <span>{error}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFALogin;
