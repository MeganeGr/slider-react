import React, { Component } from 'react';
import './App.css';
const slides = [
  {
    url: 'https://images.unsplash.com/reserve/wi9yf7kTQxCNeY72cCY6_Images%20of%20Jenny%20Lace%20Plasticity%20Publish%20(4%20of%2025).jpg?auto=format&fit=crop&w=2250&q=80',
    title: 'Ma première image'
  }, {
    url: 'https://images.unsplash.com/photo-1483199095378-ce6e77cd1c0d?auto=format&fit=crop&w=2617&q=80',
    title: 'Ma deuxieme image'
  }, {
    url: 'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?auto=format&fit=crop&w=2250&q=80',
    title: 'Ma troisième image'
  }, {
    url: 'https://images.unsplash.com/photo-1486746290722-483e8f1e44d2?auto=format&fit=crop&w=1802&q=80',
    title: 'Ma quatrième image'
  },
]

class App extends Component {
  state = {
    position: 0
  }
  previousSlide = () => {
    const { position } = this.state
    this.setState({
      position: --position
    });
    if (position < 0)
      this.setState({
        position: slides.length - 1
      });
  }

  nextSlide = () => {
    this.setState({
      position: ++this.state.position
    })
    if (this.state.position > slides.length - 1) {
      this.setState({
        position: 0
      })
    }
  }
  render() {
    const newMargin = this.state.position * -400;
    return (
      <div className="App">
        <button onClick={this.previousSlide}>Left</button>
        <div className="slider-container">
          <ul style={{ marginLeft: newMargin }}>
            {slides.map((slide, i) => {
              return (
                <li key={i}><img src={slide.url} alt={slide.title} /></li>
              )
            })}
          </ul>
        </div>
        <button onClick={this.nextSlide}>Right</button>
      </div>
    );
  }
}

export default App;
