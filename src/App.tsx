import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Question from './Question';

interface AppState {
  current: number,
}

interface QuestionData {
  text: string,
  options?: Array<string>,
  next?: Array<number>
}

class App extends React.Component {
  public state: AppState = {
    current: 1,
  }

  private path: Array<number> = [1];

  public render() {
    const question = this.getQuestion(this.state.current);
    const options = question ? question.options : [];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
        <div className="Container">
          <div className="Content">
            <Question
              options={options}
              questionText={question.text}
              next={question.next}
              show={true}
              optionClickFn={(next) => this.handleClick(next)}
              restartClickFn={() => this.restart()}
            />
          </div>
        </div>
      </div>
    );
  }

  private questionData: { [key: string]: QuestionData } = data;

  private getQuestion(num: number): QuestionData {
    return this.questionData[`q${num}`];
  }

  private handleClick(next: number) {
    this.path.push(next);

    this.setState({
      current: next,
    });
  }

  private restart() {
    this.setState({
      current: 1,
    });
  }
}


export default App;
