import React from 'react';

export const VisibilityControl = props => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input mx-2"
                checked={props.isChecked}
                onChange={evt => props.callback(evt.target.checked)}
            />
            <label htmlFor="form-check">
                Show {props.description}
            </label>
        </div>
    )
}