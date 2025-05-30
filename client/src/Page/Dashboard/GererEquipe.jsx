import React, { useEffect, useState } from 'react';
import './dash.css';

const GererDiplome = () => {
  const [equipe, setEquipe] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [formData, setFormData] = useState({ name: '', desc: '', image: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFormation, setNewFormation] = useState({ name: '', desc: '', image: '' });

  useEffect(() => {
    fetch('http://localhost:5050/api/equipes')
      .then(res => res.json())
      .then(data => setEquipe(data));
  }, []);

  const handleFormChange = (e, setter) => {
    const { name, value } = e.target;
    setter(prev => ({ ...prev, [name]: value }));
  };

  const handleModifyClick = (item) => {
    setSelectedFormation(item);
    setFormData({ name: item.name, desc: item.desc, image: item.image });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5050/api/equipes/${selectedFormation._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const updated = await res.json();
      setEquipe(list => list.map(i => i._id === updated._id ? updated : i));
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this formation?')) {
      const res = await fetch(`http://localhost:5050/api/equipes/${id}`, { method: 'DELETE' });
      if (res.ok) setEquipe(list => list.filter(i => i._id !== id));
    }
  };

  const handleAddFormation = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5050/api/equipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFormation),
    });
    if (res.ok) {
      const added = await res.json();
      setEquipe(list => [...list, added]);
      setNewFormation({ name: '', desc: '', image: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="formation-container">
      <h3 className="formation-title">L'equipe De L'academie</h3>
      <table className="formation-table">
        <thead>
          <tr>
            <th>Nom de Formateur</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipe.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.image}</td>
              <td>
                <button className="btn-modifier" onClick={() => handleModifyClick(item)}>Modifier</button>
                <button className="btn-supprimer" onClick={() => handleDeleteClick(item._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-ajouter" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Fermer le formulaire" : "Ajouter Formation Diplomante"}
      </button>

      {showAddForm && (
        <form onSubmit={handleAddFormation} className="inline-form">
          {['name', 'image', 'desc'].map((field, i) => (
            field === 'desc' ? (
              <textarea
                key={i}
                name="desc"
                placeholder="Description"
                value={newFormation.desc}
                onChange={(e) => handleFormChange(e, setNewFormation)}
                className="inline-textarea"
              />
            ) : (
              <input
                key={i}
                type="text"
                name={field}
                placeholder={field === 'name' ? 'Nom de Formateur' : 'Image URL'}
                value={newFormation[field]}
                onChange={(e) => handleFormChange(e, setNewFormation)}
                className="inline-input"
              />
            )
          ))}
          <button type="submit" className="btn-modifier">Ajouter</button>
        </form>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Modifier Formation</h3>
            <form onSubmit={handleFormSubmit} className="inline-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleFormChange(e, setFormData)}
                placeholder="Nom de Formateur"
                className="inline-input"
              />
              <textarea
                name="desc"
                value={formData.desc}
                onChange={(e) => handleFormChange(e, setFormData)}
                placeholder="Description"
                className="inline-textarea"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={(e) => handleFormChange(e, setFormData)}
                placeholder="Image URL"
                className="inline-input"
              />
              <button className="btn-modifier" type="submit">Enregistrer</button>
              <button className="btn-supprimer" type="button" onClick={() => setIsModalOpen(false)}>Annuler</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GererDiplome;
