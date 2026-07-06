import React from "react";
import loading from "./loading.gif";
function Spinner() {
  return (
    <div>
      <div className="text-center">
        <img
          className="my-3"
          src={loading}
          alt="Loading"
          style={{ height: 70, width: 70 }}
        />
      </div>
    </div>
  );
}
export default Spinner;
