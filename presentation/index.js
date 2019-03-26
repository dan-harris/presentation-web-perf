import React from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { images } from './images';
import { AddComplexitySlideContent, AddComplexitySlideNotes } from './slides/add-complexity-slide-content';
import { AppMiniAppReminderSlideContent, AppMiniAppReminderSlideNotes } from './slides/app-mini-app-arch-reminder-slide-content';
import { ArchitecturePatternsRevisitedSlideContent } from './slides/architecture-patterns-revisited-slide-content';
import { ArchitecturePatternsSlideContent, ArchitecturePatternsSlideNotes } from './slides/architecture-patterns-slide-content';
import { ClientServerRangeSlideContent, ClientServerRangeSlideNotes } from './slides/client-server-range-slide-content';
import { ConnectingThePowerSlideContent, ConnectingThePowerSlideNotes } from './slides/connecting-the-power-slide-content';
import { CreatedAPizzaShopSlideContent, CreatedAPizzaShopSlideNotes } from './slides/created-a-pizza-shop-slide-content';
import { GiveMeABetterSolutionSlideContent, GiveMeABetterSolutionSlideNotes } from './slides/give-me-a-better-solution-slide-content';
import { HowToCombineInOneArchSlideContent, HowToCombineInOneArchSlideNotes } from './slides/how-to-combine-in-one-arch-slide-content';
import { IveBeenThinkingSlideContent, IveBeenThinkingSlideNotes } from './slides/ive-been-thinking-slide-content';
import { LetsDiscussStaticSlideContent, LetsDiscussStaticSlideNotes } from './slides/lets-discuss-static-slide-content';
import { LitElementSlideContent, LitElementSlideNotes } from './slides/lit-element-slide-content';
import { OnReflectionSlideContent, OnReflectionSlideNotes } from './slides/on-reflection-slide-content';
import { RazorTSArchSlideContent, RazorTSArchSlideNotes } from './slides/razor-ts-arch-slide-content';
import { SprinklesArchReminderSlideContent, SprinklesArchReminderSlideNotes } from './slides/sprinkles-arch-reminder-slide-content';
import { StaticArchReminderSlideContent, StaticArchReminderSlideNotes } from './slides/static-arch-reminder-slide-content';
import { TimeForSprinklesSlideContent, TimeForSprinklesSlideNotes } from './slides/time-for-sprinkles-slide-content';
import { TitleSlideContent, TitleSlideNotes } from './slides/title-slide-content';
import { WhyRazorPagesSlideContent, WhyRazorPagesSlideNotes } from './slides/why-razor-pages-slide-content';
import { WhyTypescriptSlideContent, WhyTypescriptSlideNotes } from './slides/why-typescript-slide-content';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { FrontendDevADLSlideContent } from './templates/frontend-dev-adl-slide-content';
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
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
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

        {/* SLIDE 4 */}
        <Slide bgColor="backgroundDefault" bgImage={images.genericBGDefault} bgSize="auto" notes={IveBeenThinkingSlideNotes}>
          <IveBeenThinkingSlideContent />
        </Slide>

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
