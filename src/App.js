import React from 'react';
import ImageCard from './components/ImageCard';

function App() {

  return (
    <div className="App">
      <h3>Create a npm package using CRA - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <div className="mt-3">
        <ImageCard
          imageSrc="https://cdn.pixabay.com/photo/2015/11/07/11/08/cards-1030852_1280.jpg"
          title="Card Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </div>
  );
}

export default App;
