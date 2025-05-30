import React, { useState, useEffect } from "react";
import "./diplome.css";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

export default function EntrePrise() {
  const [entrePrise, setEntrePrise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntrePriseData = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/entrePrise");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEntrePrise(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEntrePriseData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="diplome-container">
        <h1 className="bts">Formation Pour les Entreprises</h1>
        <div className="diplome-list">
          {entrePrise.map((item, index) => (
            <div className="diplome-card" key={index}>
              <img src={item.image} alt={item.name} className="diplome-image" />
              <div className="diplome-content">
                <h2 className="diplome-title">{item.name}</h2>
                <p className="diplome-desc">{item.desc}</p>
                <a className="voir-plus" href="/contact">Contacter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
