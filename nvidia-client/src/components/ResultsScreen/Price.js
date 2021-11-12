import React from 'react';

const Price  = () => {
    return (
        <select className="form-select wd-result-dropdown">
            <option selected>Price Filter</option>
            <option value="1">less than $50</option>
            <option value="2">between $50 to $100</option>
            <option value="3">greater than $100 </option>
        </select>
    );
}

export default Price;