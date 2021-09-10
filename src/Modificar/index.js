import React from 'react'
import './style.scss'
import Input from '../Input'
import Button from '../Button'

class Modificar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <p>Nombre</p>
                    <Input/>
                </div>
                <div>
                    <p>Apellido</p>
                    <Input/>
                </div>
                <div>
                    <p>Edad</p>
                    <Input/>
                </div>
                <Button 
                    action='Modificar'
                    backColor='rgb(78, 4, 78)'
                    color='white'
                    border='none'
                    width='150px'
                    height='30px'
                />
            </React.Fragment>
        )
    }
}

export default Modificar