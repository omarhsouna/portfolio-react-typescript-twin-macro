/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const styles = css`
  position: relative;
  min-height: 1em;
  & h2 {
    color: #fff;
    font-size: 1em;
    position: absolute;
  }

  & h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #f9004d;
  }

  & h2:nth-child(2) {
    color: #f9004d;
    animation: animate 4s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;
function AnimatedText() {
  return (
    <div css={[styles]}>
      <h2>React.js Developer</h2>
      <h2>React.js Developer</h2>
    </div>
  );
}

export default AnimatedText;
