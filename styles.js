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
    --primary: #7aac5d;
    --secondary: #28492f;
    --surface: #f3e7ce;
    --surface-light: #fbf7ef;
    --on-surface: #041a08;
  }

  body {
    background-color: var(--surface);
    color: var(--on-surface);
    margin: 0;
    font-family: system-ui;
    padding: 20px;
    padding-bottom: 100px;
  }
`;
