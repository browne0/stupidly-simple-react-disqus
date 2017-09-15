import React, { Component } from 'react';
import DisqusThread from './components/DisqusThread';

class Example extends Component {
  render() {
    return (
        <DisqusThread
          shortname={null}
          basename="http://example.com"
          identifier="/hows-it-goin"
          title="How's It Goin?"
          url="http://example.com/hows-it-goin"
          >
        </DisqusThread>
    );
  }
}

export default Example;
