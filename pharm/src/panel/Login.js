import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from './Login.module.css'

export default class RouterA extends Component {
    render() {
        return (
            <div className={style.body}> 
        <div class={style.card} data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
  <div class={style.welcome}>
      
  <div className={style.box}>
        <h2>Login</h2>
        <form action="">
            <div className={style.inputBox}>
                <input type="text" required=""/>
                <label for="">Ismingiz:</label>
            </div>
            <div className={style.inputBox}>
                <input type="password" required=""/>
                <label for="">Parolingiz:</label>
            </div>
          <Button variand='danger'>
<NavLink to="/panel" >Submit</NavLink>

          </Button>
        </form>
    </div>


  </div>
  
  </div>  
</div>
        )
    }
}
