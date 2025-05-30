import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TeamSwiper.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const TeamSwiper = () => {
  const [teamMembers, setTeamMembers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/equipes/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeamMembers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="swiper-container">
      <h2 className="swiper-title">Notre équipe</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="team-card">
              <img src={member.image} className="team-image" alt={member.name} />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-desc">{member.desc}</p>
              <div className="team-social">

                  <i id="i1" className="fab fa-facebook-f"></i>
                  <i id="i22"className="fab fa-twitter"></i>
                  <i id="i3" className="fab fa-google"></i>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
