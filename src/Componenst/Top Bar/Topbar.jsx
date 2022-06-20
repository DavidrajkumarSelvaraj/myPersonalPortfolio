import './topbar.scss';
import {Person,Mail} from '@material-ui/icons'




export default function Topbar({menuOpen,setMenuOpen}) {
    
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                            daviD.
                    </a>
                    <div className="itemcontainer">
                        <Person className='icon'/>
                        <a href="tel:+919894190430" className="mail">
                        <span>+91 9894190430</span>
                        </a>
                    </div>
                    <div className="itemcontainer">
                        <Mail className='icon'/>
                        <a href="mailto:david_199599@yahoo.com" className="mail">
                        david_199599@yahoo.com
                        </a>
                    </div>

                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
