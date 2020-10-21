import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";
import React from "react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        body,
        html,
        #root {
          height: 100%;
          width: 100%;
        }
        html {
          font-size: 62.5%;
          line-height: 1.2;
        }
        body {
          font-family: "Roboto", sans-serif;
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
}
