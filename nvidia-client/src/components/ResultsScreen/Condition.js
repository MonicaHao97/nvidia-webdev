import React from 'react';

const Condition  = () => {
    return (
        <select className="form-select wd-result-dropdown">
            <option selected>Condition Filter</option>
            <option value="1">New</option>
            <option value="2">Used</option>
            <option value="3">Renewed</option>
        </select>
    );
}

export default Condition;