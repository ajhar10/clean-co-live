import React from "react";
import bucketgirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
  return (
    <div className="relative">
      <div className="hero h-screen lg:h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
              className="text-5xl font-bold max-w-xl"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
              className="py-6 max-w-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos="zoom-in-right"
              data-aos-delay="550"
              data-aos-duration="1000"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={bucketgirl} className="h-full" alt="girl.png" />
          </div>
        </div>
      </div>
      <div className="relative w-5/6 mx-auto shadow-lg bg-base-200 mt-[-30px] z-20 rounded-2xl px-4 py-8">
        <p className="text-xl text-primary mb-4">Get Free Estimate</p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary mt-4">REQUEST A QOUTE</button>
      </div>
    </div>
  );
};

export default Landing;
