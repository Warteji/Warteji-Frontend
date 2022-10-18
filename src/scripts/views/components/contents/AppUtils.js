import React from 'react';

const AppUtils = ({ value, onChange, }) => {
    return (
        <div className="app-utils">
            <div className="app-utils__search">
                <input
                    type="text"
                    placeholder="Cari layanan, cari makanan dan minuman"
                    value={value}
                    onChange={onChange} />
            </div>
            <div className="app-utils__order">
                <a href="#">
                    <i className="material-icons">search</i>
                </a>
            </div>
            <div className="app-utils__account">
                <a href="#">
                    <i className="material-icons">search</i>
                </a>
            </div>
        </div>
    );
}

export default AppUtils;
