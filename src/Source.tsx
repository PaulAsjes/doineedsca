import * as React from 'react';
import './Source.css';

interface SourceProps {
  text: string;
  url: string;
}

class Source extends React.Component<SourceProps> {
  public render() {
    const { text, url } = this.props;

    return (
      <div className="Source">
        <a target="_blank" rel="noopener noreferrer" href={url}>{text}</a>
      </div>
    );
  }
}

export default Source;
