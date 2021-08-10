/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import './../Burger/burger.css'
import Box from "./Box";
import Custom from "./Custom";
 class LDMajor extends Component{
     render(){
        return(
           
                <div className=" display">
                   
                    <Box/>
                   
                    <Custom/>
                    
                </div>
                
            
        )
     }
 }
 export default LDMajor