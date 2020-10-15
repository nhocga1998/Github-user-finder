import React, {Fragment}from 'react';
import PropTypes from 'prop-types';
import spinner from '../static/spinner.gif'

const Spinner = () => 
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>



Spinner.propTypes = {

};


export default Spinner;
