import *  as React from 'react';
import Option from './Option';
import RestartButton from './RestartButton';
import './Question.css';

interface Props {
  options?: Array<string>;
  questionText: string;
  next?: Array<number>;
  optionClickFn(next: number): void;
  restartClickFn(): void;
}

class Question extends React.Component<Props> {
  public render() {
    const {
      options = [],
      questionText,
      optionClickFn,
      restartClickFn,
      next = [],
    } = this.props;

    const isResult = options.length < 1;

    return (
      <div className={`Question slideIn`} >
        {isResult ?
          <span>
            <div className="Result">
              {questionText}
            </div>
          </span>
          :
          <div>{questionText}</div>
          }
        <div className="Options">
          {options.map((option: string, index: number) => {
            return <Option text={option} key={index} onClick={(e) => optionClickFn(next[index])}/>;
          })}
        </div>
        {
          isResult ?
          <RestartButton onClick={() => restartClickFn()} />
          : null
        }
      </div>
    );
  }
}

export default Question;
