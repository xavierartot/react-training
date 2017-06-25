var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.Component {
  constructor(xavier){
    this.xavier = xavier
  }
  
  render() {
    return (
      <div>
        hello world
      </div>
    )
  }
}

ReactDom.render( 
    <App /> , 
    document.querySelector('.myApp') 
);
