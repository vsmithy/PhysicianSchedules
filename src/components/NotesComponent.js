import React, {Component}  from 'react'

export default class NotesComponent extends Component {
  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  // componentDidMount(){console.log('notes component did mount')}

  // //updating
  // //static getDerivedStateFromProps(nextProps, prevState)
  // //shouldComponentUpdate(nextProps, nextState)
  // //getSnapshotBeforeUpdate(prevProps, prevState)
  // componentDidUpdate(prevProps, prevState, snapshot){console.log('notes component did update')}

  // //unmounting
  // componentWillUnmount(){console.log('notes component will unmount')}

  // //errorHandling
  // componentDidCatch(error, info){'notes component caught an error'}
  /*******************************************************************/

  render(){
    const { viewHeight } = this.props

    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }

    return (
      <section className='notesComponent' style={defaultStyle}>
        I am the header text of notes componentn!!
      </section>
    )//return
  }//render
}//Component



        {/* <div role="presentation" style="background-color: lightblue;"  class="notesComponent">crud notes for this month Voluptate ea commodo fugiat exercitation cupidatat sit veniam id ea duis officia in dolor. Ullamco irure ex mollit minim exercitation sunt laboris magna velit pariatur.</div> */}