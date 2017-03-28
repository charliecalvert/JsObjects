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
                bar
                <p>{this.state.test}</p>
            </div>
        );
    }
}