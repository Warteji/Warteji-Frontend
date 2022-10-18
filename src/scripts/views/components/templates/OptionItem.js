import React from 'react';

const OptionItem = ({ icon, title, }) => {
    return (
        <div className="option-item">
            <div className="option-item__header">
                <i className="material-icons">{icon}</i>
            </div>
            <div className="option-item__body">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default OptionItem;
