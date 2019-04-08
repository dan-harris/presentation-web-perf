/* eslint-disable react/prop-types */
import React from 'react';
import { Heading } from 'spectacle';
import { SubHeading } from './sub-heading';

export const HeaderSlideContent = props => (
  <>
    <Heading size={2}>{props.children}</Heading>
    <SubHeading />
  </>
);
