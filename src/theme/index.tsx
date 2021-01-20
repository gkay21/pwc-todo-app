import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { DefaultThemeColorConfig, DefaultThemeFontConfig } from "./default";

interface IProps {
  children: React.ReactNode;
}

export type ThemeColorConfig = {
  Black: string;
  White: string;
  LightGrey: string;
  Grey: string;
  DarkGrey: string;
  Silver: string;
  Navy: string;
  Blue: string;
  Aqua: string;
  Teal: string;
  Olive: string;
  Green: string;
  Lime: string;
  Yellow: string;
  Orange: string;
  Pink: string;
  Red: string;
  Burgundy: string;
  Maroon: string;
  Fuchsia: string;
  Purple: string;
};

export type ThemeFontConfig = {
  System: string;
  Header: string;
  Body: string;
  Emphasis: string;
};

type ThemeDimensions = {
  maxWidth: string;
  mainWidth: string;
  contentWidth: string;
};

type MediaQueriesConfig = {
  mobile: string;
  desktop: string;
};

type ThemeConfig = {
  color: ThemeColorConfig;
  font: ThemeFontConfig;
  dimensions: ThemeDimensions;
  mediaQueries: MediaQueriesConfig;
};

export type ThemeProviderProps = {
  theme: ThemeConfig;
};

const GlobalStyle = createGlobalStyle<ThemeProviderProps>`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway|Great+Vibes&display=swap');
    body {
      overflow-x: hidden;
    }
    input, textarea, button, select, a {
        -webkit-tap-highlight-color: transparent;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(p) => p.theme.color.LightGrey};
`;

const Theme = ({ children }: IProps) => {
  const theme = {
    color: DefaultThemeColorConfig,
    font: DefaultThemeFontConfig,
    mediaQueries: {
      mobile: "(max-width: 975px)",
      desktop: "(min-width: 975px)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Theme;
