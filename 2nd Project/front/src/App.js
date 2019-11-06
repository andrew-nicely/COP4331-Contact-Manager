import React, { Component } from 'react';
import './App.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code = `function add(a, b) {
  return a + b;
}
`;

class App extends Component {
  state = { code };

  render() {
    return (
      <div style={{margin: '10px'}}>
      <h1>Question 1</h1>
      <p>Q: lololoolollol</p>
      <div>
        <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          width: "800px", margin: '10px', borderColor: 'black', borderWidth:'2', borderStyle: 'solid',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}/>
      </div>
      </div>
      
    );
  }
}

export default App;
