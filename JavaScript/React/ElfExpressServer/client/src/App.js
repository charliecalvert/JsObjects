/**
 * Created by charlie on 11/25/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import Counter from './Counter';
import GetNumbers from './GetNumbers';
import OverviewConnect from "./OverviewConnect";

class App extends React.Component {

    render() {
        return (
            <div>

                <OverviewConnect/>
                <Counter/>
                <GetNumbers/>

            </div>
        )
    }
}


export default App;