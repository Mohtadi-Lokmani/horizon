import first from "../../Images/Home.jpg";
import "./image.css";

function First() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={first} alt="Horizon Academy" />
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Bienvenue à Horizon Academy</h1>
            <p>Explorez nos formations professionnelles et donnez un élan à votre avenir.</p>
            <a href="/continue" className="hero-btn">Voir nos formations</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
