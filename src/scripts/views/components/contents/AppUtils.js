import React from 'react';

const AppUtils = ({ value, onChange, }) => {
    return (
        <section className="app-utils">
            <div className="app-utils__search">
                <input
                    type="text"
                    placeholder="  &#128269;   Pengen makan apa hari ini"
                    value={value}
                    onChange={onChange} />
            </div>
            <div className="app-utils__account">
                <i className="material-icons">account_circle</i>
            </div>
        </section>
    );
}

export default AppUtils;
