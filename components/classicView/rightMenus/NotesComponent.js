import React, {Component}  from 'react'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'
import { getMonth } from '../../../helpfulFiles/dateStuff'

class NotesComponent extends Component {
  constructor(props){
    super(props)

    this.noteAreaRef = React.createRef()
    this.state = {
      currentNoteTxt: ''
    }//state
  }//constructor

  handleAddNote(e, monthName, theYear){
    this.props.addNote(this.state.currentNoteTxt, theYear, monthName)
    this.noteAreaRef.current.value = ''
    e.preventDefault()
  }//handleAddNote

  render() {
    return (
      <CurrSettingsContext.Consumer>
        {context => (
          <section className='notesComponent'>
            <h3 className="notesHeader">{getMonth(context.monthSelect)} Notes</h3>
            <div className="notesListArea">
              {
                this.props.notes.filter(item => item.year === context.yearSelect && item.month === getMonth(context.monthSelect)).map(noteItem => <div className="noteItem" key={noteItem.id}><span className="noteLabel">{noteItem.id}</span><span className="noteBody">{noteItem.comments}</span><i className="fas fa-times exitIcon noteCloseIcon" onClick={() => this.props.removeNote(noteItem.id)}></i></div>)
              }
            </div>
            <div className="noteFormArea">
              <form className="addNoteForm" onSubmit={event => this.handleAddNote(event, getMonth(context.monthSelect), context.yearSelect)}>
                <textarea 
                  name="newNoteArea" 
                  id="newNoteArea" 
                  cols="27" 
                  rows="6" 
                  placeholder="Add Another Note..."
                  ref={this.noteAreaRef}
                  onChange={() => this.setState({ currentNoteTxt: this.noteAreaRef.current.value})}
                ></textarea>
                <button className="noteSubmitButton" type="submit" disabled={this.state.currentNoteTxt === '' ? true : false}>
                  <i className="far fa-plus-square fa-2x"></i>
                </button>
              </form>
            </div>
          </section>
        )}
      </CurrSettingsContext.Consumer>
    )//return
  }//render
}//Component

export default NotesComponent