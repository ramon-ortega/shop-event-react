import React, {Component} from 'react';

class ListaUsuarios extends Component{

    constructor(props){
        super(props);
        this.state = {
            userList : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({userList: users.data})
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){

        let contenido;

        if(this.state.userList.length == 0){
            contenido = <h3>Cargando...</h3>
        } else {
            return(
                <React.Fragment>
                            {/*<!-- PRODUCTS LIST -->*/}
                            <h1 className="h3 mb-2 text-gray-800">Todos los eventos</h1>
                            
                            {/*<!-- DataTales Example -->*/}
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombres</th>
                                                    <th>Apellidos</th>
                                                    <th>Email</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nombres</th>
                                                    <th>Apellidos</th>
                                                    <th>Email</th>
                                                    <th>Username</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {
                                                    this.state.userList.map((user, index) =>{
                                                        return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.first_name}</td>
                                                        <td>{user.last_name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.username}</td>
                                                    </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>            
                </React.Fragment>
            )
        }
    }
}
export default ListaUsuarios;