import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from '../components/heading-image';
import { icons } from '../icons';

export const WhatreWeLookingAtSlideContent = () => (
  <>
    <Heading size={1}>
      <HeadingImage src={icons.highVoltage} />
      &nbsp;what perf basics?
    </Heading>
  </>
);

export const WhatreWeLookingAtSlideNotes = (
  <>
    <ul>
      <li>with previous context in mind</li>
      <li>what are we actually looking at today?</li>
      <li>well a couple off things, that might seem simple...</li>
      <li>but, if you can get them right, are pretty awesome</li>
    </ul>
  </>
);
