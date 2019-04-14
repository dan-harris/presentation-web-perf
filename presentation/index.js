import React from 'react';
import { Deck, Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { defaultBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { PlaceholderSlideContent } from './components/placeholder-slide-content';
import { PlaceholderSlideNotes } from './components/placeholder-slide-notes';
import { icons } from './icons';
import { images } from './images';
import TitleSlideNotes from './slide-notes/1-title.md';
import GlossaryOfTermsSlideNotes from './slide-notes/11-glossary-of-terms.md';
import ProfileSlideNotes from './slide-notes/2-profile.md';
import ProfileLinksSlideNotes from './slide-notes/3-profile-links.md';
import IveBeenThinkingSlideNotes from './slide-notes/4-ive-been-thinking.md';
import UberFastNotes from './slide-notes/5-uber-fast.md';
import ShowOfHandsSlideNotes from './slide-notes/7-show-of-hands.md';
import WhatPerfBasicsSlideNotes from './slide-notes/8-what-perf-basics.md';
import FirstLoadAndAnimationSlideNotes from './slide-notes/9-first-load-and-animations.md';
import { TitleSlideContent } from './slides/1-title';
import { GlossaryOfTermsSlideContent } from './slides/11-glossary-of-terms';
import { FirstLoadAndAnimationSlideContent } from './slides/9-first-load-and-animations';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileLinksSlideContent } from './templates/profile-links-slide-content';
import { ProfileSlideContent } from './templates/profile-slide-content';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

/**
 * reset CSS
 */
// @ts-ignore
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
        {/*
         * ======================
         * INTRO
         * ======================
         */}

        {/* SLIDE 1 */}
        <Slide {...defaultBG} notes={TitleSlideNotes}>
          <TitleSlideContent />
        </Slide>

        {/* SLIDE 2 */}
        <Slide {...highlightBG} notes={ProfileSlideNotes}>
          <ProfileSlideContent />
        </Slide>

        {/* SLIDE 3 */}
        <Slide {...defaultBG} notes={ProfileLinksSlideNotes}>
          <ProfileLinksSlideContent />
        </Slide>

        {/*
         * ======================
         * WHY PERF
         * ======================
         */}

        {/* SLIDE 4 */}
        <Slide {...defaultBG} notes={IveBeenThinkingSlideNotes}>
          <HeaderWithSub>why performance?</HeaderWithSub>
        </Slide>

        {/* SLIDE 5 */}
        <Slide {...defaultBG} notes={UberFastNotes}>
          <HeaderWithSub>uber fast</HeaderWithSub>
        </Slide>

        {/* SLIDE 6 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="kudos">mad twitter</HeaderWithSub>
        </Slide>

        {/* SLIDE 7 */}
        <Slide {...defaultBG} notes={ShowOfHandsSlideNotes}>
          <HeaderWithSub>show of hands</HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 8 */}
        <Slide {...highlightBG} notes={WhatPerfBasicsSlideNotes}>
          <HeaderWithSub>what perf basics?</HeaderWithSub>
        </Slide>

        {/* SLIDE 9 */}
        <Slide {...defaultBG} notes={FirstLoadAndAnimationSlideNotes}>
          <FirstLoadAndAnimationSlideContent />
        </Slide>

        {/*
         * ======================
         * TERMS & BACKGROUND
         * ======================
         */}

        {/* SLIDE 10 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="test time">whaddya know?</HeaderWithSub>
        </Slide>

        {/* SLIDE 11 */}
        <Slide {...defaultBG} notes={GlossaryOfTermsSlideNotes}>
          <GlossaryOfTermsSlideContent />
        </Slide>

        {/* SLIDE 12 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <PlaceholderSlideContent>browser flow</PlaceholderSlideContent>
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 30 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub icon={icons.lightBulb}>whaddya think?</HeaderWithSub>
        </Slide>

        {/* SLIDE 32 */}
        <Slide {...defaultBG}>
          <ProfileLinksSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
