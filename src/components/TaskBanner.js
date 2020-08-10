import React from 'react';


export const TaskBanner = props => (
    <h4 className="blue dark-1 txt-center p-4 m-0">
        {props.userName} Task App ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)