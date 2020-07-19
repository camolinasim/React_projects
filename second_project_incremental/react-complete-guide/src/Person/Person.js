import React from 'react';
//we can output dynamic content as part of our JSX content
const person = (props) => {
    return <p>I'm {props.name} person and I am {props.age} years old!</p>
}

export default person;