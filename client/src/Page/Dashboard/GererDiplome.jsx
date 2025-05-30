import React, { useEffect, useState } from 'react';
import './dash.css';

const GererDiplome = () => {
  const [diplome, setDiplome] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [formData, setFormData] = useState({ name: '', desc: '', image: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFormation, setNewFormation] = useState({ name: '', desc: '', image: '' });

  useEffect(() => {
    fetch('http://localhost:5050/api/diplome')
      .then(res => res.json())
      .then(data => setDiplome(data));
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
    const res = await fetch(`http://localhost:5050/api/diplome/${selectedFormation._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const updated = await res.json();
      setDiplome(list => list.map(i => i._id === updated._id ? updated : i));
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Delete this formation?')) {
      const res = await fetch(`http://localhost:5050/api/diplome/${id}`, { method: 'DELETE' });
      if (res.ok) setDiplome(list => list.filter(i => i._id !== id));
    }
  };

  const handleAddFormation = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5050/api/diplome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFormation),
    });
    if (res.ok) {
      const added = await res.json();
      setDiplome(list => [...list, added]);
      setNewFormation({ name: '', desc: '', image: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="formation-container">
      <h3 className="formation-title">Formation Diplomente</h3>
      <table className="formation-table">
        <thead>
          <tr>
            <th>Titre De Formation</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {diplome.map(item => (
            <tr key={item._id}>
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
        {showAddForm ? "Fermer le formulaire" : "Ajouter Formation Continue"}
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
                placeholder={field === 'name' ? 'Titre de Formation' : 'Image URL'}
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
                placeholder="Titre de Formation"
                value={formData.name}
                onChange={(e) => handleFormChange(e, setFormData)}
                className="inline-input"
              />
              <textarea
                name="desc"
                placeholder="Description"
                value={formData.desc}
                onChange={(e) => handleFormChange(e, setFormData)}
                className="inline-textarea"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => handleFormChange(e, setFormData)}
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
