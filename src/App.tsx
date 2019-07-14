import React from 'react';
import './App.css';
import data from './data.json';
import Question from './Question';

interface AppState {
  current: number,
  questions: Array<JSX.Element>
}

interface QuestionData {
  text: string,
  options?: Array<string>,
  next?: Array<number>
}

class App extends React.Component {
  public state: AppState = {
    current: 1,
    questions: [],
  }

  public componentWillMount() {
    this.setState({
      questions: this.getQuestions(this.state.current)
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Do I need SCA?</div>
        </header>
        <div className="Container">
          <div className="Content">
            {this.state.questions.map((question) =>
              question.key === 'q' + this.state.current ? question : null
            )}
          </div>
        </div>
      </div>
    );
  }

  private questionData: { [key: string]: QuestionData } = data;

  private getQuestions(current: number): Array<JSX.Element> {
    return Object.keys(this.questionData).map((key, i) => {
      const question = this.questionData[key];
      return (
        <Question
          key={key}
          options={question.options}
          questionText={question.text}
          next={question.next}
          optionClickFn={(next) => this.handleClick(next)}
          restartClickFn={() => this.restart()}
        />
      )
    });
  }

  private handleClick(next: number) {
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
