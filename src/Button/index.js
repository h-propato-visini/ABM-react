import React from "react";
import './style.scss'

class Button extends React.Component {

    async handleClick(Data) {
        const Datos = this.props.Data
        if (Datos.name != '' && Datos.surname != '' && Datos.age != '') {
            const sendData = await fetch ('http://localhost:3001/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.props.Data.name,
                    surname: this.props.Data.surname,
                    age: this.props.Data.age
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const newData = await sendData.json()

            console.log(newData)
            
            if(sendData.status != 200) {
                console.log('hubo un error')
            } else {
                console.log('todo salió bien')
            }
        } else {
            console.log('falta completar un dato obligatorio')
        }
    }

    render() {
        return (
            <button 
                className='buttonForm' 
                style={{backgroundColor:this.props.backColor, color:this.props.color, border:this.props.border, width: this.props.width, height: this.props.height}}
                onClick={()=>this.handleClick()}    
            >
                {this.props.action}
            </button>
        )
    }
}

export default Button