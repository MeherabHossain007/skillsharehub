import Link from "next/link";

const LoginPage = () => {
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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                <div className="form-control mt-6">
                  <Link href="/mycourse" className="btn btn-primary">
               
                    <button>Login</button>
                  </Link>
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
