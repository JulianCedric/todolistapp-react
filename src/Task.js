import React from 'react';

const Task = props => {
    console.log('props:', props);
    return (
        <>
            <p>{props.desc}</p>
            <p>{props.tasks[0].desc}</p>
        </>
    );
};

export default Task;