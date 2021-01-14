import React from 'react';
import PropTypes from 'prop-types';

export function Jumbotron(props) {
    return (
        <div className='row'>
        <div className="jumbotron mx-5 my-5">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.description}</p>
        <hr class="my-4"></hr>
        <a class="btn btn-primary btn-lg" href={props.buttonUrl} role="button">{props.buttonLabel}</a>
        </div>
        </div>
    ); 
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
}

