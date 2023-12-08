import React from 'react';

const Task = props => {
    console.log('props:', props);
    return (
        <>
            <p>{props.desc}</p>
        </>
    );
};

export default Task;