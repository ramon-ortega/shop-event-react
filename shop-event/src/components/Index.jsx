import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

const Index = () => {

    return(

        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentWrapper />
                </div>
            </div> 
        </div>

    );

}

export default Index;