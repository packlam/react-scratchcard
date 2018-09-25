import React from 'react';

const Motif = ({ id, onClick, motif, allMotifs }) => {
  const clickedMotifs = allMotifs.filter(motif => motif.hasBeenClicked);
  const backgroundColor = (clickedMotifs.length < 3)
    ? 'white'
    : (clickedMotifs.every(motif => motif.emoji === '😀'))
    ? 'lightgreen'
    : 'lightpink'
  return (
    <div className="motif" id={id} onClick={onClick} style={{ backgroundColor: motif.hasBeenClicked ? backgroundColor : 'white' }}>
      <span role="img" aria-label="question mark">{motif.hasBeenClicked ? motif.emoji : '❓'}</span>
    </div>
  );
}

export default Motif;