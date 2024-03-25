import { useEffect, useState } from "react";
import axios from "axios";
import "./content.css";

export const Content = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleGetData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedOption(selectedId);
    const character = data.find((char) => char.id === parseInt(selectedId));
    setSelectedCharacter(character);
  };

  return (
    <div className="content-container">
      <div className="select-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Selecciona un personaje</option>
          {data.map((obj) => {
            return <option key={obj.id} value={obj.id}>{obj.name}</option>;
          })}
        </select>
      </div>
      {selectedCharacter && (
        <div className="selected-character-container">
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p>Status: {selectedCharacter.status}</p>
          <p>Especie: {selectedCharacter.species}</p>
        </div>
      )}
    </div>
  );
};

