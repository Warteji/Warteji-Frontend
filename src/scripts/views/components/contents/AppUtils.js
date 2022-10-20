import React from 'react';

const AppUtils = ({ value, onChange, }) => {
    return (
        <section className="app-utils">
            <div className="app-utils__search">
                <input
                    type="text"
                    placeholder="Pengen makan apa hari ini"
                    value={value}
                    onChange={onChange} />
            </div>
            <div className="app-utils__account">
                <span class="material-symbols-rounded">
                    account_circle
                </span>
            </div>
        </section>
    );
}

export default AppUtils;
