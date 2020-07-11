import React, { Component } from 'react';

// import InputNumber from 'elements/Form/InputNumber';
// import InputDate from 'elements/Form/InputDate';
import { InputDate, InputNumber } from 'elements/Form/index'


export default class Example extends Component {
    state = {
        // ----------- input Number - start --------
        // value: "1"
        // ----------- input Number - end --------

        // ----------- input Date - start --------
        value: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
        // ----------- input Date - end --------
    };

    

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });     // handle change, mau input Number atau input Date sama aja pakai ini
    };

    render() {
        return (
            <div className="container">
                <div
                    className="row align-items-center justify-content-center"
                    style= {{ height: "100vh" }}
                >
                    <div className="col-auto">
                        {/* ----------- input Number - start -------- */}
                        {/* <InputNumber 
                            max={30}
                            suffix=" night"
                            isSuffixPlural
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        /> */}
                        {/* ----------- input Number - end -------- */}

                        {/* ----------- input Date - start -------- */}
                        <InputDate
                            max={30}
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        />
                        {/* ----------- input Date - end -------- */}
                    </div>
                </div>
            </div>
        );
    }
}