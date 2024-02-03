import style from './index.module.css'

const InputBox=(props)=>{
let {todoInput, changeTextHandler, addTodoHandler} = props;

const onEnterHandler=({keyCode})=>{
    if(keyCode===13){
        return addTodoHandler();
    }
    
}



return (
    <div className={style.inputSection}>
        <input placeholder='Enter text here...' 
        value={todoInput} 
        onChange={changeTextHandler}
        onKeyDown={onEnterHandler}
        />
        <button onClick={addTodoHandler}>Add</button>
    </div> 
);
}

export default InputBox;
