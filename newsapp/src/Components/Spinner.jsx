import React from "react";
import loading from "../Images/spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} width={200} alt="loading" />
    </div>
  );

}

export default Spinner;
