import React from 'react';
import styles from './App.css';

export default class GetNine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nine: 'Get Nine Result will be placed here.'};
      this.getNine = this.getNine.bind(this);
    }

    getNine() {
        this.setState(niner => ({
            nine: '9'
        }));
    }

    render() {
      return (
           <div className={styles.app}>
              <button id="getNine" onClick={this.getNine}>Get Nine</button>
              <p id="getNineResult">{this.state.nine}</p>
              <hr />
              <button id="getNineParse">Get Nine Parse</button>
              <p id="getNineParseResult">Get Nine Result will be placed here.</p>
              <hr />
           </div>
        );
    }
}
