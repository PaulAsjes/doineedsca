import * as React from 'react';
import './Option.css';

interface Props {
  text: string;
  onClick(event: {}): void;
}

class Option extends React.Component<Props> {

  public render() {
    return (
      <div className="Option">
        <div className="Option-label" onClick={this.props.onClick}>
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default Option;