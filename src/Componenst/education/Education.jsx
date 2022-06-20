import './education.scss';
import { useState } from 'react';
import { KeyboardArrowLeft,KeyboardArrowRight } from '@material-ui/icons';

export default function Education() {
    const educationData=[{
        id:1,
        icon:"assets/BE.png",
        title:"Bachelors of Engineering",
        branch:"Computer Science and Engineering",
        grade:"1st Class",
        img:"assets/SNS.jpg"
    },
    {
        id:2,
        icon:"assets/MSc.png",
        title:"Masters of Science",
        branch:"Software Engineering",
        grade:"Merit",
        img:"assets/KingstonUniversity.png"
    },]

    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClicker=(way)=>{
        way==="left" ? setCurrentSlide( currentSlide>0 ? currentSlide-1 :educationData.length -1): setCurrentSlide(currentSlide<educationData.length-1 ? currentSlide+1:0)
    }

    return (
        <div className='education' id='education'>
            <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                {educationData.map(d=>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h1>{d.title}</h1>
                                <h2>{d.branch}</h2>
                                <h3>Grade: {d.grade}</h3>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
            <KeyboardArrowLeft className='leftArrow' onClick={()=>{handleClicker("left")}}/>
            <KeyboardArrowRight className='rightArrow' onClick={()=>handleClicker("right")}/>
        </div>
    )

}
