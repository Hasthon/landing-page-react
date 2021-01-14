import React from 'react';
import PropType from "prop-types";

const estilos = {
    width: "100%",
    marginBottom: 20,
    marginTop: 30,

};

export const Card = props => {
    return (
        <div className="col-3 ">
            <div className="card " style={estilos}>
                <img className="card-img-top w-100" src={props.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                    <div className=" d-grid gap-2 text-center">
                        <a href={props.buttonUrl} className="btn btn-primary ">
                            {props.buttonLabel}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    title: PropType.string,
    imageUrl: PropType.string,
    description: PropType.string,
    buttonUrl: PropType.string,
    buttonLabel: PropType.string
};

