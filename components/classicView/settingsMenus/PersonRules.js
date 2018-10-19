import React, { Component } from 'react'

class PersonRules extends Component{
  render(){
    return(
      <div className="managePeopleItem">Rules:
        <div className="ruleItem">
          <p>I am the rule text</p>
          <button>edit</button>
          <button>delete</button>
        </div>
        <div className="ruleItem">
          <p>I am the rule text</p>
          <button>edit</button>
          <button>delete</button>
        </div>
        <input /><button>new Rule</button>
      </div>
    )//return
  }//render
}//component

export default PersonRules