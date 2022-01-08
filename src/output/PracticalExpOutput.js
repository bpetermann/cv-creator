import React from 'react';
import '../styles/ApplicationOutput.css';


const PracticalExpOutput = (props) => {
  const { experience } = props;
  return (
    <div id='div3'>
    <h2>Experience</h2>
    {experience.map((item) => {
      return (
        <ul key={item.id}>
          <li>
            {item.from} - {item.to} {item.company}
          </li>
          <ul className='indent'>
            <li>{item.description}</li>
          </ul>
        </ul>
      );
    })}
  </div>
  );
};

export default PracticalExpOutput;
