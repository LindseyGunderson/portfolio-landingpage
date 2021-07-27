import './nav.scss';

export default function Nav({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="nav-logo">
                    <a href="#intro">
                        <img src="assets/main-logo.svg" alt="Lindsey Gunderson Logo" />
                    </a>
                </div>
                <div className="nav-links">
                   <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
