import styles from './index.module.css'
import {Delete, Edit} from '@mui/icons-material';
import CheckBox from '@mui/material/Checkbox';

const ListItem = ({value='', selected=false, removeTodoDataHandler, onSelectHandler, showEditHandler}) =>{

    return (  
        <div  className={styles.list}>
            <div>
                <CheckBox checked={selected} onChange={onSelectHandler}/>
            </div>
            <span className={styles.item}>{value}</span>
            <span className={styles.btnGroup}> 
            <Edit onClick={showEditHandler} className={styles.edit} />
            <Delete onClick={removeTodoDataHandler} color='warning'/>
            </span>
        </div>
    );
}

export default ListItem;