import React from 'react';
import './App.css';
import Header from './Header.tsx';
import Main from './Main.tsx';

interface AppState {
  language: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      language: 'ru',
    };
  }

  handleLanguageChange = (language: string) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="app">
        <Header onLanguageChange={this.handleLanguageChange} />
        <Main language={this.state.language} />
      </div>
    );
  }
}

export default App;
