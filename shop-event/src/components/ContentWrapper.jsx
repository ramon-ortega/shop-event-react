import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';

const ContentWrapper = () => {

    return(
        
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Content Wrapper */}

            {/* Main Content */}
            <div id="content">

                <TopBar />
                <ContentRowTop />

            </div>
            {/* End of MainContent */}

            <Footer titulo="Hola" >
                <span>Desarrollado con rock por Shop-Event</span>
            </Footer>

        {/* End of Content Wrapper */}
        </div>
        

    );

}

export default ContentWrapper;