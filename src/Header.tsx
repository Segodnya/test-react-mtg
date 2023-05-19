import React, { Component } from 'react';

interface HeaderProps {
  onLanguageChange: (language: string) => void;
}

interface HeaderState {
  time: string;
  language: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  private interval: any;

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      language: 'ru',
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.currentTarget.value;
    this.setState({ language });
    this.props.onLanguageChange(language);
  };

  render() {
    return (
      <header className="header">
        <img src="https://example.com/logo.png" alt="Logo" />
        <select className="language-select" onChange={this.handleLanguageChange} value={this.state.language}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
        <div className="watch">{this.state.time}</div>
      </header>
    );
  }
}

export default Header;
