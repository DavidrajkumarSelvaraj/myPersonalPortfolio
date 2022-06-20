import './contact.scss'
import { useState } from 'react';
import { LinkedIn,Facebook,Instagram } from '@material-ui/icons'

export default function Contact() {
    const [submitMessage, setsubmitMessage] = useState(false)
    const submitHandler =(obj)=>{
        obj.preventDefault();
        setsubmitMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/HandShake.png" alt="" />
                
            </div>
            <div className="right">
                
                    <h2>Contact.</h2>
                    <form onSubmit={submitHandler}>
                        <input type="text"  placeholder="E-mail"name="" id="" />
                        <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                        <button type="submit">Send</button>
                        <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/davidrajkumarselvaraj/" target="_blank" rel="noreferrer">
                            <LinkedIn className="linkedin"/>
                        </a>
                        <a href="https://www.instagram.com/davidrajkumar_selvaraj/" target="_blank" rel="noreferrer">
                            <Facebook className="facebook"/>
                        </a>
                        <a href="https://www.instagram.com/davidrajkumar_selvaraj/" target="_blank" rel="noreferrer">
                            <Instagram className="instagram"/>
                        </a>
                        </div>
                        {submitMessage && <span>Thanks for Reaching out ! Will get Back to you ASAP</span>}
                    </form>
            </div>
            
        </div>
    )
}
