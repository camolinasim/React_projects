import React from 'react';
//we can output dynamic content as part of our JSX content
const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} person and I am {props.age} years old!</p>
    <p>{props.children}</p> {/* children refers to any element within the opening and closing tag of our component*/}


    </div>
        
        )
}

export default person;