import React from 'react';
import Label from './labels/Label'
// import { GreenLabel, GreenLabelWithIcon }  from './labels/GreenLabel';
// import { RedLabel } from './labels/RedLabel';

const boilingVerdict = (props) => {
  if (props.celsius >= 200) {
      return (<div>
        <Label theColor={props.color}>Ilt's over 200 Celsius, it's boooiiiilingg!</Label> 
        <span role="img" aria-label="emoji">♨️</span>
      </div>
      )
  } else if (props.celsius >= 100) {
      return <Label theColor={props.color}>The water would boil.</Label>;
  } else {
      return <Label theColor={props.color}>The water would not boil.</Label>;
  }
}

export default boilingVerdict;