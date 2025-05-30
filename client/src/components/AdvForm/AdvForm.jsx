import React from "react";
import Adv from "./Formation/Formation";
import Formation from "./ADV/Adv";
import "./AdvForm.css"


const AdvForm = () => {
  return (
    <>
    <div className="title">
        <h1 className="adv">avantage</h1>
        <h1 className="adv">Formation</h1>
    </div>
    

    <div className="all">
       
        <Formation/>
        <Adv/>
        </div>
    </>
  );
};

export default AdvForm;
