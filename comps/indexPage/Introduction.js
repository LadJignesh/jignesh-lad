import Image from "next/image";
const Introduction = () => {
    return (
        <section className="intro-section p-5 bg-black text-white">
            <div className="row intro-row">
                <div className="col-md-4">
                    <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
                        <Image src="/nft.jpeg" alt="me" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                </div>
                <div className="col-md-8">
                    <p className="intro-text">
                        Hi there, I am Jerry, an NFT that was minted by the developer of this amazing website Jignesh. Let me give you a quick intro of Jignesh. He is a software developer based in Dublin, Ireland working for Overstock.com. 
                    </p>
                    <p className="intro-text">He has 3+ years of programming experience and is currently learning WEB 3 development. He likes to read books, travel, exercise and meditate.</p>
                    <div className="social-icons">
                        <i className="bi-github" role="img" aria-label="GitHub"></i>
                        <i className="bi-twitter" role="img" aria-label="Twitter"></i>
                        <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;