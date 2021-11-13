import React,{useState,useCallback} from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { MyContext } from './utils/context-manager';
import './App.css'
function App() {
  const [todos, setTodos ] = useState([
    {id:"001",text:'吃饭',complete:false},
    {id:'002',text:'睡觉',complete:false},
    {id:'003',text:'打代码',complete:true}
  ]);
    const addTodo = useCallback((todo) => {
        setTodos(todos => [todo,...todos]);
    },[])
    const removeTodo = useCallback(
        (id) => {
            setTodos(todos => todos.filter(todo => {
                return todo.id !== id;
            }))
         },
        []
    )
    const toggleTodo = useCallback((id) => {
       setTodos(todos => todos.map(todo => {
           return todo.id === id ? 
           {
               ...todo, 
               complete: !todo.complete
           }:
           {...todo}
       }))
    },[])
    const checkAll  = useCallback(
      (complete)=>{
        setTodos(todos=>todos.map(item=>{return {...item,complete}}))  
      },[]

    )
    const clear  = useCallback(
      ()=>{
        setTodos(todos=>todos.filter(item=>{return !item.complete}))  
      },[]

    )
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo = {addTodo} />
        <MyContext.Provider value={{toggleTodo,removeTodo}}>
           <List todos={todos}/>
        </MyContext.Provider>
        <Footer todos = {todos}  clear = {clear} checkAll = {checkAll}/>
      </div>
    </div>
  );
}

export default App;
