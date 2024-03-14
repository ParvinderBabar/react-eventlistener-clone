import React from "react";

export default function Square({ divColor, onClick }) {
    return (
        <div
            id="square"
            style={{ backgroundColor: divColor }}
            onClick={onClick}
        ></div>
    );
}