import React from 'react';
import Button from '@material-ui/core/Button';
import icon_ticket from './../../resources/images/icons/ticket.png';


const MyButton = (props) => {
  return (
    <Button
    href={props.link}
    variant="contained"
    size="small"
    style={{
      background: props.bck,
      color: props.color
    }}
  >
    <img
      src={icon_ticket}
      className="iconImage"
      alt="icon button"
    /> {props.text}
      
    </Button>
  );
};

export default MyButton;