import './sidebar.scss';


export default function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}><a href="#intro">Home</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#works">Recent Projects</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
            
        </div>
    )
}

