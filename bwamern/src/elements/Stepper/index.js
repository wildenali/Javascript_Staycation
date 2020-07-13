import React from 'react';

import propTypes from 'prop-types';


export default function Stepper(props) {

    const { steps, initialStep } = this.props;
    const stepsKeys = Object.keys(steps);

    const [CurrentStep, setCurrentStep] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    );
    const totalStep = stepsKeys.length;
    const indexStep = stepsKeys.indexOf(CurrentStep);

    function prevStep() {
        if(+indexStep > 0) setCurrentStep(stepsKeys[indextStep - 1]);
    }
    
    function nextStep() {
        if(+indexStep < totalStep) setCurrentStep(stepsKeys[indextStep + 1]);
    }
    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
    data: propTypes.object.isRequired,
    initialStep: propTypes.string.isRequired,
}