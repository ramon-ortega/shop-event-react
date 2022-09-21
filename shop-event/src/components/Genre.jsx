import React from 'react';
import profile from '../assets/images/default.jpg';

function Genre(props){

    const email = props.email;

    if(email){
        return <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                        <div className="card-body">
                            Nombre: {props.first_name}
                        </div>
                        <div className="card-body">
                            Apellidos: {props.last_name}
                        </div>
                        <div className="card-body">
                            Correo electrónico: {props.email}
                        </div>
                        <div className="card-body">
                            Username: {props.username}
                        </div>
                        <div className="card-body">
                            Titulo: {props.title}
                        </div>
                        <div className="card-body">
                        Foto de perfil:
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ { width: "40rem" } } src={profile} alt=" Imagen de Usuario " />
                        </div>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de usuario</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }


    return(
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    Id: {props.id}
                </div>
                <div className="card-body">
                    Titulo: {props.title}
                </div>
                <div className="card-body">
                    Fecha: {props.event_date}
                </div>
                <div className="card-body">
                    Descripcion: {props.description}
                </div>
                <div className="card-body">
                    Ubicación: {props.ubication}
                </div>
                <div className="card-body">
                    Precio: {props.cost}
                </div>
                <div className="card-body">
                Foto del evento:
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ { width: "40rem" } } src={profile} alt=" Imagen de Usuario " />
                </div>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del evento</a>
                </div>
            </div>
        </div>
    )
}
export default Genre;