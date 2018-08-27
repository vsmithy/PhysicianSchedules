import React from 'react'

//local files and imports
import Grid from '../components/classicView/grid/Grid'
import Header from '../components/classicView/header/Header'
import RightMenus from '../components/classicView/rightMenus/RightMenus'

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