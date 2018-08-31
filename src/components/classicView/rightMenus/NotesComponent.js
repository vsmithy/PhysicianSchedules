import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'
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
    const monthName = getMonth(this.props.currentViewProperties.monthSelect)
    const theYear = this.props.currentViewProperties.yearSelect
    
    return (
      <section className='notesComponent'>
        <h3 className="notesHeader">{monthName} Notes</h3>
        <div className="notesListArea">
          {
            this.props.notes.filter(item => item.year === theYear && item.month === monthName).map(noteItem => <div className="noteItem" key={noteItem.id}><span className="noteLabel">{noteItem.id}</span><span className="noteBody">{noteItem.comments}</span><i className="fas fa-times exitIcon noteCloseIcon" onClick={() => this.props.removeNote(noteItem.id)}></i></div>)
          }
        </div>
        <div className="noteFormArea">
          <form className="addNoteForm" onSubmit={event => this.handleAddNote(event, monthName, theYear)}>
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
    )//return
  }//render
}//Component

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  notes: state.notes, 
 })//mapStateToProps
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(NotesComponent)