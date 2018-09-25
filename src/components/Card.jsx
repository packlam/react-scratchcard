import React from 'react';
import Motif from './Motif'

const Card = ({ motifs, revealMotif }) => {
  return (
    <div className="container grid">
      {motifs.map((motif, idx) => {
        return <Motif id={idx} key={idx} onClick={revealMotif} motif={motif} allMotifs={motifs}/>
      })}
    </div>
  );
};

export default Card;