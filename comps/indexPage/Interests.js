import Link from 'next/link';

const Interests = () => {
    return (
        <section className="interest-section p-4" id="interests">
            <div className="container my-3">
                <h1 className="section-title my-3">My Interests</h1>
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
                <div className="row project-sec-link-btn text-center">
                    <Link href="#projects">
                        <div>
                            <i style={{ fontSize: '4rem' }} className="bi bi-chevron-down"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Interests;