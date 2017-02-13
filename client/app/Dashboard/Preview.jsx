import React from 'react';

const Preview = props => (
  <div>
    <h1>{props.desc}</h1>
    <img src={props.img} width="90%"/>
  </div>
);

export default Preview;
