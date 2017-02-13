import React from 'react';

const Preview = props => (
  <div>
    <div>
      <h2 style={{textAlign: 'center'}}>{props.desc}</h2>
    </div>
    <img src={props.img} width="90%"/>
  </div>
);

export default Preview;
