/* eslint-disable react/prop-types */
import React from 'react';
import { Heading } from 'spectacle';
import { HeadingImage } from './heading-image';

export const HeaderSlideContent = props => (
  <Heading size={1}>
    {(props.left || !props.right) && <HeadingImage src={props.icon} {...props.animate} />}
    {(props.left || !props.right) && ' '}
    {props.children}
    {props.right && ' '}
    {props.right && <HeadingImage src={props.icon} {...props.animate} />}
  </Heading>
);
