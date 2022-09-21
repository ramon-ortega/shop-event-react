import React, {Component} from 'react';
import Genre  from './Genre';

class GenresInDb extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuario : {}
        }
    }

    componentDidMount(){
        fetch(this.props.endpoint)
        .then(response => {
            return response.json();
        })
        .then(user => {
            this.setState({usuario: user.data[0]});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){

        let contenido;

        if( this.state.usuario === {} ){
            contenido = <h3>Cargando...</h3>
        } else {
            contenido = <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800">{this.props.titulo}</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Genre {...this.state.usuario} />
                    </div>
                </div>
            </div>
        </div>
        }

        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    {contenido}
               
            </React.Fragment>
        )
    }
}
export default GenresInDb;