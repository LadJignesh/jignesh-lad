import Link from 'next/link';

const HireMe = () => {
    return (
        <section>
            <div className="container p-4 text-center" style={{ borderTop: '.5px solid #aeaeae' }}>
                <h1 className="my-3">Want to Hire Me or Connect with me, then click on envelope below and drop me an email</h1>
                <Link href="mailto:111jigu@gmail.com"><i className="bi bi-envelope"  style={{ fontSize: '4rem', fontWeight: '900' }}></i></Link>
            </div>
        </section>
    );
}

export default HireMe;