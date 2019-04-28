import React from 'react';
import Iframe from 'react-iframe';
import { Deck, Heading, Layout, Slide, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { defaultBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { HeadingWithEmphasis } from './components/heading-with-emphasis';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { PlaceholderSlideNotes } from './components/placeholder-slide-notes';
import { images } from './images';
import TitleSlideNotes from './slide-notes/1-title.md';
import GlossaryOfTermsSlideNotes from './slide-notes/11-glossary-of-terms.md';
import BrowserFlowSlideNotes from './slide-notes/12-browser-flow.md';
import BrowserFrameFlowSlideNotes from './slide-notes/13-browser-frame-flow.md';
import ProfileSlideNotes from './slide-notes/2-profile.md';
import ProfileLinksSlideNotes from './slide-notes/3-profile-links.md';
import IveBeenThinkingSlideNotes from './slide-notes/4-ive-been-thinking.md';
import ShowOfHandsSlideNotes from './slide-notes/7-show-of-hands.md';
import WhatPerfBasicsSlideNotes from './slide-notes/8-what-perf-basics.md';
import FirstLoadAndAnimationSlideNotes from './slide-notes/9-first-load-and-animations.md';
import { TitleSlideContent } from './slides/1-title';
import { BrowserFlow } from './slides/12-browser-flow';
import { BrowserFrameFlow } from './slides/13-browser-frame-flow';
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
        <Slide {...defaultBG} notes={ShowOfHandsSlideNotes}>
          <HeaderWithSub>show of hands</HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 6 */}
        <Slide {...highlightBG} notes={WhatPerfBasicsSlideNotes}>
          <HeaderWithSub>what perf basics?</HeaderWithSub>
        </Slide>

        {/* SLIDE 7 */}
        <Slide {...defaultBG} notes={FirstLoadAndAnimationSlideNotes}>
          <FirstLoadAndAnimationSlideContent />
        </Slide>

        {/*
         * ======================
         * TERMS & BACKGROUND
         * ======================
         */}

        {/* SLIDE 8 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="test time">whaddya know?</HeaderWithSub>
        </Slide>

        {/* SLIDE 9 */}
        <Slide {...defaultBG} notes={GlossaryOfTermsSlideNotes}>
          <>
            <HeaderWithSub>acronymtastic</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>TTR</Heading>
                  <Text>&#123; time to render &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>TTI</Heading>
                  <Text>&#123; time to interactive &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FOUC</Heading>
                  <Text>&#123; flash of unstyled content &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FP</Heading>
                  <Text>&#123; first paint &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FMP</Heading>
                  <Text>&#123; first meaningful paint &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FID</Heading>
                  <Text>&#123; first input delay &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/* SLIDE 10 */}
        <Slide {...defaultBG} notes={BrowserFlowSlideNotes}>
          <BrowserFlow />
        </Slide>

        {/* SLIDE 11 */}
        <Slide {...defaultBG} notes={BrowserFrameFlowSlideNotes}>
          <BrowserFrameFlow />
        </Slide>

        {/*
         * ======================
         * FIRST LOAD
         * ======================
         */}

        {/* SLIDE 12 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="loaded">getting content</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>Render Blocking CSS</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            link css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-1.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            link css 2
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-2.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            preload css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-3.html" width="1000px" height="560px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            critical css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-4.html" width="1000px" height="560px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            inline css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-5.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <>
            <HeaderWithSub>css wrapup</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>TTR</Heading>
                  <Text>&#123; time to render &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>TTI</Heading>
                  <Text>&#123; time to interactive &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FOUC</Heading>
                  <Text>&#123; flash of unstyled content &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FP</Heading>
                  <Text>&#123; first paint &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FMP</Heading>
                  <Text>&#123; first meaningful paint &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>FID</Heading>
                  <Text>&#123; first input delay &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="javascript">Render Blocking</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            script src
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-js-1.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            script async
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-js-2.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>First input delay</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            js parsing
          </HeadingWithEmphasis>
          <Iframe src="./examples/js-fid.html" width="1000px" height="600px" />
        </Slide>

        {/*
         * ======================
         * ANIMATIONS
         * ======================
         */}

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="animations">pretty looking</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>transform positioning</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <Iframe src="./examples/position-vs-transform.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub subheading="jankiness">animation frame</HeaderWithSub>
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <Iframe src="./examples/settimeout-vs-raf.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE ?? */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} style={{ padding: 0 }}>
          <Iframe src="./examples/css-vs-js.html" width="1000px" height="530px" />
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 30 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>thoughts?</HeaderWithSub>
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
