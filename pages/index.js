import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sales from "../components/sales";


export default function Home() {
  
  return (
    <div className = {styles.main_container}>
    <div className={styles.container}>
      <h1 style = {{fontStyle: "italic", fontSize: 50}}><span style = {{color: "rgb(0, 180, 24)"}}>Prof</span>ound</h1>
      <h3>Want to learn programming?</h3>
      <h3>Ever wondered how websites and apps are created and function?</h3>
      <h2>Learn today with Profound!</h2>
    </div>
    <Sales/>
    </div>
  )
}
