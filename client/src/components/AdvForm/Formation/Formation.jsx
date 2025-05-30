import { useState } from "react";
import {  format} from "../../../Data/data";
import "./Formm.css";
import "./formm";

const Formationn = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index); 
  };
  return (
    <div className="accordion-container">
      {format.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${
              activeItem === index ? "active" : ""
            }`}
            onClick={() => toggleItem(index)}
          >
            {item.btn}
            <span className="toggle-icon">
              {activeItem === index ? "−" : "+"}
            </span>
          </div>
          <div
            className={`accordion-content ${
              activeItem === index ? "active" : ""
            }`}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Formationn;
