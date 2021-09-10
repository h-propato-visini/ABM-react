import React from "react";
import './style.scss'

class Input extends React.Component {

    handleChange(e) {
        if(this.props.changeCallback) {
            this.props.changeCallback(e.target.value, this.props.name)
        }
    }

    render() {
        return (
                <input type='text' className='inputForm' onChange={e => this.handleChange(e)}/>
        )
    }
}

export default Input 