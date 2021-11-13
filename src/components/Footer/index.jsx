import React,{useRef,useEffect} from 'react'
import emitter from '../../utils/events'
const Footer = (props) => {
  const input1 = useRef('')
  const {todos,clear,checkAll} = props
  const total = todos.length
  const doneTotal = todos.reduce((preValue,current)=>preValue+(current.complete?1:0),0)

  useEffect(() => {
    emitter.emit('doneTotal',[doneTotal,total])
    return () => {
      
    }
  }, [doneTotal,total])
  // const {checked} = input1.current;
  // console.log(input1.current.checked);
  const handleCheckAll = (event)=>{
    const {checked} = event.target
    console.log(checked);
    checkAll(checked)
  }
  const goClear = ()=>{
    clear()
  }
    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" ref={input1}  onChange={handleCheckAll} checked={total===doneTotal&&total!==0?true:false}/>
          </label>
          <span>
            <span>已完成{doneTotal}</span> / 全部{total}
          </span>
          <button onClick = {goClear} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
export default Footer