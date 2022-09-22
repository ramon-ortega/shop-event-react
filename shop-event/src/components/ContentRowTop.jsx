import CardInDb from '../components/CardInDb';
import GenresInDb from './GenresInDb';

const ContentRowTop = () => {

    return(
        
        <div className="container-fluid">
            {/* Content Row Top */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard de Shop Event</h1>
            </div>
        
            {/* Content Row Movies*/}
            <div className="row">

                <CardInDb titulo="Usuarios" url="http://localhost:3001/api/users" color="primary" />
                <CardInDb titulo="Eventos" url="http://localhost:3001/api/events" color="info" />
                <CardInDb titulo="Ordenes" color="warning" />
                
            </div>
            {/* End movies in Data Base */}
            

            {/* Content Row Last Movie in Data Base */}
            <div className="row">

                {/* Last Movie in DB */}
                <GenresInDb titulo="Ultimo usuario creado" endpoint="http://localhost:3001/api/user/last"/>
                <GenresInDb titulo="Ultimo evento creado" endpoint="http://localhost:3001/api/event/last"/>
                {/* End content row last movie in Data Base */}

                {/* Genres in DB */}
            </div>
        {/*End Content Row Top*/}
        </div>

    );

}

export default ContentRowTop;