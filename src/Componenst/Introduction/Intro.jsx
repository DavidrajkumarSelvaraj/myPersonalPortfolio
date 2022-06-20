import './intro.scss'
import {KeyboardArrowDown} from "@material-ui/icons";

import Typewriter from 'typewriter-effect';


export default function Intro() {
    
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/David.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, I'm</h2>
                    <h1>Davidrajkumar Selvaraj</h1>
                    <h3>
                        <span>
                            <Typewriter
                            options={{
                                strings:["Software Developer","Full-Stack Developer","Front-End Developer","Back-End Developer"],
                                autoStart:true,
                                delay:75,
                                loop:true
                            }}
                            />
                        </span>
                    </h3>
                </div>
                <a href="#education">
                    <KeyboardArrowDown className='arrow'/>
                </a>
            </div>
        </div>
    )
}
