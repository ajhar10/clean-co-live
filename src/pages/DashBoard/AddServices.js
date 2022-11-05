import React, { useEffect, useState } from "react";
import fetcher from "../../api";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddServices = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceData = { ...data, image: imageURL };
    const res = await fetcher.post("add-service", serviceData);
    reset();
    setImageURL("");
  };

  const handleUploadaImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=663c6d1ee1d8374478607d7c0abdf719",
        formData
      )
      .then((res) => setImageURL(res.data.data.display_url), setLoading(false))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-accent w-full flex h-screen items-center justify-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-2xl text-center">Service Add</p>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">Service Name</span>
              </label>
              <input
                id="serviceName"
                type="text"
                class="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div class="form-control">
              <label htmlFor="servicePrice" class="label">
                <span class="label-text">Service Price</span>
              </label>
              <input
                id="servicePrice"
                type="text"
                class="input input-bordered"
                {...register("servicePrice")}
              />
            </div>
            <div class="form-control">
              <label
                class={
                  loading
                    ? "btn btn-primary mt-5 loading"
                    : "btn btn-primary mt-5 "
                }
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                class="input input-bordered hidden"
                onChange={handleUploadaImage}
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={!imageURL ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
