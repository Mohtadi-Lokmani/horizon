import { useState } from "react";
import { adv } from "../../../Data/data";
import "./Advantage.css";

function Adv() {
  const [activeTab, setActiveTab] = useState(0); 

  return (
    <div className="tabs-container">
      
      <div className="tabs">
        {adv.map((list, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)} 
          >
            {list.btn}
          </button>
        ))}
      </div>


      {adv.map((list, index) => (
        <div
          key={index}
          className={`tab-content ${activeTab === index ? "active" : ""}`}
        >
          <img src={list.image} alt="Tab visual" className="tab-image" />
          <p className="p2">{list.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Adv;
