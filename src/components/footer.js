import React from 'react';
import PropType from "prop-types";

const estilos = {
    color: "white",
    background: "#283747",
    fontSize: "16px",
    text: "center",

};


export const Footer = props => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card-footer d-flex justify-content-center" style={estilos}>
                    {props.text}
                </div>
            </div>
        </div>
    );
};


Footer.propTypes = {
    text: PropType.string,
};




