/**
 * Created by charlie on 11/25/17.
 * This version has the HTML/JSX in this component.
 */

import React from 'react';
import Counter from './Counter';
import GetNumbers from './GetNumbers';
import Overview from "./Overview";

class App extends React.Component {

    render() {
        return (
            <div>

                <Overview/>
                <Counter/>
                <GetNumbers/>

            </div>
        )
    }
}


export default App;