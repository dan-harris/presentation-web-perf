import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const GlossaryOfTermsIntroSlideContent = () => (
  <>
    <Heading size={1}>
      <HeadingImage src={icons.nerdFace} />
      &nbsp;test time
    </Heading>
  </>
);

export const GlossaryOfTermsIntroSlideNotes = (
  <>
    <ul>
      <li>bleh</li>
    </ul>
  </>
);
