import React from 'react'
import './style.scss'
import Input from '../Input'
import Button from '../Button'
import {Link} from 'react-router-dom'

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
                <div>
                    <Button Data={this.state} 
                        action='Guardar'
                        backColor='rgb(78, 4, 78)'
                        color='white'
                        border='none'
                        width='150px'
                        height='30px'
                    />
                </div>
                <Link to='/' style={{margin: '15px'}}>Ver Usuarios</Link>
            </React.Fragment> //51:17
        )
    }
}

export default Agregar