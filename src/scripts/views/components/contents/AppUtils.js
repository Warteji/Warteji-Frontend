import React from 'react';

const AppUtils = ({ value, onChange, }) => {
    return (
        <div className="app-utils">
            <div className="app-utils__search">
                <input
                    type="text"
                    placeholder="Pengen makan apa hari ini"
                    value={value}
                    onChange={onChange} />
            </div>
            <div className="app-utils__order">
                    <i className="material-icons">shopping_cart</i>
            </div>
            <div className="app-utils__account">
                    <i className="material-icons">account_circle</i>
            </div>
        </div>
    );
}

export default AppUtils;
