import React from 'react';
import { Heading, Layout } from 'spectacle';
import { SubHeading } from '../components/sub-heading';

export const ProfileLinksSlideContent = () => (
  <>
    <Layout style={{ justifyContent: 'center', flexDirection: 'column' }}>
      <Heading size={2}>please heckle me</Heading>
      <SubHeading size={3}>on le socials</SubHeading>
    </Layout>
  </>
);

export const ProfileLinksSlideNotes = (
  <>
    <h3>say hello 👋</h3>
    <ul>
      <li> be sure to heckle me on twitter </li>
      <li> check out my articles on medium </li>
      <li> judge my shitty code on github 😬 </li>
      <li> consequently all code for this example is up there (links will go out after the talk)</li>
    </ul>
  </>
);
