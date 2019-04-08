import React from 'react';
import { Appear, Fill, Heading, Image, Layout } from 'spectacle';
import { fadeIn } from '../components/default-attrs/appear-defaults';
import { images } from '../images';

export const FastMadTwitterKudosSlideContent = () => (
  <Layout>
    <Fill>
      <Appear {...fadeIn}>
        <div>
          <Heading size={3}>uber fast</Heading>
          <br />
          <br />
          <Image src={images.fly} height={200} />
        </div>
      </Appear>
    </Fill>
    <Fill>
      <Appear {...fadeIn}>
        <div>
          <Heading size={3}>mad kudos</Heading>
          <br />
          <br />
          <Image src={images.socialMedia} height={200} width={175} />
        </div>
      </Appear>
    </Fill>
  </Layout>
);
