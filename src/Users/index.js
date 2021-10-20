import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'

class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            users:[]
        }
    }


    async componentDidMount() {
                const recieveData = await fetch ('http://localhost:3001/users')
                const recieveDataJson = await recieveData.json()
                
                this.setState({
                    users: recieveDataJson.users
                })
                console.log(this.state.users)
    }

    render() {
        return (
            <React.Fragment>
                <span className='userList'>Listado de usuarios: </span>
                <Link style={{textDecoration:'none', margin: '30px'}} to='/add'>Agregar Usuario</Link>
                <ul className='userContainer'>
                    {this.state.users.map((data, key)=> {
                        return (
                            <li key={key}>
                                {data.name} {data.surname} 
                                <Link 
                                    style={{textDecoration:'none'}} to={`/modify/${data.id}`}
                                >
                                    <button>Editar</button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Users