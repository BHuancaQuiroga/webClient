import React, {Component} from 'react'

class LanguagePicker extends Component {

    // Renderitza els botons per canviar d'idioma
    render(){

        return (
            <div>
                <select id={"option:selected"} value={this.props.lang} onChange={this.props.changeLanguage}>
                    <option value={"es"}>ES</option>
                    <option value={"en"}>EN</option>
                    <option value={"ca"}>CAT</option>
                </select>
            </div>
        )
    }
}

export default LanguagePicker;