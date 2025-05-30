import React, { useEffect, useState } from 'react';
import './dash.css';

const GererDiplome = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5050/api/contact')
      .then(res => res.json())
      .then(data => {
        setContact(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const res = await fetch(`http://localhost:5050/api/contact/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContact(prev => prev.filter(item => item._id !== id));
      } else {
        alert('Failed to delete the message');
      }
    }
  };

  const handleReadClick = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="formation-container">
      <h3 className="formation-title">Messages reçus</h3>
      <table className="formation-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((item) => (
            <tr key={item._id}>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.email}</td>
              <td>{item.telephone }</td>
              <td>{item.message}</td>
              <td>
                <button className="btn-supprimer" onClick={() => handleDeleteClick(item._id)}>Supprimer</button>
                <button className="btn-modifier" onClick={() => handleReadClick(item)}>Lire</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedMessage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Détails du message</h3>
            <p><strong>Nom:</strong> {selectedMessage.nom}</p>
            <p><strong>Prénom:</strong> {selectedMessage.prenom}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Téléphone:</strong> {selectedMessage.telephone }</p>
            <p><strong>Message:</strong><br /> {selectedMessage.message}</p>
            <button className="btn-modifier" onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GererDiplome;
