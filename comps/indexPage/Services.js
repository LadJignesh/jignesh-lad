import Image from 'next/image'

const Services = () => {
    return (
        <section>
            <div className="container p-4 service-section" id="services">
                <h1 className="section-title my-3">Services I Provide! </h1>
                <div className="row" style={{ padding: '2rem 0' }}>
                    <div className="col-md-3 col-sm-12 interest-card">
                        <div className="interest-box">
                            <i className="bi-github" style={{ fontSize: '4rem' }} role="img" aria-label="GitHub"></i>
                            <p className="interest-text">Interest 1</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 interest-card">
                        <div className="interest-box">
                            <i className="bi-github" style={{ fontSize: '4rem' }} role="img" aria-label="GitHub"></i>
                            <p className="interest-text">Interest 1</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 interest-card">
                        <div className="interest-box">
                            <i className="bi-github" style={{ fontSize: '4rem' }} role="img" aria-label="GitHub"></i>
                            <p className="interest-text">Interest 1</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 interest-card">
                        <div className="interest-box">
                            <i className="bi-github" style={{ fontSize: '4rem' }} role="img" aria-label="GitHub"></i>
                            <p className="interest-text">Interest 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;