import React from 'react';
import image from '../assets/images/banner.jpeg';

import {NavLink} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>
                <br />

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <NavLink class="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    Dashboard - Shop Event
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink class="nav-link" to="/eventos">
                        <i className="fas fa-fw fa-chart-area"></i>Eventos
                    </NavLink>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a> */}
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <NavLink class="nav-link" to="/usuarios">
                        <i className="fas fa-fw fa-table"></i>Usuarios
                    </NavLink>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a> */}
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}

export default SideBar;