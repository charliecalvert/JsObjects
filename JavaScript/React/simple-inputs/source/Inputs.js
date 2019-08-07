import React from 'react';
import Radios from "./Radios";
import CheckBoxes from "./CheckBoxes";

export default class Inputs extends React.Component {

    render() {
        return (
            <form>
                <p>Hello from the server</p>

                <p id="intro Test"></p>

                <ul>
                    <li className="listItem">Item01</li>
                    <li className="listItem">Item02</li>
                    <li className="listItem">Item03</li>
                </ul>



                <div className="preference bordered">
                    <label htmlFor="name-search">Timer Name</label>
                    <input type="text" id="name-search"></input>
                </div>

                <div className="preference bordered">
                    <label htmlFor="username">Time</label>
                    <input type="number" id="time-search" defaultValue="0"></input>
                </div>

                <CheckBoxes/>
                <Radios/>

            </form>
        );
    }
}
