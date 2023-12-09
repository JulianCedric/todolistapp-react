import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';

const Task = props => {
    console.log('props:', props);

    const [ checked, setChecked ] = useState(false);

    return (
        <li>
            <Checkbox
                label={props.desc}
                onChange={(e, data) => setChecked(data.checked)}
                checked={checked}
            />
        </li>
    );
};

export default Task;