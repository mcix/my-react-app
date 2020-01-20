import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div className="something" id="12">
        <h1>Nice!</h1> 
        <Button></Button>

        <Button></Button>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.txt}</button>
  }
}

Button.propTypes = {
  txt: PropTypes.string
}

Button.defaultProps = {
  txt: 'button'
}

export default App