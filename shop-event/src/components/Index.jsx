import Container from './Container';
import SideBar from './SideBar';
import TopBar from './TopBar';

const Index = () => {

    return(

        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                </div>
            </div> 
        </div>

    );

}

export default Index;