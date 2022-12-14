import React from 'react'
import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Content() {
  const [switchDisable, setSwitchDisable] = React.useState(false);
 return (
   <div className={styles.container}>
     <div>
       <span>With default Theme:</span>
     </div>
     <Switch {...label} checked={switchDisable}/>
     <Switch {...label} onClick={()=> setSwitchDisable(!switchDisable)}/>
     <Switch {...label} disabled={switchDisable} defaultChecked />
   </div>
 );
}