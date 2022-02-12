import Image from "next/image";
const Introduction = () => {
    return (
        <section className="intro-section p-5 bg-dark text-white">
            <div className="row">
                <div className="col-md-4">
                    <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
                        <Image src="/nft.jpeg" alt="me" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                </div>
                <div className="col-md-8">
                    <p className="intro-text">
                        Hi there, I am developer trying to add value to business and in process trying to learn and improve myself.
                    </p>
                    <p className="intro-text"> I like reading books, doing exercise and meditating.</p>
                    <div className="social-icons">
                        <i className="bi-github" role="img" aria-label="GitHub"></i>
                        <i className="bi-twitter" role="img" aria-label="Twitter"></i>
                        <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                        <i className="bi-youtube" role="img" aria-label="Youtube"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;