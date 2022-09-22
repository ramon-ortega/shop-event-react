import React, {Component} from 'react';

class Movie extends Component{

    constructor(props){
        super(props);
        this.state = {
            eventList : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/events')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({eventList: users.data})
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){

        let contenido;

        if(this.state.eventList.length == 0){
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
                                                    <th>Titulo</th>
                                                    <th>Descripción</th>
                                                    <th>Ubicación</th>
                                                    <th>Fecha</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Titulo</th>
                                                    <th>Descripción</th>
                                                    <th>Ubicación</th>
                                                    <th>Fecha</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {
                                                    this.state.eventList.map((event, index) =>{
                                                        return <tr>
                                                        <td>{event.id}</td>
                                                        <td>{event.title}</td>
                                                        <td>{event.description}</td>
                                                        <td>{event.ubication}</td>
                                                        <td>{event.event_date}</td>
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
export default Movie;