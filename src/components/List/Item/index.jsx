import React ,{useState,useContext}from 'react'
import { MyContext } from '../../../utils/context-manager';
const Item = (props) => {
    const [mouseIn, setMouseIn] = useState(false)
    const {toggleTodo,removeTodo} = useContext(MyContext)
    const { 
        id,
        text,
        complete
        } = props
    const  onChange =() => {
       toggleTodo(id);
    }

    const onRemove = () => {
        if(window.confirm('确定删除吗？')){
            removeTodo(id);
        }
    }
    const handleMouse = (flag)=>{
        return ()=>{
            setMouseIn(mouseIn=>{
                return flag
            })
        }
      
    }
    return (
        <li onMouseLeave={handleMouse(false)}  onMouseEnter = {handleMouse(true)} style={{backgroundColor:mouseIn ? '#ddd':'#fff'}}>
            <label>
                <input type="checkbox" onChange={onChange} checked={complete}/>
                <span>{text}</span>
            </label>
            <button onClick={onRemove} style={{display:mouseIn?'block':"none"}} className="btn btn-danger">删除</button>
        </li>
       
        

    )
}
export default Item