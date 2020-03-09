import React, { Component } from 'react';
import './css/Footer.css';
import Translate from "./locals/Translate";

class Footer extends Component {

    render() {
        return (
            <div id={"cont"}>
                <div className="container-fluid px-0">
                    <div id="footer" className="row">
                        <div className="col-xs-12 col-lg-3 px-0">
                            <a className="contact" href="#"><Translate string={"contact"}/></a>
                        </div>
                        <div className="col-xs-12 col-lg-3 px-0">
                            <a id="au" href="#"><Translate string={"about"}/></a>
                        </div>
                        <div className="col-xs-12 col-lg-3 px-0">
                            <a id="faq" href="#"><Translate string={"faq"}/></a>
                        </div>
                        <div className="col-xs-12 col-lg-3 px-0">
                            <a id="policies" href="#"><Translate string={"policies"}/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Footer;