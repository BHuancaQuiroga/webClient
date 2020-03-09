import React, { Component } from "react";



import Header from "./Header";
import Footer from "./Footer";
import Brands from "./Brands";

class MyPage extends Component {

    // Renderitza el component MyPage aplicant traduccions als strings
    render() {
        return (
            <div>
                <Header lang={this.props.lang} changeLanguage={this.props.changeLanguage}/>
                <Brands />
                <Footer />
            </div>
        );
    }

}

export default MyPage;