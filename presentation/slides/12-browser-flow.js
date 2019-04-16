import styled from '@emotion/styled';
import React from 'react';
import { Appear, Image } from 'spectacle';
import { fadeInCustom } from '../components/default-attrs/appear-defaults';
import { LayoutExpanded } from '../components/layout-expanded';
import { images } from '../images';

/**
 * image defaults
 */
const fileImageDefaults = {
  height: 150,
  width: 150
};

/**
 * file images
 */
const FileImage = styled(Image)`
  /* transition: transform 0.3s ease-in-out; */

  &:not(:last-of-type) {
    margin: 0 0 4rem;
  }
`;

/**
 * feel the flow 🌊
 */
export const BrowserFlow = () => (
  <>
    <LayoutExpanded>
      <div>
        <Appear startValue={{ transform: 'translateY(142%)' }} endValue={{ transform: 'translateY(0%)' }}>
          <FileImage src={images.fileHTML} {...fileImageDefaults} />
        </Appear>
        <FileImage src={images.fileCSS} {...fileImageDefaults} />
        <Appear startValue={{ transform: 'translateY(-142%)' }} endValue={{ transform: 'translateY(0%)' }}>
          <FileImage src={images.fileJS} {...fileImageDefaults} />
        </Appear>
      </div>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.share} />
      </Appear>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.triangle} />
      </Appear>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.arrowSimpleRight} />
      </Appear>
      <Appear {...fadeInCustom(0.4)}>
        <Image src={images.brush} />
      </Appear>
    </LayoutExpanded>
  </>
);

/* transform: translateY(142%); */
