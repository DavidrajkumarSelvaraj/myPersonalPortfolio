import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {useState,useEffect} from 'react';
import { featuredPortfolioData,webPortfolioData,mobilePortfolioData } from '../data';

export default function Portfolio() {
    const [data,setData]=useState([])
    const [selected,setSelected]=useState("featured")
    const list=[
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"web",
            title:"Web Application"
        },
        {
            id:"mobile",
            title:"Mobile Application"
        }
    ]
    useEffect(()=>{
        switch (selected){
            case "featured": setData(featuredPortfolioData);
            break;
            case "web": setData(webPortfolioData);
            break;
            case "mobile": setData(mobilePortfolioData);
            break;
            default: setData(featuredPortfolioData);
            break;
        }
    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>
                Portfolio
            </h1>
            <ul>
                    {list.map(item=>(
                        <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id} />
                    ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
            
            
            
        </div>
    )
}
