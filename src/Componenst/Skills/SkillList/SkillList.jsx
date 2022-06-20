import './skillList.scss'

export default function SkillList({title,setSelected,id,active}) {
    return (
        <li className={active ? "skillList active":"skillList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
