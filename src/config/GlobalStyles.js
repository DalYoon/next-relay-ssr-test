import { injectGlobal } from "@emotion/css"

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    box-sizing: border-box;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  
  body {
    background-color: #0d1117;
  }

  li {
    list-style-type: none;
  }
`