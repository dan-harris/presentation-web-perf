import React from 'react';
import { Anim, Appear, Heading } from 'spectacle';

export const FirstLoadAndAnimationSlideContent = () => (
  <>
    {/* TODO: make this a side-by-side image thingy for both (with fadein) */}
    <Heading size={1}>🤷‍♀ first load &amp; simple animations</Heading>
    <Anim
      fromStyle={{ opacity: 0.4, transform: 'translateX(-10%)' }}
      toStyle={[
        { opacity: 0.6, transform: 'translateX(-6.6%)' },
        { opacity: 0.8, transform: 'translateX(-3.3%)' },
        { opacity: 1, transform: 'translateX(0%)' }
      ]}
    >
      <div>
        <Heading size={3}>slide me in (Anim)</Heading>
      </div>
    </Anim>
    <Appear startValue={{ opacity: 0.4, transform: 'translateX(-10%)' }} endValue={{ opacity: 1, transform: 'translateX(0%)' }}>
      <div>
        <Heading size={3}>slide me in (Appear)</Heading>
      </div>
    </Appear>
  </>
);
