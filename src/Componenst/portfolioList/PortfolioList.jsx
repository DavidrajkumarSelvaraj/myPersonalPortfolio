import './portfolioList.scss';

export default function PortfolioList({title,active,setSelected,id}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected("primary")}>
            {title}
        </li>
    )
}
