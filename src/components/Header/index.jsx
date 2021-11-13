import React,{useRef} from 'react'
import {nanoid} from 'nanoid'
const Header = (props) => {

    const { addTodo } = props;
    const inputRef = useRef();
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const newText = inputRef.current.value.trim();
    //     if(newText.length > 0) {
    //        addTodo({
    //            id: nanoid(),
    //            text: newText,
    //            complete: false
    //        })
    //     }
        

    //     inputRef.current.value = "";
    // }
    const handleKeyup = (event)=>{
          const  {keyCode} = event
        //   console.log(keyCode);
        if(keyCode !== 13) return
        const text = inputRef.current.value.trim()
        if(text.length > 0) {
           addTodo({
               id: nanoid(),
               text,
               complete: false
           })
        }
        inputRef.current.value = "";
    }
    return (
        <div className="todo-header" >
            {/* <form onSubmit={onSubmit}> */}
                <input onKeyUp={handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认" ref={inputRef} />

            {/* </form> */}
        </div>
    )
}
export default Header