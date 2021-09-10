import React from "react";
import './style.scss'
import Button from "../Button";

class Users extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='userContainer'>
                    <span className='userSpan'>Hola</span>
                    <Button
                        action='Editar' 
                        backColor='white' 
                        color='black'
                        border='1px solid black'
                        width='80px'
                        height='30px'
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Users