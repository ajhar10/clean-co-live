import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-accent flex h-screen items-center justify-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div class="card-body">
            <p className="text-2xl text-center">Login</p>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <button className="btn hover:btn-accent">Login with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
