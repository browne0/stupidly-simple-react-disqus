# stupidly-simple-react-disqus

## A stupidly simple React component for Disqus.

### Example

This is a simpler, and updated version of [react-disqus-thread](https://github.com/mzabriskie/react-disqus-thread)

This will also work out of the box with create-react-app!

I don't want to put it on npm, as there are a bunch of similar projects. So if you want something simple, feel free to *star* this repo, and then continue on to fork/download/clone this repo ;)

Cheers!

```js
import React, { Component } from 'react';
import DisqusThread from './DisqusThread';

class Example extends Component {
  render() {
    return (
        <DisqusThread
          shortname={null}
          basename="http://example.com"
          identifier="/hows-it-goin"
          title="How's It Goin?"
          url="http://example.com/hows-it-goin" />
    );
  }
}

export default Example;
```

It's that easy.

## License

MIT
