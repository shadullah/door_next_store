import React from "react";
import styles from "@/styles/Login.module.css";

const login = () => {
  return (
    <div>
      {/* hero content */}
      <div className="custom-img h-80 flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-60 md:bottom-96 bg-black/40 z-[2]"></div>
        <div className=" text-white z-[2]">
          <h1 className="text-2xl md:text-4xl font-bold my-16 text-white text-center">
            Login Or Register
            <div className=" border-red-400 border-2 w-24 mt-5 mx-auto"></div>
          </h1>
        </div>
      </div>
      <div className="">
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form id="form">
          <h3>Login Here</h3>

          <label id="label" for="username">
            Username
          </label>
          <input
            className="input"
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label id="label" for="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            id="password"
          />

          <button id="btn">Log In</button>
          <div class="social">
            <div class="go">
              <i class="fab fa-google"></i> Google
            </div>
            <div class="fb">
              <i class="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
