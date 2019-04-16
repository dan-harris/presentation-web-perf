import React from 'react';
import { Heading, Layout, Text } from 'spectacle';
import { HeaderWithSub } from '../components/header-with-sub';
import { ListWithEmphasis } from '../components/list';
import { ListItemWithEmphasis } from '../components/list-item';

/**
 * bunch of acronyms that probably barely make sense 🤫
 */
export const GlossaryOfTermsSlideContent = () => (
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
          <Heading size={4}>FCP</Heading>
          <Text>&#123; first contentful paint &#125;</Text>
        </ListItemWithEmphasis>
        <ListItemWithEmphasis>
          <Heading size={4}>FID</Heading>
          <Text>&#123; first input delay &#125;</Text>
        </ListItemWithEmphasis>
        <ListItemWithEmphasis>
          <Heading size={4}>BBQ</Heading>
          <Text>&#123; barbeque &#125;</Text>
        </ListItemWithEmphasis>
      </ListWithEmphasis>
    </Layout>
  </>
);
