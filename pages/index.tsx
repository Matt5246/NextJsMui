import React from 'react'
import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
// import Header from './header'
import Content from './content';
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const [switchDisable, setSwitchDisable] = React.useState(false);
 return (
  <>
    <Content/>
  </>
   
 );
}