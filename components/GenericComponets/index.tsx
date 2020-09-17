/* eslint-disable import/prefer-default-export */

import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  color?: string;
}

export const Title = ({ children, textAlign, color }: TitleProps) => (
  <h1
    style={{
      margin: 0,
      textAlign,
      color,
    }}
  >
    {children}
  </h1>
);

Title.defaultProps = {
  textAlign: 'start',
  color: 'black',
};

interface SubtitleProps {
  children: ReactNode;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  color?: string;
}

export const Subtitle = ({ children, textAlign, color }: SubtitleProps) => (
  <h2
    style={{
      margin: 0,
      textAlign,
      color,
    }}
  >
    {children}
  </h2>
);

Subtitle.defaultProps = {
  textAlign: 'start',
  color: 'black',
};

interface CaptionProps {
  children: ReactNode;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  color?: string;
}

export const Caption = ({ children, textAlign, color }: CaptionProps) => (
  <p
    style={{
      margin: 0,
      textAlign,
      color,
    }}
  >
    {children}
  </p>
);

Caption.defaultProps = {
  textAlign: 'center',
  color: 'black',
};
