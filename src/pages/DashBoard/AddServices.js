import React, { useEffect, useState } from "react";
import fetcher from "../../api";
const AddServices = () => {
  const [services, setServices] = useState();
  console.log(services);
  useEffect(() => {
    (async () => {
      const result = await fetcher.get("/service");
      setServices(result);
    })();
  }, []);
  return (
    <div>
      <p>AddServices</p>
      <p>AddServices</p>
      <p>AddServices</p>
      <p>AddServices</p>
    </div>
  );
};

export default AddServices;
