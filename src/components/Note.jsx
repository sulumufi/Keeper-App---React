import React from "react";
import Card from "./card";
import Notes from "../notes";


function createCard(props){
    return(<Card 
        key = {props.key}
        title = {props.title}
        content = {props.content}
    />)
}


function Note(){
    return(
        <div>
        {Notes.map(createCard)}
        </div>
    );
}

export default Note;