import SideBar from './SideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import ListaUsuarios from './ListaUsuarios';

const Eventos = () => {

    return(

        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ListaUsuarios />
                    <Footer titulo="Hola" >
                        <span>Desarrollado con rock por Shop-Event</span>
                    </Footer>
                </div>
            </div> 
        </div>

    );

}

export default Eventos;