import React from 'react';

import Myparagraph from './Myparagraph';

const DemoOutput = (props) =>{
  return <Myparagraph>{props.show ? 'This is paragraph now!' : ''}</Myparagraph>
}

export default React.memo(DemoOutput);