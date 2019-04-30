import React from 'react';
import Iframe from 'react-iframe';
import { Appear, Code, Deck, Fill, Fit, Heading, Image, Layout, Slide, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { fadeInCustom } from './components/default-attrs/appear-defaults';
import { defaultBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { HeadingWithEmphasis } from './components/heading-with-emphasis';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { PlaceholderSlideNotes } from './components/placeholder-slide-notes';
import { images } from './images';
import TitleSlideNotes from './slide-notes/1-title.md';
import GettingContentLoadedSlideNotes from './slide-notes/10-loading-content.md';
import RenderBlockingCSSSlideNotes from './slide-notes/11-render-blocking-css.md';
import LinkCSSSlideNotes from './slide-notes/12-link-css.md';
import LinkCSS2SlideNotes from './slide-notes/13-link-css-2.md';
import PreloadCSSSlideNotes from './slide-notes/14-preload-css.md';
import InlineCSSSlideNotes from './slide-notes/15-inline-css.md';
import CriticalSlideNotes from './slide-notes/16-critical-css.md';
import CSSWrapupSlideNotes from './slide-notes/17-css-wrapup.md';
import SlideNotes18 from './slide-notes/18-render-blocking-js.md';
import SlideNotes19 from './slide-notes/19-script-src.md';
import ProfileSlideNotes from './slide-notes/2-profile.md';
import SlideNotes20 from './slide-notes/20-script-async.md';
import SlideNotes21 from './slide-notes/21-fid.md';
import SlideNotes22 from './slide-notes/22-js-parsing.md';
import SlideNotes23 from './slide-notes/23-js-wrapup.md';
import SlideNotes24 from './slide-notes/24.md';
import SlideNotes25 from './slide-notes/25.md';
import SlideNotes26 from './slide-notes/26.md';
import SlideNotes28 from './slide-notes/28.md';
import SlideNotes29 from './slide-notes/29.md';
import ProfileLinksSlideNotes from './slide-notes/3-profile-links.md';
import SlideNotes31 from './slide-notes/31.md';
import SlideNotes33 from './slide-notes/33.md';
import SlideNotes34 from './slide-notes/34.md';
import IveBeenThinkingSlideNotes from './slide-notes/4-ive-been-thinking.md';
import WhatPerfBasicsSlideNotes from './slide-notes/5-what-perf-basics.md';
import BackgroundSlideNotes from './slide-notes/6-background.md';
import GlossaryOfTermsSlideNotes from './slide-notes/7-glossary-of-terms.md';
import BrowserFlowSlideNotes from './slide-notes/8-browser-flow.md';
import BrowserFrameFlowSlideNotes from './slide-notes/9-browser-frame-flow.md';
import { TitleSlideContent } from './slides/1-title';
import { BrowserFlow } from './slides/12-browser-flow';
import { BrowserFrameFlow } from './slides/13-browser-frame-flow';
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

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 5 */}
        <Slide {...highlightBG} notes={WhatPerfBasicsSlideNotes}>
          <Layout style={{ padding: '0 8rem' }}>
            <Appear {...fadeInCustom(0.3)}>
              <Fill>
                <Image src={images.browserLoad} />
                <Text>first load</Text>
              </Fill>
            </Appear>
            <Appear {...fadeInCustom(0.3)}>
              <Fit style={{ display: 'flex', alignItems: 'center', paddingBottom: '2.5rem' }}>
                <HeadingWithEmphasis size={4}>+</HeadingWithEmphasis>
              </Fit>
            </Appear>
            <Appear {...fadeInCustom(0.3)}>
              <Fill>
                <Image src={images.browserAnimate} />
                <Text>animations</Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>

        {/*
         * ======================
         * TERMS & BACKGROUND
         * ======================
         */}

        {/* SLIDE 6 */}
        <Slide {...highlightBG} notes={BackgroundSlideNotes}>
          <HeaderWithSub subheading="test time">background</HeaderWithSub>
        </Slide>

        {/* SLIDE 7 */}
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

        {/* SLIDE 8 */}
        <Slide {...defaultBG} notes={BrowserFlowSlideNotes}>
          <BrowserFlow />
        </Slide>

        {/* SLIDE 9 */}
        <Slide {...defaultBG} notes={BrowserFrameFlowSlideNotes}>
          <BrowserFrameFlow />
        </Slide>

        {/*
         * ======================
         * FIRST LOAD
         * ======================
         */}

        {/* SLIDE 10 */}
        <Slide {...highlightBG} notes={GettingContentLoadedSlideNotes}>
          <HeaderWithSub subheading="loaded">getting content</HeaderWithSub>
        </Slide>

        {/* SLIDE 11 */}
        <Slide {...highlightBG} notes={RenderBlockingCSSSlideNotes}>
          <HeaderWithSub>Render Blocking CSS</HeaderWithSub>
        </Slide>

        {/* SLIDE 12 */}
        <Slide {...highlightBG} notes={LinkCSSSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            link css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-1.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE 13 */}
        <Slide {...highlightBG} notes={LinkCSS2SlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            link css 2
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-2.html" width="1000px" height="530px" />
        </Slide>

        {/* SLIDE 14 */}
        <Slide {...highlightBG} notes={PreloadCSSSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            preload css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-3.html" width="1000px" height="560px" />
        </Slide>

        {/* SLIDE 15 */}
        <Slide {...highlightBG} notes={CriticalSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            critical css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-4.html" width="1000px" height="560px" />
        </Slide>

        {/* SLIDE 16 */}
        <Slide {...highlightBG} notes={InlineCSSSlideNotes} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right' }}>
            inline css
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-css-5.html" width="1000px" height="610px" />
        </Slide>

        {/* SLIDE 17 */}
        <Slide {...defaultBG} notes={CSSWrapupSlideNotes}>
          <>
            <HeaderWithSub>css wrapup</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>critical first</Heading>
                  <Text>&#123; above the fold &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>code splitting</Heading>
                  <Text>&#123; flexible as code changes &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>inline styles</Heading>
                  <Text>&#123; where appropriate &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>gradual load</Heading>
                  <Text>&#123; smooth &amp; avoid fouc &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/* SLIDE 18 */}
        <Slide {...highlightBG} notes={SlideNotes18}>
          <HeaderWithSub subheading="javascript">Render Blocking</HeaderWithSub>
        </Slide>

        {/* SLIDE 19 */}
        <Slide {...highlightBG} notes={SlideNotes19} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            script src
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-js-1.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE 20 */}
        <Slide {...highlightBG} notes={SlideNotes20} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            script async
          </HeadingWithEmphasis>
          <Iframe src="./examples/render-blocking-js-2.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE 21 */}
        <Slide {...highlightBG} notes={SlideNotes21}>
          <HeaderWithSub>First input delay</HeaderWithSub>
        </Slide>

        {/* SLIDE 22 */}
        <Slide {...highlightBG} notes={SlideNotes22} className="external-frame">
          <HeadingWithEmphasis size={3} style={{ textAlign: 'right', lineHeight: '2em' }}>
            js parsing
          </HeadingWithEmphasis>
          <Iframe src="./examples/js-fid.html" width="1000px" height="600px" />
        </Slide>

        {/* SLIDE 23 */}
        <Slide {...defaultBG} notes={SlideNotes23}>
          <>
            <HeaderWithSub>js wrapup</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>critical js first</Heading>
                  <Text>&#123; above the fold &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>code splitting</Heading>
                  <Text>&#123; again - surprise &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>inline scripts</Heading>
                  <Text>&#123; where appropriate &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>gradual load</Heading>
                  <Text>&#123; smooth &amp; avoid blocking &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/*
         * ======================
         * ANIMATIONS
         * ======================
         */}

        {/* SLIDE 24 */}
        <Slide {...highlightBG} notes={SlideNotes24}>
          <HeaderWithSub subheading="animations">pretty looking</HeaderWithSub>
        </Slide>

        {/* SLIDE 25 */}
        <Slide {...defaultBG} notes={SlideNotes25}>
          <BrowserFrameFlow />
        </Slide>

        {/* SLIDE 26 */}
        <Slide {...highlightBG} notes={SlideNotes26}>
          <HeaderWithSub>transform positioning</HeaderWithSub>
        </Slide>

        {/* SLIDE 27 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <div style={{ textAlign: 'left', width: '490px', margin: 'auto', lineHeight: '1.3' }}>
            <Code>.animate-element &#123; </Code>
            <br />
            <Code>&nbsp;&nbsp;transform:</Code>
            <br />
            <Code>&nbsp;&nbsp;&nbsp;translate(0px, 10px);</Code>
            <br />
            <Code> &#125;</Code>
          </div>
          <HeaderWithSub subheading="vs" />
          <div style={{ textAlign: 'left', width: '490px', margin: 'auto', lineHeight: '1.3' }}>
            <Code>.animate-element &#123; </Code>
            <br />
            <Code>&nbsp;&nbsp;position: absolute;</Code>
            <br />
            <Code>&nbsp;&nbsp;left: 10px;</Code>
            <br />
            <Code> &#125;</Code>
          </div>
        </Slide>

        {/* SLIDE 28 */}
        <Slide {...highlightBG} notes={SlideNotes28} className="external-frame">
          <Iframe src="./examples/position-vs-transform.html" width="1000px" height="540px" />
        </Slide>

        {/* SLIDE 29 */}
        <Slide {...highlightBG} notes={SlideNotes29}>
          <HeaderWithSub subheading="jankiness">animation frame</HeaderWithSub>
        </Slide>

        {/* SLIDE 30 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <div style={{ textAlign: 'left', width: '750px', margin: 'auto', lineHeight: '1.3' }}>
            <Code>setTimeout(() =&gt; animate(), 16)</Code>
          </div>
          <HeaderWithSub subheading="vs" />
          <div style={{ textAlign: 'left', width: '750px', margin: 'auto', lineHeight: '1.3' }}>
            <Code>requestAnimationFrame(() =&gt; animate())</Code>
          </div>
        </Slide>

        {/* SLIDE 31 */}
        <Slide {...highlightBG} notes={SlideNotes31} className="external-frame">
          <Iframe src="./examples/settimeout-vs-raf.html" width="1000px" height="540px" />
        </Slide>

        {/* SLIDE 32 */}
        <Slide {...highlightBG} notes={PlaceholderSlideNotes} className="external-frame">
          <Code>&lt;my-element class="animate-element" /&gt;</Code>
          <HeaderWithSub subheading="vs" />
          <Code>requestAnimationFrame(() =&gt; animate())</Code>
        </Slide>

        {/* SLIDE 33 */}
        <Slide {...highlightBG} notes={SlideNotes33} style={{ padding: 0 }}>
          <Iframe src="./examples/css-vs-js.html" width="1000px" height="540px" />
        </Slide>

        {/* SLIDE 34 */}
        <Slide {...defaultBG} notes={SlideNotes34}>
          <>
            <HeaderWithSub>animations wrapup</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>try using</Heading>
                  <Text>&#123; opacity / transform &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>avoid layout</Heading>
                  <Text>&#123; querying properties &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>raf</Heading>
                  <Text>&#123; use where appropriate &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>Don't go overboard</Heading>
                  <Text>&#123; there are overheads &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 35 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>thoughts?</HeaderWithSub>
        </Slide>

        {/* SLIDE 36 */}
        <Slide {...defaultBG}>
          <ProfileLinksSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
