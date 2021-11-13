import React,{useEffect,useState} from 'react'
import Item from './Item'
import emitter from '../../utils/events'
const List = (props) => {
    const [doTotal, setDoTotal] = useState()
    useEffect(() => {
        emitter.addListener('doneTotal',([doneTotal,total])=>{
            setDoTotal(doTotal=>total-doneTotal)
        })
        return () => {
            emitter.removeListener('doneTotal',(msg)=>{
                setDoTotal((doneTotal)=>{
                  return doneTotal+'订阅消息即将销毁'
                })
            })
        }
    },[])
    const { todos} = props;
    return (
        <ul className="todo-main">
        {
            todos.map(todo => {
                return (
                    <Item 
                        key={todo.id}
                        {...todo}
                     
                 />
                 
                )
            })
        }
        <h4>   {doTotal>0?`少年，努力吧，您还有${doTotal}未完成`:'哇，今天表现不错，您的所有任务第完成了'}</h4>
    </ul>
    )
}
export default List