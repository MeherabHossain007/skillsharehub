"use client"; // This is a client component
import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const LoginPage = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const captcha = useRef<HCaptcha>();

  const router = useRouter();

  const handleLogin = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
      options: { captchaToken },
    });

    if (error) {
      console.log(error);
    }

    captcha.current?.resetCaptcha();
    if (data.user != null && captchaToken) {
      console.log(data.user);
      router.push(`http://localhost:3000/mfa`);
    }
  };

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
                <div className="form-control mt-4">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                  {/* Captcha */}
                  <div className="mt-4"></div>
                  <HCaptcha
                    ref={captcha}
                    sitekey="34be2ef2-257a-4b1d-adb4-a85b4f013062"
                    onVerify={(token) => {
                      setCaptchaToken(token);
                    }}
                  />
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
