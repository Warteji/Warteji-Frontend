import React from 'react';
import OptionItem from './OptionItem';

const OptionList = () => {
    return (
        <div className="option-list">
            <OptionItem icon={"account_circle"} title={"Disimpan"} />
            <OptionItem icon={"account_circle"} title={"Terlaris"} />
            <OptionItem icon={"account_circle"} title={"Hemat"} />
        </div>
    );
}

export default OptionList;

