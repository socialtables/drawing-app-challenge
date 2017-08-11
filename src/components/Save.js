import React, { PropTypes } from "react";

export default function Save(props) {
    const { action } = props;
    return (
        <input
            type="button"
            className="save-btn"
            defaultValue="Save"
            onClick={ () => {
                action();
            }}
        />
    );
}

Save.propTypes = {
    action: PropTypes.func.isRequired
};