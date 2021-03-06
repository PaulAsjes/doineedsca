import * as React from 'react';
import './Link.css';

interface LinkProps {
  text: string;
  url: string;
}

class Link extends React.Component<LinkProps> {
  public render() {
    const { text, url } = this.props;

    return (
      <div className="Link">
        <a target="_blank" rel="noopener noreferrer" href={url}>{text}</a>
      </div>
    );
  }
}

export default Link;
