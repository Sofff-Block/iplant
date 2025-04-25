import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --danger: #c63f38;
    --highlight: #fd7e14;
    --highlight-light: #ffa94d;
    --primary: #7aac5d;
    --secondary: #28492f;
    --surface: #f3e7ce;
    --surface-light: #fbf7ef;
    --on-surface: #041a08;
    --icon-disabled:rgba(4, 26, 8, 0.15);
  }

  body {
    background-color: var(--surface);
    color: var(--on-surface);
    margin: 0;
    font-family: system-ui;
    padding: 20px;
    padding-bottom: 100px;
  }

  main {
display: flex;
justify-content: center;
  }

  h1 {
      font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.3rem;
    font-family: monospace;
  }
`;
