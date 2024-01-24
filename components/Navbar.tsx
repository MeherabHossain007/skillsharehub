

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:my-[0px] my-[50px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Login </a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.ibb.co/3dP7DcN/logo.png" alt="logo"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Features</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#5A66FF] text-white" href="/login" role="button">Get Started </a>
        </div>
      </div>
    );
};

export default Navbar;