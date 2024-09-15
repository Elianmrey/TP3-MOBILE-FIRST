import { useState } from "react";
import TouristSpotDetails from "./components/DetalhesZonaTuristica.jsx";
import SelectedSpots from "./components/ZonaSelecionada.jsx";
import TouristSpotList from "./components/ListaTuristica.jsx";
import "./App.css";

const touristSpots = [
  { id: 1, name: "Praia de Iracema", price: 30, info: "Famosa praia urbana.", transport: "Ônibus, táxi" },
  { id: 2, name: "Mercado Central", price: 20, info: "Mercado de artesanato.", transport: "Ônibus, metrô" },
  { id: 3, name: "Dragão do Mar", price: 50, info: "Centro cultural.", transport: "Ônibus, táxi" },
  { id: 4, name: "Fortaleza de Nossa Senhora da Assunção", price: 25, info: "Monumento histórico.", transport: "Ônibus, táxi" },
  { id: 5, name: "Jardim Japonês", price: 10, info: "Espaço cultural e jardim oriental.", transport: "Ônibus" },
  { id: 6, name: "Catedral Metropolitana de Fortaleza", price: 15, info: "Catedral neogótica imponente.", transport: "Ônibus, táxi" },
  { id: 7, name: "Feirinha Beira Mar", price: 0, info: "Feira de artesanato à beira-mar.", transport: "Táxi, ônibus" },
  { id: 8, name: "Parque do Cocó", price: 0, info: "Parque ecológico com trilhas e atividades.", transport: "Ônibus, bicicleta" },
  { id: 9, name: "Beach Park", price: 200, info: "Maior parque aquático da América Latina.", transport: "Ônibus, táxi" },
  { id: 10, name: "Museu do Ceará", price: 10, info: "Museu com exposições sobre a história cearense.", transport: "Ônibus" },
  { id: 11, name: "Ponte dos Ingleses", price: 0, info: "Ponto de observação do pôr do sol.", transport: "A pé, ônibus" },
  { id: 12, name: "Estoril", price: 30, info: "Prédio histórico com bar e eventos culturais.", transport: "Táxi, ônibus" },
  { id: 13, name: "Parque das Crianças", price: 0, info: "Parque público com atividades infantis.", transport: "Ônibus, bicicleta" }
];


function App() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedSpots, setSelectedSpots] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSelectSpot = (spot) => {
    setSelectedSpot(spot);
  };

  const handleAddSpot = (spot) => {
    setSelectedSpots([...selectedSpots, spot]);
  };



  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <header>
        <h1>Pontos Turísticos de Fortaleza</h1>
 
      </header>
      <main>
        <TouristSpotList spots={touristSpots} onSelectSpot={handleSelectSpot} />
        {selectedSpot && <TouristSpotDetails spot={selectedSpot} onAddSpot={handleAddSpot} />}
        <SelectedSpots spots={selectedSpots} />
      </main>
    </div>
  );
}

export default App;

