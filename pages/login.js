import React from "react";
import styles from "@/styles/Login.module.css";
import { useForm } from "react-hook-form";

const login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
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

      {/* login form htmml */}
      <div className="back_img">
        <form
          onSubmit={handleSubmit(submitHandler)}
          class="login-wrap mx-auto my-10"
        >
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">
              Sign Up
            </label>
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">
                    Email
                  </label>
                  <input
                    id="user"
                    type="email"
                    {...register("email", {
                      required: "Please enter email",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: "Please enter valid email",
                      },
                    })}
                    class="input"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    {...register("password", {
                      required: "Please enter email",
                      minLength: {
                        value: 6,
                        message: "password should be more than 5 characters",
                      },
                    })}
                    class="input"
                    data-type="password"
                  />
                  {errors.password && (
                    <div className="text-red-500">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                {/* <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <span class="icon"></span> Keep me Signed in
                  </label>
                </div> */}
                <div class="group">
                  <input type="submit" class="button" value="Sign In" />
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              <div class="sign-up-htm">
                <div class="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" class="input" />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
