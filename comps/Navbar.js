import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-black sticky-top px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
                        <Image src="/nft.jpeg" alt="me" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-2">
                            <Link className="nav-link" href="#interests">Interests</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link" href="#projects">Projects</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link" href="#services">Services</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link" href="/documents/Jignesh_Lad_CV.pdf">Get My Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;