import React from 'react';
import { Deck, Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { HeaderSlideContent } from './components/header-slide-content';
import { PlaceholderSlideContent } from './components/placeholder-slide-content';
import { PlaceholderSlideNotes } from './components/placeholder-slide-notes';
import { icons } from './icons';
import { images } from './images';
import { defaultBG, highlightBG } from './slide-defaults';
import { GlossaryOfTermsSlideNotes } from './slide-notes/11-glossary-of-terms-slide-notes';
import { IveBeenThinkingSlideNotes } from './slide-notes/4-ive-been-thinking-slide-notes';
import { ShowOfHandsSlideNotes } from './slide-notes/5-show-of-hands-slide-notes';
import { WhatPerfBasicsSlideNotes } from './slide-notes/8-what-perf-basics-slide-notes';
import { FirstLoadAndAnimationSlideNotes } from './slide-notes/9-first-load-and-animations-slide-notes';
import { TitleSlideContent, TitleSlideNotes } from './slides/1-title-slide-content';
import { GlossaryOfTermsSlideContent } from './slides/11-glossary-of-terms-slide-content';
import { FirstLoadAndAnimationSlideContent } from './slides/9-first-load-and-animations-slide-content';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileLinksSlideContent, ProfileLinksSlideNotes } from './templates/profile-links-slide-content';
import { ProfileSlideContent, ProfileSlideNotes } from './templates/profile-slide-content';

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
        <Slide {...highlightBG} notes={IveBeenThinkingSlideNotes}>
          <HeaderSlideContent icon={icons.thinkingFace} right>
            performance... why?
          </HeaderSlideContent>
        </Slide>

        {/* SLIDE 5 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <PlaceholderSlideContent>really fast</PlaceholderSlideContent>
        </Slide>

        {/* SLIDE 6 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <PlaceholderSlideContent>mad twitter kudos</PlaceholderSlideContent>
        </Slide>

        {/* SLIDE 7 */}
        <Slide {...defaultBG} notes={ShowOfHandsSlideNotes}>
          <HeaderSlideContent icon={icons.raisedHand} right>
            show of hands...
          </HeaderSlideContent>
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 8 */}
        <Slide {...highlightBG} notes={WhatPerfBasicsSlideNotes}>
          <HeaderSlideContent icon={icons.highVoltage} right>
            what perf basics?
          </HeaderSlideContent>
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
          <HeaderSlideContent icon={icons.nerdFace}>test time</HeaderSlideContent>
        </Slide>

        {/* SLIDE 11 */}
        <Slide {...defaultBG} notes={GlossaryOfTermsSlideNotes}>
          <GlossaryOfTermsSlideContent />
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 30 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderSlideContent icon={icons.lightBulb}>whaddya think?</HeaderSlideContent>
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
