import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noteText :'',
      notes:[],
    }
  }
  updateNoteText(noteText){
    this.setState({ noteText:noteText.target.value})
    //console.log(this.state.noteText);
  }
  handlekeyPress =  (event) => {
    if(event.key === 'Enter'){
//When enter text will push to
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText: ''});
    }
  }
  deleteNote(index){
let  notesArr = this.state.notes;
notesArr.splice(index, 1);
this.setState({notes: notesArr})
  }
  addNote(){
    if(this.state.noteText ===''){
      return
    }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
    this.textInput.focus();
  }
  render() {
    let notes = this.state.notes.map((val, key) =>{
      return <Notes key={key} text={val} 
      deleteMethod={ () => this.deleteNote(key)} />
    })
    return (
      <div className="App">
        <div className="header">React Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        <input className="textInput"
         type="text" 
         ref={((input) => {this.textInput = input})} 
         value={this.state.notText} 
         onChange = {noteText => this.updateNoteText(noteText)}
         onKeyPress = {this.handlekeyPress.bind(this)}
         />
      </div>
    );
  }
}

export default App;
