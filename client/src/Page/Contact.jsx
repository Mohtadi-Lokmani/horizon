import { useState } from "react";
import "./Contact.css";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          message: ""
        });
      } else {
        const errorMessage = result?.message || "Erreur lors de l'envoi du message.";
        alert("Erreur: " + errorMessage);
      }

    } catch (err) {
      console.error("Erreur:", err);
      alert("Une erreur est survenue !");
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <h2>Contacter Nous</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Entrez votre prénom"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre email"
                />
              </div>
              <div className="form-group">
                <label>Numéro de téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Entrez votre numéro"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Entrez votre message"
              ></textarea>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
