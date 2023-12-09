import React from 'react';

const Task = props => {
    console.log('props:', props);
    return (
        <li>{props.desc}</li>
    );
};

export default Task;