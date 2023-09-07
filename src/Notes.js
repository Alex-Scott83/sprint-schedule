import React from 'react';
import './Notes.css';

const Notes = ({ currentWeek }) => {
  // Texto de ejemplo para cada semana
  const weeksNotes = [
    'Estas son las notas para la Semana 1. Puedes editar este texto en el componente Notas.js para cada semana.',
    'Estas son las notas para la Semana 2. Puedes editar este texto en el componente Notas.js para cada semana.',
    'Estas son las notas para la Semana 3. Puedes editar este texto en el componente Notas.js para cada semana.',
    'Estas son las notas para la Semana 4. Puedes editar este texto en el componente Notas.js para cada semana.',
    'Estas son las notas para la Semana 5. Puedes editar este texto en el componente Notas.js para cada semana.',
  ];

  // Obtener las notas de la semana actual
  const currentWeekNotes = weeksNotes[currentWeek - 1];

  // Dividir el texto en líneas después de un punto (.)
  const lines = currentWeekNotes.split('.').map((line, index) => (
    <p key={index}>{line.trim()}.</p>
  ));

  return (
    <div className="notes-container">
      <h3>Notas de la Semana {currentWeek}</h3>
      <div className="notes-content">
      {lines}
      </div>
    </div>
  );
};

export default Notes;