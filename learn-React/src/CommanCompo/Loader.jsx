import React from "react";
import LoaderImage from "./Loader.webp"
// import ChildCompoForProps from './04ChildCompoForProps.jsx';


export default function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <img src={LoaderImage} height={100} alt="LoaderImage" />
    </div>
  );
}
