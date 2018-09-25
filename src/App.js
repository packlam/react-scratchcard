import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import ResetButton from './components/ResetButton';
import shuffle from 'lodash.shuffle';

class App extends Component {
  state = {
    motifs: [
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Scratchard</h1>
        <Card motifs={this.state.motifs} revealMotif={this.revealMotif}/>
        <ResetButton onClick={this.resetGame}/>
      </div>
    );
  }

  componentDidMount() {
    this.resetGame();
  }

  revealMotif = (event) => {
    if (this.state.motifs.filter(motif => motif.hasBeenClicked === true).length < 3) {
      const motifsCopy = [...this.state.motifs];
      motifsCopy[event.target.id].hasBeenClicked = true;
      this.setState({
        motifs: motifsCopy
      })
    }
  };

  resetGame = () => {
    const shuffledMotifs = shuffle(this.state.motifs);
    const resetMotifs = shuffledMotifs.map(motif => {
      motif.hasBeenClicked = false;
      return motif;
    })
    this.setState({
      motifs: resetMotifs
    });
  };
}

export default App;
