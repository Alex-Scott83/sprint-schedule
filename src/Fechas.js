import React from 'react';
import './Fechas.css';

const Fechas = ({ startDate }) => {
  // Array de días de la semana
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Calcula las fechas para los 7 días de la semana
  const fechas = [];
  for (let i = 0; i < 7; i++) {
    const fechaActual = new Date(startDate);
    fechaActual.setDate(fechaActual.getDate() + i);
    const formattedDate = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
    fechas.push({ dia: daysOfWeek[i], fecha: formattedDate });
  }

  return (
    <div className="fechas-container">
      {fechas.map((fecha, index) => (
        <div key={index} className="fecha">
          <h3>{fecha.dia} {fecha.fecha}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default Fechas;