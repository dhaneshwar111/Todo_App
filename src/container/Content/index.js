import styles from './index.module.css'
import ListItem from "../../component/ListItem";
import { Button } from '@mui/material';
const Content=({
  todoData=[], 
  removeTodoDataHandler,
  onSelectHandler,
  onDeleteSelected,
  showEditHandler,
})=>{

    return(
        <div className={styles.container}>
            {todoData.map(({value, selected}, index)=>{
                return (
                  <ListItem 
                    key={index}
                    value={value}
                    selected={selected}
                    onSelectHandler={()=>onSelectHandler(index)}
                    removeTodoDataHandler={()=>removeTodoDataHandler(index)}
                    showEditHandler={()=>showEditHandler(index)}
                  />
                );
            })}
            {Boolean(todoData.length) &&
            <Button className={styles.deleteAllBtn} 
            variant='outlined'
            onClick={onDeleteSelected}>
            Delete
            </Button>}
        
        </div>
    )
}

export default Content;

// {display:'flex', justifyContent:'center', alignItems:'center', margin:'10', flexDirection:'column', textTransform:'capitalize'}