import React, { Component, Fragment } from 'react';
import Inputs from "./Inputs";
import Guide from "./Guide";

export default class App extends Component {
    render() {
        return (<Fragment>
            <div className="wrapper">
                <div className="main-head">
                    <h1>Simple Input</h1>
                </div>
                <Guide/>
                <div className="side">
                    <Inputs/>
                </div>
            </div>
        </Fragment>);
    }
}
