import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no, display, text,setTodos}) => {

  const deleteText = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((todo)=>todo.no!==no);
    setTodos(data)
  }

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"))
    for(let i = 0; i < data.length; i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display= "line_through";
        }
        else{
           data[i].display= "";
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems_container ${display}`} onClick={()=>toggle(no)}>
        {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />} 
        <div className="todoitems_text">{text}</div>
      </div>
      <img onClick={()=>deleteText(no)} className='todoitems_cross_icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItems