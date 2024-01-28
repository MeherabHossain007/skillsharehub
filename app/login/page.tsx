"use client"; // This is a client component
import { supabase } from "@/supabase/client";
import { url } from "inspector";
import { NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";

const LoginPage = (res: NextApiResponse) => {
  const [disabled, setDisabled] = useState(true);

  const router = useRouter();

  const handleLogin = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    let { data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data) {
      router.push("http://localhost:3000/auth/callback");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef(null);

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;

    if (validateCaptcha(value)) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Captcha Matched",
        showConfirmButton: false,
        timer: 1500,
      });
      setDisabled(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Captcha did not Match!!",
        text: "Something went wrong!",
        footer: '<a href="#">Give Correct Captcha.</a>',
      });
      setDisabled(true);
    }
  };

  // Move captcha validation here, after defining value
  const captchaValue = captchaRef.current?.value || "";

  if (!validateCaptcha(captchaValue)) {
    // If captcha validation fails, show an error
    Swal.fire({
      icon: "error",
      title: "Captcha did not Match!!",
      text: "Something went wrong!",
      footer: '<a href="#">Give Correct Captcha.</a>',
    });
    setDisabled(true);
    return (
      // Return some JSX here if needed
      <div>Error in captcha validation</div>
    );
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 text-[#5A66FF] text-center  md:pr-[150px]">
              Unlock Your Learning Potential
            </h1>
            <p className="text-lg text-gray-600 mb-6  w-[250px] text-center ml-[50px]">
              SkillShare Hub - Where Knowledge Meets Opportunity
            </p>

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="Type the text above"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className=" btn btn-outline btn-xs mt-2"
                    type="button"
                  >
                    Validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Don't have an account?
                      <Link
                        href="/register"
                        className="text-[#5A66FF] font-semibold"
                      >
                        Click here to register
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.ibb.co/HK7dcJV/login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
