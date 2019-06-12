import React, {Component} from 'react';

class ElfApp extends Component {

    login = () => {
        window.open('elf-sign-in.html')
    };

    render() {
        return (
            <div>
                <h1>Welcome to Elf App</h1>
                <button onClick={this.login}>Login</button>
                <a href="/worker?title=FirebaseLogout">Logout</a>
            </div>
        );
    }
}

export default ElfApp;
