import React from 'react';

class MaterialSlider extends React.Component {

    componentDidMount() {
        console.log('Slider mounted');
    }

    getSlider() {
        return <div className="slider">

            <ul className="slides">
                <li className="active">
                    <img src="http://lorempixel.com/580/250/nature/1"/>
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
                    </div>
                </li>
            </ul>
        </div>
    }

    various() {
        return <div>
            <div className="card-panel teal lighten-2">This is a card panel with a teal lighten-2</div>
            <div className="card-panel  yellow lighten-2">
                <span className="blue-text text-darken-2">This is a card panel with dark blue text</span>
            </div>

            <p className="z-depth-1">z-depth-1</p>
            <p className="z-depth-2">z-depth-2</p>
            <p className="z-depth-3">z-depth-3</p>
            <p className="z-depth-4">z-depth-4</p>
            <p className="z-depth-5">z-depth-5</p>


            <a className="waves-effect waves-light btn">Stuff</a>
            <a className="waves-effect waves-light btn">
                <i className="mdi-file-cloud left"></i>left button
            </a>
            <a className="waves-effect waves-light btn">
                <i className="mdi-file-cloud right"></i>button
            </a>
            <a className="btn-floating btn-large waves-effect waves-light red">
                <i className="mdi-content-add">bar</i>
            </a>

            <div>
                <i className="small mdi-content-add">abc</i>

                <i className="medium mdi-content-add">abc</i>

                <i className="large mdi-content-add">abc</i>

                <i className="material-icons">face</i>
            </div>
            <div className="row">
                <div className="blue lighten-5 col s12 m1 l1">1</div>
                <div className="blue lighten-4 col s12 m1 l1">1</div>
                <div className="blue lighten-3 col s12 m1 l1">1</div>
                <div className="blue lighten-2 col s12 m2 l2">2</div>
                <div className="blue lighten-1 col s12 m3 l3">2</div>
                <div className="blue col s12 m4 l4">2</div>
            </div>
        </div>
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                    <div className="col s6">6-columns (one-half)</div>
                    <div className="col s6">6-columns (one-half)</div>
                </div>
                <div className="row">
                    <div className="grid-example col s12"><span
                        className="flow-text">I am always full-width (col s12) in every way and in every place they say</span></div>
                    <div className="grid-example col s12 m12 l12 xl6"><span className="flow-text">I am full-width on mobile it seems to me asdf asdfasdf asdfsadf addddddddd (col s12 m6)</span>                    </div>
                </div>

                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    </tbody>
                </table>
                {this.various()}
                {this.getSlider()}
            </div>
        )
    }
}

export default MaterialSlider;