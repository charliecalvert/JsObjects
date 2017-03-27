import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {test: 'foogore One Smith'};
    }

    render() {
      return (
           <div className={styles.app}>
              <button id="getNine">Get Nine</button>
              <p id="getNineResult">Get Nine Result will be placed here.</p>
           </div>
        );
    }
}
