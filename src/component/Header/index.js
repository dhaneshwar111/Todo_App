import style from './index.module.css';
import InputBox from '../inputBox/index';
const Header = (props) => {
  const {todoInput, changeTextHandler, addTodoHandler} = props;
  
    return (
        <div className={style.container}>
          <div className={style.headerText}>Add todo</div>
          <InputBox todoInput={todoInput} 
          changeTextHandler={changeTextHandler}
          addTodoHandler={addTodoHandler}
          />
        </div>
    );
};

export default Header;