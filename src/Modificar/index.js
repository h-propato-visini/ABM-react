import React from 'react'
import './style.scss'
import Input from '../Input'

class Modificar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            surname:'',
            age: '',
            id: ''
        }
    }

    async componentDidMount() {
        const user = await fetch (`http://localhost:3001/users/${this.props.match.params.id}`)
        const userJson = await user.json()
        
        this.setState ({
            name: userJson.user.name,
            surname: userJson.user.surname,
            age: userJson.user.age,
            id: userJson.user.id
        })
    }

    async handleClick() {
        const updateUser = await fetch(`http://localhost:3001/users/${this.state.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                age: this.state.age
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = updateUser.json()
    } 
    

    handleCallback(data, name) {
        this.setState({
            [name]: data
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p className='category'>Nombre</p>
                    <Input name='name' value={this.state.name} changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <div>
                    <p className='category'>Apellido</p>
                    <Input name='surname' value={this.state.surname} changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <div>
                    <p className='category'>Edad</p>
                    <Input name='age' value={this.state.age} changeCallback={(data, name)=>{this.handleCallback(data, name)}}/>
                </div>
                <div>
                    <button className='changeButton' onClick={()=> {this.handleClick()}}>Modificar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Modificar