import React, { useState, useEffect } from "react";
import "./EntrePrise.css"
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const Diplome = () => {
      const [diplomeCard, setDiplomeCard] = useState([]); 
          const [loading, setLoading] = useState(true); 
          const [error, setError] = useState(null); 
        
        
          useEffect(() => {
            const fetchdiplomeData = async () => {
              try {
                const response = await fetch("http://localhost:5050/api/diplome");
                if (!response.ok) {
                  throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setDiplomeCard(data);
                setLoading(false);
              } catch (err) {
                setError(err.message);
                setLoading(false);
              }
            };
        
            fetchdiplomeData();
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
    <div className="diplome-container">
        
      <h1 className="bts">Formation BTS et BTP</h1>
      <div className="diplome-list">
        {diplomeCard.map((item, index) => (
          <div className="diplome-card" key={index}>
            <img src={item.image} alt={item.name} className="diplome-image" />
            <div className="diplome-content">
              <h2 className="diplome-title">{item.name}</h2>
              <p className="diplome-desc">{item.desc}</p>
              <a className="voir-plus" href="./contact">Contacter</a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer></Footer>
    </>
  );
}


export default Diplome;
