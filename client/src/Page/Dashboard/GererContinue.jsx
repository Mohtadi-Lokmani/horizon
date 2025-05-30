import React, { useEffect, useState } from 'react';
import './dash.css';

const GererContinue = () => {
  const [continueList, setContinueList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [formData, setFormData] = useState({ name: '', image: '', formateur: '', empl: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFormation, setNewFormation] = useState({ name: '', image: '', formateur: '', empl: '' });

  useEffect(() => {
    fetch('http://localhost:5050/api/continue')
      .then(res => res.json())
      .then(data => setContinueList(data));
  }, []);

  const handleModifyClick = (item) => {
    setSelectedFormation(item);
    setFormData({ name: item.name, image: item.image, formateur: item.formateur, empl: item.empl });
    setIsModalOpen(true);
  };

  const handleFormChange = (e, setter) => {
    const { name, value } = e.target;
    setter(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5050/api/continue/${selectedFormation._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const updated = await res.json();
      setContinueList(list => list.map(i => i._id === updated._id ? updated : i));
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Delete this formation?')) {
      const res = await fetch(`http://localhost:5050/api/continue/${id}`, { method: 'DELETE' });
      if (res.ok) setContinueList(list => list.filter(i => i._id !== id));
    }
  };

  const handleAddFormation = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5050/api/continue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFormation),
    });
    if (res.ok) {
      const added = await res.json();
      setContinueList(list => [...list, added]);
      setNewFormation({ name: '', image: '', formateur: '', empl: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="formation-container">
      <h3 className="formation-title">Formation Continue</h3>
      <table className="formation-table">
        <thead>
          <tr>
            <th>Titre De Formation</th>
            <th>Image URL</th>
            <th>Emplacement</th>
            <th>Formateur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {continueList.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.image}</td>
              <td>{item.empl}</td>
              <td>{item.formateur}</td>
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
          {['name', 'image', 'formateur', 'empl'].map(field => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field === 'name' ? 'Titre de Formation' : field.charAt(0).toUpperCase() + field.slice(1)}
              value={newFormation[field]}
              onChange={(e) => handleFormChange(e, setNewFormation)}
              className="inline-input"
            />
          ))}
          <button type="submit" className="btn-modifier">Ajouter</button>
        </form>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Modifier Formation</h3>
            <form onSubmit={handleFormSubmit} className="inline-form">
              {['name', 'image', 'formateur', 'empl'].map(field => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field === 'name' ? 'Titre de Formation' : field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => handleFormChange(e, setFormData)}
                  className="inline-input"
                />
              ))}
              <button className="btn-modifier" type="submit">Enregistrer</button>
              <button className="btn-supprimer" type="button" onClick={() => setIsModalOpen(false)}>Annuler</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GererContinue;
