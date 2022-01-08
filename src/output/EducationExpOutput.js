import React from 'react';
import '../styles/ApplicationOutput.css';

const EducationExpOutput = (props) => {
  const { education } = props;
  return (
    <div id='div2'>
      <h2>Education</h2>
      <ul>
        {education.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                {item.from} - {item.to} {item.shool}
              </li>
              <ul className='indent'>
                <li>{item.degree}</li>
              </ul>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default EducationExpOutput;
