import { Button, Modal } from "@mui/material";
import styles from './index.module.css'
import {Input} from "@mui/material";
import { useState } from "react";

const Edit =({onClose, editValue, onUpdateText})=>{
  const [text, setText] = useState(editValue);

  function onChangeText(event){
    const {value} = event.target;
    setText(value);
  }
  
  return (
    <Modal
       open
       onClose={()=>{}}
       className={styles.container}
       aria-labelledby="child-modal-title"
       aria-describedby="child-modal-description">
       <div className={styles.content}>
        <span className={styles.header}>Edit</span>
        <span className={styles.edit}>
          <Input 
          value={text} 
          onChange={onChangeText} 
          className={styles.editInput} 
          />
        </span>
        <span className={styles.footer}>
            <Button
            className={styles.cancel} 
            variant="contained"
            color="error"
            onClick={onClose}>
            Cancle
            </Button>
            <Button
            className={styles.save} 
            variant="contained"
            color="primary"
            onClick={()=>onUpdateText(text) }>
            Save
            </Button>
        </span>
       </div>
   </Modal>
  );
}

export default Edit