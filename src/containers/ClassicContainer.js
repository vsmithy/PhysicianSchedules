import React from 'react'

//the subcomponents
import Grid from '../components/classicView/Grid'
import Header from '../components/classicView/Header'
import RightMenus from '../components/classicView/RightMenus'

 function ClassicContainer(){
    return (
      <div>
        <Header />
        <main>
          <Grid />
          <RightMenus />
        </main>
      </div>
    )//return
}//ClassicContainer Component
 
 export default ClassicContainer