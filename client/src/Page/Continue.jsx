import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import "./continue.css";

const Continue = () => {
      const [continueCard, setContinueCard] = useState([]); 
      const [loading, setLoading] = useState(true); 
      const [error, setError] = useState(null); 
    
    
      useEffect(() => {
        const fetchcontinueData = async () => {
          try {
            const response = await fetch("http://localhost:5050/api/continue");
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setContinueCard(data);
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchcontinueData();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>; // Loading state
      }
    
      if (error) {
        return <div>Error: {error}</div>; // Error state
      }
      return (
    <>
    <Header></Header>
   <h1 className="page-title">Formation Continue</h1>
    <div className="continue-container">
    
      {continueCard.map((item, index) => (
        <div key={index} className="card">
          <div className="card-image-container">
            <img src={item.image} alt={item.name} />
            
            
          </div>
          <div className="card-content">
            <h2>{item.name}</h2>
            <p>
              <i className="fas fa-chalkboard-teacher"></i> {item.formateur}
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> {item.empl}
            </p>
            <a className="button" href="./contact">Contacter</a>
          </div>
        </div>
      ))}
    </div>
    <Footer></Footer>    </>
  );
}
export default Continue;