import React from 'react'
import './style.scss'
import Input from '../Input'
import Button from '../Button'

class Agregar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            surname:'',
            age: ''
        }
    }

    handleCallback(newValue, name) {
       this.setState({
           [name]: newValue
       })
    }

    render() {
        return (
            <React.Fragment>
                <div class='inputContainer'>
                    <p>Nombre</p>
                    <Input name='name' changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <div class='inputContainer'>
                    <p>Apellido</p>
                    <Input name='surname' changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <div class='inputContainer'>
                    <p>Edad</p>
                    <Input name='age' changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <Button Data={this.state} 
                    action='Guardar'
                    backColor='rgb(78, 4, 78)'
                    color='white'
                    border='none'
                    width='150px'
                    height='30px'
                />
            </React.Fragment> //51:17
        )
    }
}

export default Agregar