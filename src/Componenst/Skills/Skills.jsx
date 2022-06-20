import './Skills.scss'
import { useState,useEffect } from 'react'
import {pskillsData,tskillsData} from '../data'
import SkillList from './SkillList/SkillList'

export default function Skills() {
const list=[{
    id:"technical",
    title:"Technical Skills"
},{
    id:"primary",
    title:"Primary Skills"
}]

const [data, setdata] = useState([])

const [selected,setSelected]= useState("technical")

useEffect(()=>{
    switch(selected){
        case "technical": setdata(tskillsData)
        break;
        case "primary": setdata(pskillsData)
        break;
        default: setdata(tskillsData)
        break;
    }
},[selected])
    return (
        <div className="skills" id="skills">
          
            <div className="container">
                {data.map(d=>(<div className="item">
                    <img src={d.img} alt="" />
                </div>))}
            </div>
            <ul>
                {list.map(li=>(<SkillList title={li.title} active={selected===li.id} setSelected={setSelected} id={li.id} />))}
            </ul>
        </div>
    )
}


{/* <img src="assets/MongoDB.png" alt="" className="imgContainer"/>
<img src="assets/Express.png" alt="" className="imgContainer"/>
<img src="assets/React.png" alt="" className="imgContainer"/>
<img src="assets/Node.png" alt="" className="imgContainer"/>
<img src="assets/HTML.png" alt="" className="imgContainer"/>
<img src="assets/CSS.png" alt="" className="imgContainer"/>
<img src="assets/Bootstrap.png" alt="" className="imgContainer"/>
<img src="assets/Cloud Application Studio.png" className="imgContainer" alt="" /> */}