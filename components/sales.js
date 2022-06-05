import styles from '../styles/Home.module.css'
import Image from "next/image";
import HTML_I from "../imgs/html5.png"
import CSS_I from "../imgs/css-3.png";
import JS_I from "../imgs/js.png"

import PY_I from "../imgs/python.png";


import ATOM_logo from "../imgs/react";
import NextJS_logo from "../imgs/nextJS";
import TENSORFLOW_logo from "../imgs/Tensorflow_logo.svg.png"


function HTML_CSS_JS(){
    let localStyle = {
        price:Styles.prices,
        title:{
            marginBottom: "-1.5rem"
        },
        img: Styles.img, 
        imgCont: Styles.imgCont, 
        imgMainCont:{
            backgroundColor:"transparent",
            marginTop: "5rem",
            display: "flex",
            flexDirection: "row",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center",
            flexWrap:"wrap"
        }
    }
    return(
        <div style = {Styles.general_boxStyle}>

            <h1 style = {localStyle.title}>HTML + CSS <br/> + JS</h1>
          <div style = {localStyle.imgMainCont}>
            <div style = {localStyle.imgCont}><Image src = {HTML_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
            <div style={localStyle.imgCont}><Image src = {CSS_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
          <br/>
          <div style = {localStyle.imgCont}><Image src = {JS_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
           </div>

            <h2 style = {localStyle.price}> $10.99</h2>
            <br/>
        </div>
    )
}

function ADVANCED_JS(){

    let localStyle = {
        price:Styles.prices,
        imgCont:{
            marginTop: "5rem",
            marginBottom: ".1rem",
        }, 
        img: Styles.img,
        
    }

    return(
        <div style = {Styles.general_boxStyle}>
            <h1>Advanced JS</h1>
            <div style = {localStyle.imgCont}> <ATOM_logo /><Image src = {JS_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
           <NextJS_logo />
            <h2 style = {localStyle.price}> $25</h2>

        </div>
    )
}

function PYTHON(){

    let localStyle = {
        price:Styles.prices,
        title:{
            marginBottom: "7rem"
        },
        img: Styles.img, 
        imgCont: {
            marginBottom:"8.2rem"
        }, 

    }

    return(
        <div style = {Styles.general_boxStyle}>
            <h1 style = {localStyle.title}>Python</h1>
            <div style = {localStyle.imgCont}><Image src = {PY_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
            <h2 style = {localStyle.price}> $10.99</h2>
            
        </div>
    )
}

function ADVANCED_PYTHON(){
    let localStyle = {
        price:Styles.prices,
        title:{
            marginBottom: "7rem"
        },
        img: Styles.img, 
        imgCont: {
            marginTop: "3rem", 
            marginBottom:"2rem"
        }, 

    }
    return(
        <div style = {Styles.general_boxStyle}>
            <h1>Advanced Python</h1>

            <div style = {localStyle.imgCont}><Image src = {PY_I} height = {localStyle.img.height} width = {localStyle.img.width} /></div>
            <Image src = {TENSORFLOW_logo} height = {100} width = {100}/>
            <h2 style = {localStyle.price}> $25</h2>
            
        </div>
    )
}

export default function Sales(){
    return(
        <div style = {Styles.main_container}>
         
            <HTML_CSS_JS />
            <ADVANCED_JS />
          
     
           
            <PYTHON />
            <ADVANCED_PYTHON />
     
        </div>
    )
}


const Styles = {
    main_container:{
        backgroundColor:"transparent",
        padding: "0em",
        marginTop: "2.5em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
    },

    subCont:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor:"transparent",
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
        margin: ".5rem"
    }, 

    general_boxStyle:{
        height: "30rem",
        width: "15rem",
        backgroundColor: "transparent",
        boxShadow: "0em 0em 2.5em rgb(0, 22, 82)",
        textAlign: "center",
        alignItems:"center",
        justifyContent: "center",
        padding: "1rem",
        fontSize: ".55rem",
        margin: "1rem",

    },


    prices:{
        fontSize: "1rem",
        textAlign: "center",
        marginTop: "3.7rem",
        padding: "1rem",
        backgroundColor: "green",
        cursor: "pointer",

    },

    
    img:{
        height: "100%",
        width: "100%",

      

       },

    imgCont:{
        height: "fit-content",
        width:"fit-content",
        backgroundColor:"transparent",
         margin: ".1rem",
         textAlign: "center",
         alignItems: "center",
         justifyContent: "center",


    },

}