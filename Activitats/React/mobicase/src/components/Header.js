import React, { Component } from 'react';
import './css/Header.css';
import Translate from "./locals/Translate";
import logo from './img/logo.png';
import LanguagePicker from "./LanguagePicker";

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="sticky-top">
                <div className="container-fluid px-0">
                    <div className="row" id="header">
                        <div className="col-xs-12 col-lg-2 px-0">
                            <a href="#">
                                <img src={logo}/>
                            </a>
                        </div>
                        <div id="menu" className="col-xs-12 col-lg-7 px-0">
                            <nav id="navCont" className="navbar navbar-expand-lg navbar-dark">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li>
                                            <a id="mobile"href="#"><Translate string={"mobile"}/></a>
                                        </li>
                                        <li>
                                            <a id="accessories"href="#"><Translate string={"accessories"}/></a>
                                        </li>
                                        <li>
                                            <a id="offer" href="#"><Translate string={"offer"}/></a>
                                        </li>
                                        <li>
                                            <a className="contact" href="#"><Translate string={"contact"}/></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xs-12 col-lg-1 px-0">
                            <div className="idiomadrop dropdown px-0">
                                <button className="dropbtn"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></button>
                                <div className="dropdown-content">
                                    <LanguagePicker lang={this.props.lang} changeLanguage={this.props.changeLanguage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-1 px-0">
                            <div>
                                <i className="fa fa-user fa-3x" id="dropdownMenuButton" data-toggle="dropdown"></i>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#"><Translate string={"myP"}/></a>
                                    <a className="dropdown-item" href="#"><Translate string={"myC"}/></a>
                                    <a className="dropdown-item" href="#"><Translate string={"logOut"}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-1 px-0">
                            <div>
                                <a href="#">
                                    <i className="fa fa-shopping-cart fa-3x" id="dropdownMenuButton"
                                       data-toggle="dropdown"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Header;