import React, { useEffect, useState } from "react";
import axios from "axios";
import "./content.css";

export const Content = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContact, setNewContact] = useState({ names: '', telephone: '', image: '' });

  const handleGetData = async() => {
    try {
      const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
      setData(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    if(showAddForm){
      setSelectedOption('')
      setSelectedContact('')
    }
  }, [showAddForm])
  

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedOption(selectedId);
    const contact = data.find((char) => char.identify === parseInt(selectedId));
    setSelectedContact(contact);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", newContact);
      handleGetData();
      setNewContact({ names: '', telephone: '', image: '' });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  const cancelAddContact = () => {
    setShowAddForm(false);
  };

  return (
    <div className="content-container">
      <div className="select-container">
      <h1>Agenda</h1>
        <select value={selectedOption} onChange={handleSelectChange} disabled={showAddForm}>
          <option value="">Selecciona un contacto</option>
          {data.map((obj) => (
            <option key={obj.identify} value={obj.identify}>{obj.names}</option>
          ))}
        </select>
      </div>
      {selectedContact && (
        <div className="selected-character-container">
          <h2>{selectedContact.names}</h2>
          <img src={selectedContact.image} alt={selectedContact.name} />
          <p>Telephone: {selectedContact.telephone}</p>
        </div>
      )}
      <button className="add-contact-btn" onClick={() => setShowAddForm(true)}>Agregar Contacto</button>
      {showAddForm && (
        <div className="add-contact-form">
          <h2>Agregar Contacto</h2>
          <form onSubmit={handleAddContact}>
            <label>
              Nombre:
              <input type="text" name="names" value={newContact.names} onChange={handleInputChange} />
            </label>
            <label>
              Teléfono:
              <input type="text" name="telephone" value={newContact.telephone} onChange={handleInputChange} />
            </label>
            <label>
              Imagen:
              <input type="text" name="image" value={newContact.image} onChange={handleInputChange} />
            </label>
            <div className="button-group">
              <button type="submit">Guardar</button>
              <button type="button" onClick={cancelAddContact}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
