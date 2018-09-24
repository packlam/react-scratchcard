import React from 'react';
import Motif from './Motif'
import shuffle from 'lodash.shuffle';

class Card extends React.Component {
  state = {
    motifs: [
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '😀', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
      {emoji: '🙁', hasBeenClicked: false},
    ]
  }

  render() {
    return (
      <div className="container grid">
        {this.state.motifs.map((motif, idx) => {
          return <Motif id={idx} key={idx} onClick={this.revealMotif} motif={motif} allMotifs={this.state.motifs}/>
        })}
      </div>
    );
  }

  componentDidMount() {
    const shuffledMotifs = shuffle(this.state.motifs);
    console.log(shuffledMotifs) // delete this later
    this.setState({
      motifs: shuffledMotifs
    })
  }

  revealMotif = (event) => {
    if (this.state.motifs.filter(motif => motif.hasBeenClicked === true).length < 3) {
      const motifsCopy = [...this.state.motifs];
      motifsCopy[event.target.id].hasBeenClicked = true;
      this.setState({
        motifs: motifsCopy
      }, () => {
        // console.log(this.state.motifs);
        // if (this.state.clickCount === 3) this.checkWinner();
      })
    }
  };

  checkWinner = () => {
    if (this.state.clickedBoxes.every(motif => this.state.motifs[motif] === '😀')) {
      console.log(this)
    } else {
      console.log('loser!')
    }
  };
}

export default Card;