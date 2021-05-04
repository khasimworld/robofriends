import React from 'react';

//<scroll>props.children</scroll> 
//we use style property which is jsx way of doing css
const Scroll = (props) => {
  return (
    <div style={{overflowY:'scroll', border:'1px solid black', height:'700px'}}>
      {props.children}
    </div>

  );
};

export default Scroll;