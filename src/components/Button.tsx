import React, { MouseEventHandler } from 'react';
// import { buttonStyles } from './Button.styles';

type Props = {
    onClick: MouseEventHandler,
    text: string
}

const Button = (props: Props) => {
    <button onClick={props.onClick} >
        {props.text}
    </button>
}

export default Button;