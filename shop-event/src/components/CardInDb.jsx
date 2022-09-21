import React, {Component} from 'react';

class CardInDb extends Component{

    constructor(props){
        super(props);
        this.state = {
            info : 0
        }
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(response => {
            return response.json();
        })
        .then(responseDecoded => {
            this.setState({info: responseDecoded.data.length});
        })
        .catch(error => {
            console.log(error);
        });
    }




    render(){

        const titleClasses  = "text-xs font-weight-bold text-"+this.props.color+" text-uppercase mb-1";

        let contenido;

        contenido = <div className="col-md-4 mb-4">
            <div className={ `card border-left-${this.props.color} shadow h-100 py-2` }>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={ titleClasses }>{this.props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{ this.state.info }</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    {contenido}
               
            </React.Fragment>
        )
    }
}
export default CardInDb;