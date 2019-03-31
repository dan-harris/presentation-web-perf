import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const ShowOfHandsSlideContent = () => (
  <>
    <Heading size={1}>
      show of hands...&nbsp;
      <HeadingImage src={icons.raisedHand} />
    </Heading>
  </>
);

export const ShowOfHandsSlideNotes = (
  <>
    <h3>Not an attempt to be 'smarter-art-thou'</h3>
    <ul>
      <li>gauge level we're all at</li>
      <li>somewhat tailor some of my next slides</li>
      <li>just interested anyway 🤷‍♀️</li>
    </ul>
    <h3>Confidence with Web</h3>
    <ul>
      <li>e.g. building some HTML/templates + CSS</li>
      <li>loading assets .etc</li>
    </ul>
    <h3>Confidence with JS</h3>
    <ul>
      <li>browser event loop?</li>
      <li>JS tasks .etc</li>
    </ul>
  </>
);
