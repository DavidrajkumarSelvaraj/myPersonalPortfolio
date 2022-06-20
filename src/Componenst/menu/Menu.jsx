import './menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>setMenuOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#education" onClick={()=>setMenuOpen(false)}>Education</a>
                </li>
                <li>
                    <a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a>
                </li>
                {/* <li>
                    <a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a>
                </li> */}
                {/* <li>
                    <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
                </li> */}
                {/* <li>
                    <a href="#testimonials" onClick={()=>setMenuOpen(false)}>Testimonials</a>
                </li> */}
                <li>
                    <a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
