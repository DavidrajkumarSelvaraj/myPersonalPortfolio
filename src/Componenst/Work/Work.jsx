import './work.scss'
import {KeyboardArrowLeft,KeyboardArrowRight} from '@material-ui/icons'
import {useState} from 'react';

export default function Work() {
    const workData=[{
        id:1,
        icon:"assets/sc.png",
        title:"Title1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut ipsum at quasi distinctio accusamus iusto. Dignissimos fuga quam error repellat, ad facere?",
        img:"assets/maang.jpg"
    },
    {
        id:1,
        icon:"assets/sc.png",
        title:"Title2",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut ipsum at quasi distinctio accusamus iusto. Dignissimos fuga quam error repellat, ad facere?",
        img:"assets/maang.jpg"
    },
    {
        id:1,
        icon:"assets/sc.png",
        title:"Title3",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut ipsum at quasi distinctio accusamus iusto. Dignissimos fuga quam error repellat, ad facere?",
        img:"assets/maang.jpg"
    }]

    const [currentSlide, setCurrentSlide] = useState(0)
    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide( currentSlide>0 ? currentSlide-1 :workData.length -1): setCurrentSlide(currentSlide<workData.length-1 ? currentSlide+1:0)
    }

    return (
        <div className='work' id='work'>
            <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                {workData.map(d=>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
            <KeyboardArrowLeft className='leftArrow' onClick={()=>{handleClick("left")}}/>
            <KeyboardArrowRight className='rightArrow' onClick={()=>handleClick("right")}/>
        </div>
    )
}
