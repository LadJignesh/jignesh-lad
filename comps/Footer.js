const Footer = () => {
    return (
        <footer>
            <div className="container text-white">
                <div className="row">
                    <div className="col-6"><div className="social-icons">
                        <i className="bi-github" role="img" aria-label="GitHub"></i>
                        <i className="bi-twitter" role="img" aria-label="Twitter"></i>
                        <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                    </div>
                    </div>
                    <div className="col-6"><p style={{ textAlign: 'right', padding: '1.5rem' }}> &copy; 2022 Jignesh Lad </p></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;