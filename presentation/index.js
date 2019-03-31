import React from 'react';
import { Deck, Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { HeaderSlideContent } from './components/header-slide-content';
import { PlaceholderSlideContent } from './components/placeholder-slide-content';
import { icons } from './icons';
import { images } from './images';
import { IveBeenThinkingSlideNotes } from './slide-notes/4-ive-been-thinking-slide-notes';
import { TitleSlideContent, TitleSlideNotes } from './slides/1-title-slide-content';
import { ShowOfHandsSlideContent, ShowOfHandsSlideNotes } from './slides/5-show-of-hands-slide-content';
import { WhatreWeLookingAtSlideContent, WhatreWeLookingAtSlideNotes } from './slides/6-whatre-we-looking-at-slide-content';
import { FirstLoadAndAnimationSlideContent, FirstLoadAndAnimationSlideNotes } from './slides/7-first-load-and-animations-slide-content';
import { GlossaryOfTermsIntroSlideContent, GlossaryOfTermsIntroSlideNotes } from './slides/8-glossary-of-terms-intro-slide-content';
import { GlossaryOfTermsSlideContent, GlossaryOfTermsSlideNotes } from './slides/9-glossary-of-terms-slide-content';
import { GiveMeABetterSolutionSlideContent, GiveMeABetterSolutionSlideNotes } from './slides/give-me-a-better-solution-slide-content';
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
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={TitleSlideNotes}
        >
          <TitleSlideContent />
        </Slide>

        {/* SLIDE 2 */}
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={ProfileSlideNotes}>
          <ProfileSlideContent />
        </Slide>

        {/* SLIDE 3 */}
        <Slide
          textColor="textAlternate"
          bgColor="backgroundAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={ProfileLinksSlideNotes}
        >
          <ProfileLinksSlideContent />
        </Slide>

        {/*
         * ======================
         * WHY PERF
         * ======================
         */}

        {/* SLIDE 4 */}
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={IveBeenThinkingSlideNotes}>
          <HeaderSlideContent icon={icons.thinkingFace} right>
            performance... why?
          </HeaderSlideContent>
        </Slide>

        {/* SLIDE 5 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={}
        >
          <PlaceholderSlideContent>really fast</PlaceholderSlideContent>
        </Slide>

        {/* SLIDE 6 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={}
        >
          <PlaceholderSlideContent>mad twitter kudos</PlaceholderSlideContent>
        </Slide>

        {/* SLIDE 7 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={ShowOfHandsSlideNotes}
        >
          <ShowOfHandsSlideContent />
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 6 */}
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={WhatreWeLookingAtSlideNotes}>
          <WhatreWeLookingAtSlideContent />
        </Slide>

        {/* SLIDE 7 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={FirstLoadAndAnimationSlideNotes}
        >
          <FirstLoadAndAnimationSlideContent />
        </Slide>

        {/*
         * ======================
         * TERMS & BACKGROUND
         * ======================
         */}

        {/* SLIDE 8 */}
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={GlossaryOfTermsIntroSlideNotes}>
          <GlossaryOfTermsIntroSlideContent />
        </Slide>

        {/* SLIDE 9 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={GlossaryOfTermsSlideNotes}
        >
          <GlossaryOfTermsSlideContent />
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 30 */}
        <Slide
          bgColor="backgroundAlternate"
          textColor="textAlternate"
          bgImage={images.genericBGAlternate}
          bgSize="auto"
          notes={GiveMeABetterSolutionSlideNotes}
        >
          <GiveMeABetterSolutionSlideContent />
        </Slide>

        {/* SLIDE 32 */}
        <Slide textColor="textAlternate" bgColor="backgroundAlternate" bgImage={images.genericBGAlternate} bgSize="auto">
          <ProfileLinksSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
