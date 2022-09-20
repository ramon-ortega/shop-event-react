const Footer = ( props ) => {

    return (
            
        <footer className="sticky-footer bg-white">
            {/* Footer */}
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    { props.children }
                </div>
            </div>
            {/* End of Footer */}
        </footer>   

    );

}

export default Footer;