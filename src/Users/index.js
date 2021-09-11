import React from "react";
import './style.scss'
import { Link } from 'react-router-dom'
import Modificar from '../Modificar'

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
                <div className='userContainer'>
                    {this.state.users.map((data, key)=> {
                        return (
                            <div>
                                {data.name} {data.surname} <Link style={{textDecoration:'none'}} to={`/modify/${data.id}`}><button>Editar</button></Link>
                            </div> //1:55
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Users