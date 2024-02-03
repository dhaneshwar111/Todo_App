import React, {Component} from "react";
import Header from '../../component/Header'
import Content from "../Content";
import Editmodal from "../../component/Edit";

const DATA_OBJ = {value:'', selected: false}

class Main extends Component{
    state={
        todoInput : '',
        todoData: [],
        showEdit:  false,
        activeIndex: null,
    }

    componentDidMount(){
        const todoDataFromLocalStorage = localStorage.getItem('todoData');
        if(todoDataFromLocalStorage){
            this.setState({todoData: JSON.parse(todoDataFromLocalStorage)});
        }
    };

    addTodoDataToLocalStorage=()=>{
        const {todoData} = this.state;
        localStorage.setItem('todoData', JSON.stringify(todoData))
    }

    changeTextHandler=(e)=> {
        const inputText = e.target.value;
        this.setState({todoInput:inputText})
    }
    
    addTodoHandler=()=>{
        const {todoInput, todoData} = this.state;
        if(todoInput){
            const dataObj = {...DATA_OBJ};
            dataObj.value = todoInput;
          const tempArr = [...todoData];
          tempArr.push(dataObj);
          this.setState({todoData:tempArr, todoInput:'' },()=>{

             this.addTodoDataToLocalStorage();
          });
        }
    };

   removeTodoDataHandler=(index)=>{
    const {todoData} = this.state;
    const tempArr = [...todoData] ;//object.entries is usde for conver the array into object
    tempArr.splice(index, 1)
    this.setState({todoData:tempArr}, ()=>{
        this.addTodoDataToLocalStorage();
    })
   }

   onSelectHandler=(index)=>{
    const {todoData} = this.state;
    const tempArr = [...todoData] ;
    tempArr[index].selected = !tempArr[index].selected;
    this.setState({todoData:tempArr}, ()=>{
        this.addTodoDataToLocalStorage();
    })
   }

   onDeleteSelected=()=>{
    const {todoData} = this.state;
    const tempArr = [...todoData] ;
    const filteredArray = tempArr.filter(item=>!item.selected)
    this.setState({todoData:filteredArray}, ()=>{
        this.addTodoDataToLocalStorage();
    })
   }

   showEditHandler=(index)=>{
    const {showEdit} = this.state;
    this.setState({showEdit:!showEdit, activeIndex:index})
   }

   onUpdateText=(text )=>{
    const {todoData, activeIndex} = this.state; 
    const tempArray = [...todoData];
    const updatedData = tempArray[activeIndex];
    updatedData.value = text;
    tempArray.splice(activeIndex, 1, updatedData)
    this.setState({todoData:tempArray, showEdit:false}, ()=>{
        this.addTodoDataToLocalStorage();
    })
   }

    render(){
        const {activeIndex, showEdit, todoData, todoInput} = this.state;
        const editValue = todoData[activeIndex] ? todoData[activeIndex].value: '';
        return(
           <>
             
              <Header 
              todoInput={todoInput} 
              changeTextHandler={this.changeTextHandler}
              addTodoHandler={this.addTodoHandler}
              />
             <Content 
               todoData={todoData}
               removeTodoDataHandler={this.removeTodoDataHandler}
               onSelectHandler={this.onSelectHandler}
               onDeleteSelected={this.onDeleteSelected}
               showEditHandler = {this.showEditHandler}
             />
             {showEdit && (
              <Editmodal 
              editValue={editValue} 
              onClose = {()=>this.setState({showEdit: false})}
              onUpdateText={this.onUpdateText}
             />
            )}           
          </>
        )
    }
}

export default Main;