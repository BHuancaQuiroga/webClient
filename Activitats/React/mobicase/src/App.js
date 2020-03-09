import React from 'react';
//import ReactDOM from 'react-dom';

import './App.css';
import {LocaleContext} from "./components/LocaleContext";
import MyPage from "./components/MyPage";


class App extends React.Component {

    constructor(props) {
        super(props);

        // Estat del component
        this.state = {
            preferredLocale: "es"
        };
    }

    changeLanguage = ({ currentTarget: { value } }) => {
        this.setState({
            preferredLocale: value
        });
    };

    render() {
        return (
            <div>
                <LocaleContext.Provider value={this.state.preferredLocale}>
                    <MyPage  lang={this.state.preferredLocale} changeLanguage={this.changeLanguage} />
                </LocaleContext.Provider>
            </div>
    );
    }
}

export default App;