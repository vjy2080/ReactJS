import React from "react";
import { Link, Outlet } from "react-router-dom";

const Examples = () => {
  return (
    <>

      <div className="container">
        <div className="row mt-1">
          <h2>Topics</h2>
        </div>

        <div className="row mt-2">
          <div className="col text-center mt-2">
            <h3>Examples of Class and Functional Components </h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="text-center border w-50 pt-2 rounded border-info">
            <h3>
              <Link to="classcompo">Class Component</Link>
            </h3>
          </div>
          <div className="text-center border w-50 pt-2 rounded border-danger">
            <h3>
              <Link to="functionalcompo">Fucntional Component</Link>
            </h3>
          </div>
        </div>
        <div className="row my-3 p-3 border border-secondary rounded">
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

    </>
  );
};

export default Examples;
