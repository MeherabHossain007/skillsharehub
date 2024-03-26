"use client";
import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const handleSignup = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
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
              <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
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
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                  <PasswordStrengthBar className="mt-2" password={password} />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary">Register</button>
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Already have an account?
                      <Link
                        href="/login"
                        className="text-[#5A66FF] font-semibold"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.ibb.co/bKj2T8j/Rectangle-77.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
