import './Experience.scss';
import {ArrowLeft,ArrowRight} from '@material-ui/icons'
import { useState } from 'react';

export default function Experience() {
    const expData=[{
        id:1,
        logo:"assets/IDP.jpg",
        company_title:"IDP Education Ltd - Digital Campus",
        start:"April 2022",
        end:"Current",
        location:"Chennai",
        designation:"Software Developer (SAP C4C)"
    },
    {
        id:2,
        logo:"assets/Edureka.png",
        company_title:"Edureka",
        start:"October 2021",
        end:"May 2022",
        location:"Remote",
        designation:"Full Stack Web Development Internship",
        doc:"assets/edurekaCertificate.pdf"
    },
    {
        id:3,
        logo:"assets/KNU logo.jpg",
        company_title:"Kyungpook National University",
        start:"May 2017",
        end:"May 2017",
        location:"Daegu, South Korea",
        designation:"Data Analytics Interns",
        doc:"assets/southKoreaInternshipCertificate.pdf"
        
    }    
]

    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide( currentSlide>0 ? currentSlide-1 :expData.length -1): setCurrentSlide(currentSlide<expData.length-1 ? currentSlide+1:0)
    }
    return (
        <div className="experience" id="experience">
            
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}} >
                {expData.map(d=>(<div className="container">
                    <a href={d.doc} className="item" rel="noreferrer" target="_blank">
                        <div className="left">
                            <div className="imgContainer">
                                <img src={d.logo} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h2>{d.company_title}</h2>
                            <h3>{d.designation}</h3>
                            <h5>{d.start} - {d.end}</h5>
                            <h5>{d.location}</h5>
                        </div>
                    </a>
                </div>))}
            </div>
            <ArrowLeft className="leftArrow" onClick={()=>handleClick("left")}/>
            <ArrowRight className="rightArrow" onClick={handleClick}/>
        </div>
    )
}
