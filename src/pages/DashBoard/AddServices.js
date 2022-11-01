import React, { useEffect, useState } from "react";
import axios from "axios";
const AddServices = () => {
  const [services, setServices] = useState();
  console.log(services);
  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:3000/service");
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
