import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quote: [] , hexa: ''};
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    let randomizer = Math.floor(Math.random() * 100);

    fetch(url).then(response => response.json())
      .then(data => {
        this.setState({ 
          quote: data.quotes[randomizer], 
          hexa: '#' + Math.floor(Math.random()*16777215).toString(16)
        });
      })
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    const color = {color: this.state.hexa};
    const bgColor = {backgroundColor:this.state.hexa};
    return (
      <div className="App animaBG" style={bgColor}>
        <div className='container'>
          <h1 >Quote Machine</h1>
          <div className='quoteBox' >
            <h2 className='animaCol' style={color}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="quote-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              {this.state.quote.quote}</h2>
            <h3 className='animaCol' style={color}>{this.state.quote.author}</h3>
          </div>
          <div className='buttons'>
            <a style={bgColor} className='btn' href="https://twitter.com/share" target='_new' >
              <svg style={color} className='twitter-svg animaCol' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
              </svg>
            </a>
            <button style={bgColor} className='btn animaBG' onClick={this.getQuote}>Next Quote</button>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
