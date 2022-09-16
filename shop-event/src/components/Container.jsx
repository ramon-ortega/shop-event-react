import { NavLink } from "react-router-dom";

const Container = (props) => {

    return (

        <div className="main">
            <div className="header">
                <NavLink activeClassName = "active" to={'/'}>Index</NavLink>
                <NavLink activeClassName = "active" to={'/contact'}>Contacto</NavLink>
                <NavLink to={'/about'}>Acerca de</NavLink>
            </div>
            <div className="container">
                {props.children}
            </div>
        </div>

    );
}

export default Container;