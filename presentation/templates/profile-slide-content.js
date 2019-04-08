import React from 'react';
import { Image, Layout } from 'spectacle';
import { images } from '../images';

export const ProfileSlideContent = () => (
  <Layout style={{ justifyContent: 'center' }}>
    <Image src={images.danharrisLogo} height={500} />
  </Layout>
);

export const ProfileSlideNotes = (
  <>
    <h3>it'sa me</h3>
    <ul>
      <li>in case you were confused </li>
      <li>my history</li>
      <li>work at taptu</li>
    </ul>
  </>
);
