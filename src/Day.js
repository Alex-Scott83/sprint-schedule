import React from 'react';
import './Day.css';


const Day = ({ day, startDate, currentWeek }) => {
  // Calcula la fecha correspondiente al día actual en función de startDate
  const daysToAdd = (currentWeek - 1) * 7 + (day - 1);
  const fechaActual = new Date(startDate);
  fechaActual.setDate(fechaActual.getDate() + daysToAdd);

  // Formatear la fecha en "dd/mm/aaaa"
  //const formattedDate = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

  // Texto de ejemplo para cada semana
  const weeksData = [
    // Semana 1
    [
      'Este es el texto para el Lunes de la Semana 1.',
      'Este es el texto para el Martes de la Semana 1.',
      'Este es el texto para el Miércoles de la Semana 1.',
      'Este es el texto para el Jueves de la Semana 1.',
      'Este es el texto para el Viernes de la Semana 1.',
      'Este es el texto para el Sábado de la Semana 1.',
      'Este es el texto para el Domingo de la Semana 1.',
    ],
    // Semana 2
    [
      'Este es el texto para el Lunes de la Semana 2.',
      'Este es el texto para el Martes de la Semana 2.',
      'Este es el texto para el Miércoles de la Semana 2.',
      'Este es el texto para el Jueves de la Semana 2.',
      'Este es el texto para el Viernes de la Semana 2.',
      'Este es el texto para el Sábado de la Semana 2.',
      'Este es el texto para el Domingo de la Semana 2.',
    ],
    // Semana 3
    [
      'Este es el texto para el Lunes de la Semana 3.',
      'Este es el texto para el Martes de la Semana 3.',
      'Este es el texto para el Miércoles de la Semana 3.',
      'Este es el texto para el Jueves de la Semana 3.',
      'Este es el texto para el Viernes de la Semana 3.',
      'Este es el texto para el Sábado de la Semana 3.',
      'Este es el texto para el Domingo de la Semana 3.',
    ],
        // Semana 4
        [
            'Este es el texto para el Lunes de la Semana 3.',
            'Este es el texto para el Martes de la Semana 3.',
            'Este es el texto para el Miércoles de la Semana 3.',
            'Este es el texto para el Jueves de la Semana 3.',
            'Este es el texto para el Viernes de la Semana 3.',
            'Este es el texto para el Sábado de la Semana 3.',
            'Este es el texto para el Domingo de la Semana 3.',
          ],
        // Semana 5
        [
            'Este es el texto para el Lunes de la Semana 3.',
            'Este es el texto para el Martes de la Semana 3.',
            'Este es el texto para el Miércoles de la Semana 3.',
            'Este es el texto para el Jueves de la Semana 3.',
            'Este es el texto para el Viernes de la Semana 3.',
            'Este es el texto para el Sábado de la Semana 3.',
            'Este es el texto para el Domingo de la Semana 3.',
          ],
  ];

  // Obtener el índice de la semana actual
  const currentWeekIndex = currentWeek - 1;

  // Obtener el texto correspondiente a la semana actual y el día actual
  const currentDayText = weeksData[currentWeekIndex][day - 1];

  return (
    <div className="day-container">
      
      <p>{currentDayText}</p>
    </div>
  );
};

export default Day
