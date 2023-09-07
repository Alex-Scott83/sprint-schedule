import React, { useState } from 'react';
import './App.css';
import Day from './Day';
import Notes from './Notes';
import Fechas from './Fechas'; // Importa el componente Fechas

function App() {
  // Debes conocer el número total de semanas desde Day.js
  const totalWeeks = 5; // Cambia esto al valor correcto

  // Estado para controlar la semana actual
  const [currentWeek, setCurrentWeek] = useState(1);

  // Declarar una constante con la fecha de inicio de la semana 1
  const startDateWeek1 = new Date('2023-09-12'); // Ajusta esta fecha según la semana 1

  // Función para calcular la fecha de inicio de la semana actual
  const calculateStartDate = () => {
    const daysToAdd = (currentWeek - 1) * 7;
    const startDate = new Date(startDateWeek1);
    startDate.setDate(startDate.getDate() + daysToAdd);
    return startDate;
  };

  // Obtener la fecha de inicio de la semana actual
  const startDateCurrentWeek = calculateStartDate();

  // Función para avanzar a la siguiente semana
  const nextWeek = () => {
    if (currentWeek < totalWeeks) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  // Función para retroceder a la semana anterior
  const prevWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  //funcion para determinar el numero de sprint
// Determinar el valor de NumSprint en función de currentWeek usando switch
let NumSprint;

switch (true) {
  case currentWeek >= 1 && currentWeek <= 4:
    NumSprint = 1;
    break;
  case currentWeek >= 5 && currentWeek <= 8:
    NumSprint = 2;
    break;
  case currentWeek >= 9 && currentWeek <= 12:
    NumSprint = 3;
    break;
  case currentWeek >= 13 && currentWeek <= 16:
    NumSprint = 4;
    break;
  default:
    NumSprint = 0; // Valor por defecto si no cumple ninguna condición
}



  return (
    <div className="App">
      <header>
        <div className="logo">Compstat 1.0</div>
        <div className="SprintNumber">
        <span>{`Sprint #  ${NumSprint}   `}</span>
         <p>
         </p>
        </div>
        <div className="nav-buttons">
          <button onClick={prevWeek}>&lt; Semana Anterior</button>
          <span>{`   Semana ${currentWeek}   `}</span>
          <button onClick={nextWeek} disabled={currentWeek === totalWeeks}>Siguiente Semana &gt;</button>
        </div>
      </header>
      <Fechas startDate={startDateCurrentWeek} /> {/* Renderiza el componente Fechas */}
      <div className="week-container">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <Day
            key={day}
            day={day}
            startDate={startDateCurrentWeek}
            currentWeek={currentWeek}
          />
        ))}
      </div>
      <Notes currentWeek={currentWeek} />
    </div>
  );
}

export default App;