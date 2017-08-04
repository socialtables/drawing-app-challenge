import React, { PropTypes } from "react";

export default function BrushColor(props){
    const { action, brush_color } = props;
    return (
        <input
            type="color"
            className="brush-color"
            defaultValue={brush_color}
            onChange={ (e) => {
                action(e.target.value)
            }}
        />
    )
}

BrushColor.propTypes = {
    brush_color: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}