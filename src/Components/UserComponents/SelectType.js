import React, { useEffect, useState } from "react";
import XrayImage from "../../Images/Xraysimage.png";
import CtImage from "../../Images/ctimage.png";
import ClinicalImage from "../../Images/Clinicalimage.png";
import bgImage from "../../Images/bgimage.png";
import Lungs from "../../Images/Lungs.png";
import Banner from "../../Images/banner.png";
import { Link } from "react-router-dom";
export default function SelectType() {
  const [usertype, setUsertype] = useState(
    window.localStorage.getItem("usertype")
  );
  return (
    <div
      style={{
        marginLeft: "10%",
        backgroundColor: "#D4D4D4",
        height: "100%",
        paddingBottom: "0px",
        marginTop: "0px",
        width: "80%",
      }}
    >
      <div
        className="ImageDiv row"
        style={{
          backgroundImage: `url(${Banner})`,
          maxWidth: "100%",
          height: "68vh",
        }}
      >
        <a href={"/" + usertype + "/makeprediction"}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ color: "black", background: "white" }}
          >
            Back
          </button>
        </a>

        <h1 className="text-center" style={{ color: "black" }}>
          Select Data Category
        </h1>

        <div style={{}} className="Box col-md-6 col-lg-3 col-sm-6">
          <Link to={"/" + usertype + "/demographic"}>
            <p style={{ marginTop: "1vh" }}>Demographic</p>
            <img class="responsive" src={ClinicalImage} />
          </Link>
        </div>
        <div style={{}} className="Box col-md-6 col-lg-3 col-sm-6">
          <Link to={"/" + usertype + "/clinical"}>
            <p style={{ marginTop: "1vh" }}>Clinical</p>
            <img class="responsive" src={bgImage} />
          </Link>
        </div>
        <div style={{}} className="Box col-md-6 col-lg-3 col-sm-6">
          <Link to={"/" + usertype + "/bacterial"}>
            <p style={{ marginTop: "1vh" }}> BACTERIAL GENOMES</p>
            <img class="responsive" src={CtImage} />
          </Link>
        </div>
        <div style={{}} className="Box col-md-6 col-lg-3 col-sm-6">
          <Link to={"/" + usertype + "/xray"}>
            <p style={{ marginTop: "1vh" }}>XRAYS</p>
            <img class="responsive" src={XrayImage} />
          </Link>
        </div>
      </div>
    </div>
  );
}
