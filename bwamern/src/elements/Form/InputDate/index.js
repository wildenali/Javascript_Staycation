import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import DateRange from 'react-date-range';

import "./index.scss";
import "react-date-range/dist/style.css";
import "react-date-range/dist/theme/default.css";

import formatDate from 'utils/formatNumber';
import moduleName from 'assets/images/ic_calendar.svg';

componentDidMount() {
    window.title = "Home"
};

componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
        
    }
    if (prevState != this.state) {
        
    }
};

componentWillUnmount() {

}

useEffect(() => {
    window.title = "Home"
    return () => {
        
    }
}, [state])