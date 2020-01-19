import React from 'react';
import {StyledButton} from './style'


export function ButtonComponent(props){
    return(
        <StyledButton
    type="primary"
    onClick={props.onClick}>{props.title}</StyledButton>
    )

}