<html lang="en"><head>
    <style data-vite-theme="" data-inject-first="">:root {
      --background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--primary: 342 92% 54%;
--primary-foreground: 356 100% 99%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--ring: 240 4.9% 83.9%;
--radius: 0.75rem;
  }
  .light {
      --background: 0 0% 100%;
--foreground: 20 14.3% 4.1%;
--muted: 60 4.8% 95.9%;
--muted-foreground: 25 5.3% 44.7%;
--popover: 0 0% 100%;
--popover-foreground: 20 14.3% 4.1%;
--card: 0 0% 100%;
--card-foreground: 20 14.3% 4.1%;
--border: 20 5.9% 90%;
--input: 20 5.9% 90%;
--primary: 342 92% 54%;
--primary-foreground: 356 100% 99%;
--secondary: 60 4.8% 95.9%;
--secondary-foreground: 24 9.8% 10%;
--accent: 60 4.8% 95.9%;
--accent-foreground: 24 9.8% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 60 9.1% 97.8%;
--ring: 20 14.3% 4.1%;
--radius: 0.75rem;
  }</style>

    <script type="module">
import { createHotContext } from "/@vite/client";
const hot = createHotContext("/__dummy__runtime-error-plugin");

function sendError(error) {
  if (!(error instanceof Error)) {
    error = new Error("(unknown runtime error)");
  }
  const serialized = {
    message: error.message,
    stack: error.stack,
  };
  hot.send("runtime-error-plugin:error", serialized);
}

window.addEventListener("error", (evt) => {
  sendError(evt.error);
});

window.addEventListener("unhandledrejection", (evt) => {
  sendError(evt.reason);
});
</script>

    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <script type="module">"use strict";(()=>{var t={HIGHLIGHT_COLOR:"#8B5CF6",HIGHLIGHT_BG:"#8B5CF610",Z_INDEX:{BASE:1e4,OVERLAY:10001,TOOLTIP:10002,CONTENT:10003},HOVERED_ATTR:"data-replit-hovered",SELECTED_ATTR:"data-replit-selected",TOOLTIP_OFFSET:25,MAX_TOOLTIP_WIDTH:200,ALLOWED_DOMAIN:".replit.dev"},s=`
  .replit-beacon-tooltip {
    position: fixed;
    z-index: ${t.Z_INDEX.TOOLTIP};
    pointer-events: none;
    background-color: ${t.HIGHLIGHT_COLOR};
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    white-space: nowrap;
    display: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: opacity 0.2s ease-in-out;
    margin: 0;
  }

  /* Base positioning for highlighted elements */
  [${t.HOVERED_ATTR}],
  [${t.SELECTED_ATTR}] {
    position: relative !important;
    z-index: ${t.Z_INDEX.BASE} !important;
  }

  /* Common overlay styles */
  [${t.HOVERED_ATTR}]::before,
  [${t.SELECTED_ATTR}]::before {
    content: '';
    position: absolute;
    inset: -2px;
    pointer-events: none;
    border-radius: inherit;
    z-index: ${t.Z_INDEX.OVERLAY};
    transition: none !important;
    box-sizing: border-box;
  }

  /* Hover state */
  [${t.HOVERED_ATTR}]::before {
    background-color: ${t.HIGHLIGHT_BG};
    border: 2px dashed ${t.HIGHLIGHT_COLOR};
  }

  /* Selected state - we can add dotted border, removed due to visual bugs and inconsistencies across different element types */
  [${t.SELECTED_ATTR}]::before {
    background-color: ${t.HIGHLIGHT_BG};
  }

  /* Preserve child element positioning */
  [${t.HOVERED_ATTR}] > *,
  [${t.SELECTED_ATTR}] > * {
    position: relative;
    z-index: ${t.Z_INDEX.CONTENT};
  }

  /* Special handling for images */
  img[${t.HOVERED_ATTR}],
  img[${t.SELECTED_ATTR}] {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* Prevent nested highlights */
  [${t.HOVERED_ATTR}] [${t.HOVERED_ATTR}]::before,
  [${t.SELECTED_ATTR}] [${t.SELECTED_ATTR}]::before,
  [${t.HOVERED_ATTR}] [${t.SELECTED_ATTR}]::before,
  [${t.SELECTED_ATTR}] [${t.HOVERED_ATTR}]::before {
    display: none;
  }

  /* Fix for absolutely positioned elements */
  [${t.HOVERED_ATTR}] [class*="absolute"],
  [${t.SELECTED_ATTR}] [class*="absolute"] {
    z-index: ${t.Z_INDEX.CONTENT} !important;
  }

  /* Fix for flex and grid layouts */
  [${t.HOVERED_ATTR}].flex,
  [${t.SELECTED_ATTR}].flex,
  [${t.HOVERED_ATTR}].grid,
  [${t.SELECTED_ATTR}].grid {
    display: flex !important;
  }

  /* Prevent transition jumps */
  [${t.HOVERED_ATTR}],
  [${t.SELECTED_ATTR}],
  [${t.HOVERED_ATTR}] *,
  [${t.SELECTED_ATTR}] * {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }

  /* Fix for overflow handling */
  [${t.HOVERED_ATTR}].overflow-hidden,
  [${t.SELECTED_ATTR}].overflow-hidden {
    overflow: visible !important;
  }

  /* Proper stacking context */
  [${t.HOVERED_ATTR}],
  [${t.SELECTED_ATTR}] {
    isolation: isolate;
    contain: layout;
  }

  /* Handle inline elements */
  [${t.HOVERED_ATTR}].inline,
  [${t.SELECTED_ATTR}].inline {
    display: inline-block !important;
  }

  /* Fix for form elements */
  input[${t.HOVERED_ATTR}],
  textarea[${t.HOVERED_ATTR}],
  select[${t.HOVERED_ATTR}],
  input[${t.SELECTED_ATTR}],
  textarea[${t.SELECTED_ATTR}],
  select[${t.SELECTED_ATTR}] {
    z-index: ${t.Z_INDEX.BASE} !important;
  }
`;var o=class{selectedElement=null;isActive=!1;styleElement=null;tooltip=null;constructor(){this.initializeStyles(),this.initializeTooltip(),this.setupMessageListener(),this.notifyScriptLoaded()}initializeStyles(){this.styleElement=document.createElement("style"),this.styleElement.textContent=s,document.head.appendChild(this.styleElement)}initializeTooltip(){this.tooltip=document.createElement("div"),this.tooltip.className="replit-beacon-tooltip",this.tooltip.setAttribute("role","tooltip"),document.body.appendChild(this.tooltip)}setupMessageListener(){window.addEventListener("message",this.handleMessage.bind(this))}notifyScriptLoaded(){this.postMessageToParent({type:"SELECTOR_SCRIPT_LOADED",timestamp:Date.now()})}isValidOrigin(e){if(e.startsWith("http://localhost:"))return!0;try{return new URL(e).hostname.endsWith(t.ALLOWED_DOMAIN)}catch{return!1}}hasComponentMetadata(e){return e.hasAttribute("data-replit-metadata")&&e.hasAttribute("data-component-name")}getElementMetadata(e){let i={elementPath:e.getAttribute("data-replit-metadata")||"unknown",elementName:e.getAttribute("data-component-name")||"unknown",textContent:e.innerText,tag:e.tagName.toLowerCase(),attrs:{src:e.getAttribute("src")||""}};return i.textContent.length>100&&(i.textContent=i.textContent.slice(0,100)+"..."),i}updateTooltip(e){if(!(!this.tooltip||!e))try{let i=e.getBoundingClientRect(),a=e.getAttribute("data-component-name")||e.tagName.toLowerCase();this.tooltip.style.maxWidth=`${t.MAX_TOOLTIP_WIDTH}px`,this.tooltip.style.left=`${Math.max(0,i.left)}px`,this.tooltip.style.top=`${Math.max(0,i.top-t.TOOLTIP_OFFSET)}px`,this.tooltip.textContent=a,this.tooltip.style.display="block",this.tooltip.style.opacity="1"}catch(i){console.error("Error updating tooltip:",i),this.hideTooltip()}}hideTooltip(){this.tooltip&&(this.tooltip.style.opacity="0",this.tooltip.style.display="none")}postMessageToParent(e){window.parent&&window.parent.postMessage(e,"*")}handleMouseOver=e=>{if(!this.isActive||!(e.target instanceof HTMLElement)||!this.hasComponentMetadata(e.target))return;let i=e.target;i!==this.selectedElement&&(i.setAttribute(t.HOVERED_ATTR,"true"),this.updateTooltip(i))};handleMouseOut=e=>{if(!this.isActive||!(e.target instanceof HTMLElement)||!this.hasComponentMetadata(e.target))return;let i=e.target;i!==this.selectedElement&&(i.removeAttribute(t.HOVERED_ATTR),this.hideTooltip())};handleClick=e=>{if(!this.isActive||!(e.target instanceof HTMLElement)||!this.hasComponentMetadata(e.target))return;e.preventDefault(),e.stopPropagation();let i=e.target;if(i===this.selectedElement){this.unselectCurrentElement(),this.hideTooltip(),this.postMessageToParent({type:"ELEMENT_UNSELECTED",timestamp:Date.now()});return}this.unselectCurrentElement(),i.setAttribute(t.SELECTED_ATTR,"true"),this.selectedElement=i,i.removeAttribute(t.HOVERED_ATTR),this.updateTooltip(i),this.postMessageToParent({type:"ELEMENT_SELECTED",payload:this.getElementMetadata(i),timestamp:Date.now()})};unselectCurrentElement(){this.selectedElement&&(this.selectedElement.removeAttribute(t.SELECTED_ATTR),this.selectedElement=null)}handleMessage=e=>{if(this.isValidOrigin(e.origin)&&e.data?.type==="TOGGLE_REPLIT_VISUAL_EDITOR"){let i=!!e.data.enabled;i?this.postMessageToParent({type:"REPLIT_VISUAL_EDITOR_ENABLED",timestamp:Date.now()}):this.postMessageToParent({type:"REPLIT_VISUAL_EDITOR_DISABLED",timestamp:Date.now()}),this.isActive!==i&&(this.isActive=i,this.toggleEventListeners(i))}};toggleEventListeners(e){e?(document.addEventListener("mouseover",this.handleMouseOver),document.addEventListener("mouseout",this.handleMouseOut),document.addEventListener("click",this.handleClick,!0),document.body.style.cursor="pointer"):(document.removeEventListener("mouseover",this.handleMouseOver),document.removeEventListener("mouseout",this.handleMouseOut),document.removeEventListener("click",this.handleClick,!0),document.body.style.cursor="",document.querySelectorAll(`[${t.HOVERED_ATTR}], [${t.SELECTED_ATTR}]`).forEach(i=>{i.removeAttribute(t.HOVERED_ATTR),i.removeAttribute(t.SELECTED_ATTR)}),this.hideTooltip(),this.selectedElement=null)}};try{window.REPLIT_BEACON_VERSION||(window.REPLIT_BEACON_VERSION="1.0.0",new o)}catch(n){console.error("[replit-beacon] Failed to initialize:",n)}})();
</script>
  <style>
  .replit-beacon-tooltip {
    position: fixed;
    z-index: 10002;
    pointer-events: none;
    background-color: #8B5CF6;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    white-space: nowrap;
    display: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: opacity 0.2s ease-in-out;
    margin: 0;
  }

  /* Base positioning for highlighted elements */
  [data-replit-hovered],
  [data-replit-selected] {
    position: relative !important;
    z-index: 10000 !important;
  }

  /* Common overlay styles */
  [data-replit-hovered]::before,
  [data-replit-selected]::before {
    content: '';
    position: absolute;
    inset: -2px;
    pointer-events: none;
    border-radius: inherit;
    z-index: 10001;
    transition: none !important;
    box-sizing: border-box;
  }

  /* Hover state */
  [data-replit-hovered]::before {
    background-color: #8B5CF610;
    border: 2px dashed #8B5CF6;
  }

  /* Selected state - we can add dotted border, removed due to visual bugs and inconsistencies across different element types */
  [data-replit-selected]::before {
    background-color: #8B5CF610;
  }

  /* Preserve child element positioning */
  [data-replit-hovered] > *,
  [data-replit-selected] > * {
    position: relative;
    z-index: 10003;
  }

  /* Special handling for images */
  img[data-replit-hovered],
  img[data-replit-selected] {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* Prevent nested highlights */
  [data-replit-hovered] [data-replit-hovered]::before,
  [data-replit-selected] [data-replit-selected]::before,
  [data-replit-hovered] [data-replit-selected]::before,
  [data-replit-selected] [data-replit-hovered]::before {
    display: none;
  }

  /* Fix for absolutely positioned elements */
  [data-replit-hovered] [class*="absolute"],
  [data-replit-selected] [class*="absolute"] {
    z-index: 10003 !important;
  }

  /* Fix for flex and grid layouts */
  [data-replit-hovered].flex,
  [data-replit-selected].flex,
  [data-replit-hovered].grid,
  [data-replit-selected].grid {
    display: flex !important;
  }

  /* Prevent transition jumps */
  [data-replit-hovered],
  [data-replit-selected],
  [data-replit-hovered] *,
  [data-replit-selected] * {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }

  /* Fix for overflow handling */
  [data-replit-hovered].overflow-hidden,
  [data-replit-selected].overflow-hidden {
    overflow: visible !important;
  }

  /* Proper stacking context */
  [data-replit-hovered],
  [data-replit-selected] {
    isolation: isolate;
    contain: layout;
  }

  /* Handle inline elements */
  [data-replit-hovered].inline,
  [data-replit-selected].inline {
    display: inline-block !important;
  }

  /* Fix for form elements */
  input[data-replit-hovered],
  textarea[data-replit-hovered],
  select[data-replit-hovered],
  input[data-replit-selected],
  textarea[data-replit-selected],
  select[data-replit-selected] {
    z-index: 10000 !important;
  }
</style><style type="text/css" data-vite-dev-id="/home/runner/workspace/client/src/index.css">*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
  * {
  border-color: hsl(var(--border));
}

  body {
  background-color: hsl(var(--background));
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-bottom-12 {
  bottom: -3rem;
}
.-left-12 {
  left: -3rem;
}
.-right-12 {
  right: -3rem;
}
.-top-12 {
  top: -3rem;
}
.bottom-0 {
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-1\/2 {
  left: 50%;
}
.left-2 {
  left: 0.5rem;
}
.left-\[50\%\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-1 {
  right: 0.25rem;
}
.right-2 {
  right: 0.5rem;
}
.right-3 {
  right: 0.75rem;
}
.right-4 {
  right: 1rem;
}
.top-0 {
  top: 0px;
}
.top-1\.5 {
  top: 0.375rem;
}
.top-1\/2 {
  top: 50%;
}
.top-2 {
  top: 0.5rem;
}
.top-3\.5 {
  top: 0.875rem;
}
.top-4 {
  top: 1rem;
}
.top-\[1px\] {
  top: 1px;
}
.top-\[50\%\] {
  top: 50%;
}
.top-\[60\%\] {
  top: 60%;
}
.top-full {
  top: 100%;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-50 {
  z-index: 50;
}
.z-\[100\] {
  z-index: 100;
}
.z-\[1\] {
  z-index: 1;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-3\.5 {
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-0\.5 {
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.-ml-4 {
  margin-left: -1rem;
}
.-mt-4 {
  margin-top: -1rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-12 {
  margin-bottom: 3rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mt-1\.5 {
  margin-top: 0.375rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-24 {
  margin-top: 6rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-auto {
  margin-top: auto;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
.size-4 {
  width: 1rem;
  height: 1rem;
}
.h-1\.5 {
  height: 0.375rem;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-12 {
  height: 3rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-2\.5 {
  height: 0.625rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\.5 {
  height: 0.875rem;
}
.h-32 {
  height: 8rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\[1px\] {
  height: 1px;
}
.h-\[300px\] {
  height: 300px;
}
.h-\[var\(--radix-navigation-menu-viewport-height\)\] {
  height: var(--radix-navigation-menu-viewport-height);
}
.h-\[var\(--radix-select-trigger-height\)\] {
  height: var(--radix-select-trigger-height);
}
.h-auto {
  height: auto;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.h-svh {
  height: 100svh;
}
.max-h-96 {
  max-height: 24rem;
}
.max-h-\[300px\] {
  max-height: 300px;
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-0 {
  min-height: 0px;
}
.min-h-\[80px\] {
  min-height: 80px;
}
.min-h-screen {
  min-height: 100vh;
}
.min-h-svh {
  min-height: 100svh;
}
.w-0 {
  width: 0px;
}
.w-1 {
  width: 0.25rem;
}
.w-10 {
  width: 2.5rem;
}
.w-11 {
  width: 2.75rem;
}
.w-12 {
  width: 3rem;
}
.w-2 {
  width: 0.5rem;
}
.w-2\.5 {
  width: 0.625rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\.5 {
  width: 0.875rem;
}
.w-3\/4 {
  width: 75%;
}
.w-32 {
  width: 8rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-64 {
  width: 16rem;
}
.w-7 {
  width: 1.75rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
}
.w-9 {
  width: 2.25rem;
}
.w-\[--sidebar-width\] {
  width: var(--sidebar-width);
}
.w-\[100px\] {
  width: 100px;
}
.w-\[1px\] {
  width: 1px;
}
.w-auto {
  width: auto;
}
.w-full {
  width: 100%;
}
.w-max {
  width: -moz-max-content;
  width: max-content;
}
.w-px {
  width: 1px;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-5 {
  min-width: 1.25rem;
}
.min-w-\[12rem\] {
  min-width: 12rem;
}
.min-w-\[8rem\] {
  min-width: 8rem;
}
.min-w-\[var\(--radix-select-trigger-width\)\] {
  min-width: var(--radix-select-trigger-width);
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-\[--skeleton-width\] {
  max-width: var(--skeleton-width);
}
.max-w-lg {
  max-width: 32rem;
}
.max-w-max {
  max-width: -moz-max-content;
  max-width: max-content;
}
.max-w-md {
  max-width: 28rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.grow-0 {
  flex-grow: 0;
}
.basis-full {
  flex-basis: 100%;
}
.caption-bottom {
  caption-side: bottom;
}
.border-collapse {
  border-collapse: collapse;
}
.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-px {
  --tw-translate-x: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\[-50\%\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-px {
  --tw-translate-x: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\[-50\%\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.touch-none {
  touch-action: none;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.list-none {
  list-style-type: none;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\.5 {
  gap: 0.375rem;
}
.gap-12 {
  gap: 3rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.break-words {
  overflow-wrap: break-word;
}
.rounded-\[2px\] {
  border-radius: 2px;
}
.rounded-\[inherit\] {
  border-radius: inherit;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: var(--radius);
}
.rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.rounded-sm {
  border-radius: calc(var(--radius) - 4px);
}
.rounded-t-\[10px\] {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.rounded-tl-sm {
  border-top-left-radius: calc(var(--radius) - 4px);
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-\[1\.5px\] {
  border-width: 1.5px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-dashed {
  border-style: dashed;
}
.border-\[--color-border\] {
  border-color: var(--color-border);
}
.border-border {
  border-color: hsl(var(--border));
}
.border-border\/50 {
  border-color: hsl(var(--border) / 0.5);
}
.border-destructive {
  border-color: hsl(var(--destructive));
}
.border-destructive\/50 {
  border-color: hsl(var(--destructive) / 0.5);
}
.border-input {
  border-color: hsl(var(--input));
}
.border-primary {
  border-color: hsl(var(--primary));
}
.border-sidebar-border {
  border-color: hsl(var(--sidebar-border));
}
.border-transparent {
  border-color: transparent;
}
.border-l-transparent {
  border-left-color: transparent;
}
.border-t-transparent {
  border-top-color: transparent;
}
.bg-\[--color-bg\] {
  background-color: var(--color-bg);
}
.bg-accent {
  background-color: hsl(var(--accent));
}
.bg-accent\/5 {
  background-color: hsl(var(--accent) / 0.05);
}
.bg-background {
  background-color: hsl(var(--background));
}
.bg-background\/95 {
  background-color: hsl(var(--background) / 0.95);
}
.bg-black\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.bg-border {
  background-color: hsl(var(--border));
}
.bg-card {
  background-color: hsl(var(--card));
}
.bg-destructive {
  background-color: hsl(var(--destructive));
}
.bg-foreground {
  background-color: hsl(var(--foreground));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-muted {
  background-color: hsl(var(--muted));
}
.bg-muted\/50 {
  background-color: hsl(var(--muted) / 0.5);
}
.bg-popover {
  background-color: hsl(var(--popover));
}
.bg-primary {
  background-color: hsl(var(--primary));
}
.bg-primary\/20 {
  background-color: hsl(var(--primary) / 0.2);
}
.bg-secondary {
  background-color: hsl(var(--secondary));
}
.bg-sidebar {
  background-color: hsl(var(--sidebar-background));
}
.bg-sidebar-border {
  background-color: hsl(var(--sidebar-border));
}
.bg-transparent {
  background-color: transparent;
}
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.from-primary\/20 {
  --tw-gradient-from: hsl(var(--primary) / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: hsl(var(--primary) / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-accent\/20 {
  --tw-gradient-to: hsl(var(--accent) / 0.2) var(--tw-gradient-to-position);
}
.fill-current {
  fill: currentColor;
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-\[1px\] {
  padding: 1px;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-0\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.pb-16 {
  padding-bottom: 4rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pl-2\.5 {
  padding-left: 0.625rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-2\.5 {
  padding-right: 0.625rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pt-0 {
  padding-top: 0px;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pt-32 {
  padding-top: 8rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.text-\[0\.8rem\] {
  font-size: 0.8rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.leading-none {
  line-height: 1;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.text-accent-foreground {
  color: hsl(var(--accent-foreground));
}
.text-card-foreground {
  color: hsl(var(--card-foreground));
}
.text-current {
  color: currentColor;
}
.text-destructive {
  color: hsl(var(--destructive));
}
.text-destructive-foreground {
  color: hsl(var(--destructive-foreground));
}
.text-foreground {
  color: hsl(var(--foreground));
}
.text-foreground\/50 {
  color: hsl(var(--foreground) / 0.5);
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.text-popover-foreground {
  color: hsl(var(--popover-foreground));
}
.text-primary {
  color: hsl(var(--primary));
}
.text-primary-foreground {
  color: hsl(var(--primary-foreground));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}
.text-sidebar-foreground {
  color: hsl(var(--sidebar-foreground));
}
.text-sidebar-foreground\/70 {
  color: hsl(var(--sidebar-foreground) / 0.7);
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-90 {
  opacity: 0.9;
}
.shadow-\[0_0_0_1px_hsl\(var\(--sidebar-border\)\)\] {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-ring {
  --tw-ring-color: hsl(var(--ring));
}
.ring-sidebar-ring {
  --tw-ring-color: hsl(var(--sidebar-ring));
}
.ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\[left\2c right\2c width\] {
  transition-property: left,right,width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\[margin\2c opa\] {
  transition-property: margin,opa;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\[width\2c height\2c padding\] {
  transition-property: width,height,padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\[width\] {
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-1000 {
  transition-duration: 1000ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  transition-timing-function: linear;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.fade-in-0 {
  --tw-enter-opacity: 0;
}
.fade-in-80 {
  --tw-enter-opacity: 0.8;
}
.zoom-in-95 {
  --tw-enter-scale: .95;
}
.duration-1000 {
  animation-duration: 1000ms;
}
.duration-200 {
  animation-duration: 200ms;
}
.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  animation-timing-function: linear;
}
.file\:border-0::file-selector-button {
  border-width: 0px;
}
.file\:bg-transparent::file-selector-button {
  background-color: transparent;
}
.file\:text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.file\:font-medium::file-selector-button {
  font-weight: 500;
}
.file\:text-foreground::file-selector-button {
  color: hsl(var(--foreground));
}
.placeholder\:text-muted-foreground::-moz-placeholder {
  color: hsl(var(--muted-foreground));
}
.placeholder\:text-muted-foreground::placeholder {
  color: hsl(var(--muted-foreground));
}
.after\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
.after\:-inset-2::after {
  content: var(--tw-content);
  inset: -0.5rem;
}
.after\:inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}
.after\:left-1\/2::after {
  content: var(--tw-content);
  left: 50%;
}
.after\:w-1::after {
  content: var(--tw-content);
  width: 0.25rem;
}
.after\:w-\[2px\]::after {
  content: var(--tw-content);
  width: 2px;
}
.after\:-translate-x-1\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.first\:rounded-l-md:first-child {
  border-top-left-radius: calc(var(--radius) - 2px);
  border-bottom-left-radius: calc(var(--radius) - 2px);
}
.first\:border-l:first-child {
  border-left-width: 1px;
}
.last\:rounded-r-md:last-child {
  border-top-right-radius: calc(var(--radius) - 2px);
  border-bottom-right-radius: calc(var(--radius) - 2px);
}
.focus-within\:relative:focus-within {
  position: relative;
}
.focus-within\:z-20:focus-within {
  z-index: 20;
}
.hover\:bg-accent:hover {
  background-color: hsl(var(--accent));
}
.hover\:bg-destructive\/80:hover {
  background-color: hsl(var(--destructive) / 0.8);
}
.hover\:bg-destructive\/90:hover {
  background-color: hsl(var(--destructive) / 0.9);
}
.hover\:bg-muted:hover {
  background-color: hsl(var(--muted));
}
.hover\:bg-muted\/50:hover {
  background-color: hsl(var(--muted) / 0.5);
}
.hover\:bg-primary:hover {
  background-color: hsl(var(--primary));
}
.hover\:bg-primary\/80:hover {
  background-color: hsl(var(--primary) / 0.8);
}
.hover\:bg-primary\/90:hover {
  background-color: hsl(var(--primary) / 0.9);
}
.hover\:bg-secondary:hover {
  background-color: hsl(var(--secondary));
}
.hover\:bg-secondary\/80:hover {
  background-color: hsl(var(--secondary) / 0.8);
}
.hover\:bg-sidebar-accent:hover {
  background-color: hsl(var(--sidebar-accent));
}
.hover\:text-accent-foreground:hover {
  color: hsl(var(--accent-foreground));
}
.hover\:text-foreground:hover {
  color: hsl(var(--foreground));
}
.hover\:text-muted-foreground:hover {
  color: hsl(var(--muted-foreground));
}
.hover\:text-primary:hover {
  color: hsl(var(--primary));
}
.hover\:text-primary-foreground:hover {
  color: hsl(var(--primary-foreground));
}
.hover\:text-sidebar-accent-foreground:hover {
  color: hsl(var(--sidebar-accent-foreground));
}
.hover\:underline:hover {
  text-decoration-line: underline;
}
.hover\:opacity-100:hover {
  opacity: 1;
}
.hover\:shadow-\[0_0_0_1px_hsl\(var\(--sidebar-accent\)\)\]:hover {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\:after\:bg-sidebar-border:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--sidebar-border));
}
.focus\:bg-accent:focus {
  background-color: hsl(var(--accent));
}
.focus\:bg-primary:focus {
  background-color: hsl(var(--primary));
}
.focus\:text-accent-foreground:focus {
  color: hsl(var(--accent-foreground));
}
.focus\:text-primary-foreground:focus {
  color: hsl(var(--primary-foreground));
}
.focus\:opacity-100:focus {
  opacity: 1;
}
.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\:ring-ring:focus {
  --tw-ring-color: hsl(var(--ring));
}
.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-visible\:ring-1:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\:ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}
.focus-visible\:ring-sidebar-ring:focus-visible {
  --tw-ring-color: hsl(var(--sidebar-ring));
}
.focus-visible\:ring-offset-1:focus-visible {
  --tw-ring-offset-width: 1px;
}
.focus-visible\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}
.focus-visible\:ring-offset-background:focus-visible {
  --tw-ring-offset-color: hsl(var(--background));
}
.active\:bg-sidebar-accent:active {
  background-color: hsl(var(--sidebar-accent));
}
.active\:text-sidebar-accent-foreground:active {
  color: hsl(var(--sidebar-accent-foreground));
}
.disabled\:pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\:opacity-50:disabled {
  opacity: 0.5;
}
.group\/menu-item:focus-within .group-focus-within\/menu-item\:opacity-100 {
  opacity: 1;
}
.group\/menu-item:hover .group-hover\/menu-item\:opacity-100 {
  opacity: 1;
}
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
.group.destructive .group-\[\.destructive\]\:border-muted\/40 {
  border-color: hsl(var(--muted) / 0.4);
}
.group.destructive .group-\[\.destructive\]\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}
.group.destructive .group-\[\.destructive\]\:hover\:border-destructive\/30:hover {
  border-color: hsl(var(--destructive) / 0.3);
}
.group.destructive .group-\[\.destructive\]\:hover\:bg-destructive:hover {
  background-color: hsl(var(--destructive));
}
.group.destructive .group-\[\.destructive\]\:hover\:text-destructive-foreground:hover {
  color: hsl(var(--destructive-foreground));
}
.group.destructive .group-\[\.destructive\]\:hover\:text-red-50:hover {
  --tw-text-opacity: 1;
  color: rgb(254 242 242 / var(--tw-text-opacity));
}
.group.destructive .group-\[\.destructive\]\:focus\:ring-destructive:focus {
  --tw-ring-color: hsl(var(--destructive));
}
.group.destructive .group-\[\.destructive\]\:focus\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity));
}
.group.destructive .group-\[\.destructive\]\:focus\:ring-offset-red-600:focus {
  --tw-ring-offset-color: #dc2626;
}
.peer\/menu-button:hover ~ .peer-hover\/menu-button\:text-sidebar-accent-foreground {
  color: hsl(var(--sidebar-accent-foreground));
}
.peer:disabled ~ .peer-disabled\:cursor-not-allowed {
  cursor: not-allowed;
}
.peer:disabled ~ .peer-disabled\:opacity-70 {
  opacity: 0.7;
}
.has-\[\[data-variant\=inset\]\]\:bg-sidebar:has([data-variant=inset]) {
  background-color: hsl(var(--sidebar-background));
}
.has-\[\:disabled\]\:opacity-50:has(:disabled) {
  opacity: 0.5;
}
.group\/menu-item:has([data-sidebar=menu-action]) .group-has-\[\[data-sidebar\=menu-action\]\]\/menu-item\:pr-8 {
  padding-right: 2rem;
}
.aria-disabled\:pointer-events-none[aria-disabled="true"] {
  pointer-events: none;
}
.aria-disabled\:opacity-50[aria-disabled="true"] {
  opacity: 0.5;
}
.aria-selected\:bg-accent[aria-selected="true"] {
  background-color: hsl(var(--accent));
}
.aria-selected\:bg-accent\/50[aria-selected="true"] {
  background-color: hsl(var(--accent) / 0.5);
}
.aria-selected\:text-accent-foreground[aria-selected="true"] {
  color: hsl(var(--accent-foreground));
}
.aria-selected\:text-muted-foreground[aria-selected="true"] {
  color: hsl(var(--muted-foreground));
}
.aria-selected\:opacity-100[aria-selected="true"] {
  opacity: 1;
}
.aria-selected\:opacity-30[aria-selected="true"] {
  opacity: 0.3;
}
.data-\[disabled\=true\]\:pointer-events-none[data-disabled="true"] {
  pointer-events: none;
}
.data-\[disabled\]\:pointer-events-none[data-disabled] {
  pointer-events: none;
}
.data-\[panel-group-direction\=vertical\]\:h-px[data-panel-group-direction="vertical"] {
  height: 1px;
}
.data-\[panel-group-direction\=vertical\]\:w-full[data-panel-group-direction="vertical"] {
  width: 100%;
}
.data-\[side\=bottom\]\:translate-y-1[data-side="bottom"] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[side\=left\]\:-translate-x-1[data-side="left"] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[side\=right\]\:translate-x-1[data-side="right"] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[side\=top\]\:-translate-y-1[data-side="top"] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[state\=checked\]\:translate-x-5[data-state="checked"] {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[state\=unchecked\]\:translate-x-0[data-state="unchecked"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[swipe\=cancel\]\:translate-x-0[data-swipe="cancel"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[swipe\=end\]\:translate-x-\[var\(--radix-toast-swipe-end-x\)\][data-swipe="end"] {
  --tw-translate-x: var(--radix-toast-swipe-end-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[swipe\=move\]\:translate-x-\[var\(--radix-toast-swipe-move-x\)\][data-swipe="move"] {
  --tw-translate-x: var(--radix-toast-swipe-move-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes accordion-up {

  from {
    height: var(--radix-accordion-content-height);
  }

  to {
    height: 0;
  }
}
.data-\[state\=closed\]\:animate-accordion-up[data-state="closed"] {
  animation: accordion-up 0.2s ease-out;
}
@keyframes accordion-down {

  from {
    height: 0;
  }

  to {
    height: var(--radix-accordion-content-height);
  }
}
.data-\[state\=open\]\:animate-accordion-down[data-state="open"] {
  animation: accordion-down 0.2s ease-out;
}
.data-\[panel-group-direction\=vertical\]\:flex-col[data-panel-group-direction="vertical"] {
  flex-direction: column;
}
.data-\[active\=true\]\:bg-sidebar-accent[data-active="true"] {
  background-color: hsl(var(--sidebar-accent));
}
.data-\[active\]\:bg-accent\/50[data-active] {
  background-color: hsl(var(--accent) / 0.5);
}
.data-\[selected\=\'true\'\]\:bg-accent[data-selected='true'] {
  background-color: hsl(var(--accent));
}
.data-\[state\=active\]\:bg-background[data-state="active"] {
  background-color: hsl(var(--background));
}
.data-\[state\=checked\]\:bg-primary[data-state="checked"] {
  background-color: hsl(var(--primary));
}
.data-\[state\=on\]\:bg-accent[data-state="on"] {
  background-color: hsl(var(--accent));
}
.data-\[state\=open\]\:bg-accent[data-state="open"] {
  background-color: hsl(var(--accent));
}
.data-\[state\=open\]\:bg-accent\/50[data-state="open"] {
  background-color: hsl(var(--accent) / 0.5);
}
.data-\[state\=open\]\:bg-secondary[data-state="open"] {
  background-color: hsl(var(--secondary));
}
.data-\[state\=selected\]\:bg-muted[data-state="selected"] {
  background-color: hsl(var(--muted));
}
.data-\[state\=unchecked\]\:bg-input[data-state="unchecked"] {
  background-color: hsl(var(--input));
}
.data-\[active\=true\]\:font-medium[data-active="true"] {
  font-weight: 500;
}
.data-\[active\=true\]\:text-sidebar-accent-foreground[data-active="true"] {
  color: hsl(var(--sidebar-accent-foreground));
}
.data-\[selected\=true\]\:text-accent-foreground[data-selected="true"] {
  color: hsl(var(--accent-foreground));
}
.data-\[state\=active\]\:text-foreground[data-state="active"] {
  color: hsl(var(--foreground));
}
.data-\[state\=checked\]\:text-primary-foreground[data-state="checked"] {
  color: hsl(var(--primary-foreground));
}
.data-\[state\=on\]\:text-accent-foreground[data-state="on"] {
  color: hsl(var(--accent-foreground));
}
.data-\[state\=open\]\:text-accent-foreground[data-state="open"] {
  color: hsl(var(--accent-foreground));
}
.data-\[state\=open\]\:text-muted-foreground[data-state="open"] {
  color: hsl(var(--muted-foreground));
}
.data-\[disabled\=true\]\:opacity-50[data-disabled="true"] {
  opacity: 0.5;
}
.data-\[disabled\]\:opacity-50[data-disabled] {
  opacity: 0.5;
}
.data-\[state\=open\]\:opacity-100[data-state="open"] {
  opacity: 1;
}
.data-\[state\=active\]\:shadow-sm[data-state="active"] {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.data-\[swipe\=move\]\:transition-none[data-swipe="move"] {
  transition-property: none;
}
.data-\[state\=closed\]\:duration-300[data-state="closed"] {
  transition-duration: 300ms;
}
.data-\[state\=open\]\:duration-500[data-state="open"] {
  transition-duration: 500ms;
}
.data-\[motion\^\=from-\]\:animate-in[data-motion^="from-"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\[state\=open\]\:animate-in[data-state="open"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\[state\=visible\]\:animate-in[data-state="visible"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\[motion\^\=to-\]\:animate-out[data-motion^="to-"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\[state\=closed\]\:animate-out[data-state="closed"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\[state\=hidden\]\:animate-out[data-state="hidden"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\[swipe\=end\]\:animate-out[data-swipe="end"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\[motion\^\=from-\]\:fade-in[data-motion^="from-"] {
  --tw-enter-opacity: 0;
}
.data-\[motion\^\=to-\]\:fade-out[data-motion^="to-"] {
  --tw-exit-opacity: 0;
}
.data-\[state\=closed\]\:fade-out-0[data-state="closed"] {
  --tw-exit-opacity: 0;
}
.data-\[state\=closed\]\:fade-out-80[data-state="closed"] {
  --tw-exit-opacity: 0.8;
}
.data-\[state\=hidden\]\:fade-out[data-state="hidden"] {
  --tw-exit-opacity: 0;
}
.data-\[state\=open\]\:fade-in-0[data-state="open"] {
  --tw-enter-opacity: 0;
}
.data-\[state\=visible\]\:fade-in[data-state="visible"] {
  --tw-enter-opacity: 0;
}
.data-\[state\=closed\]\:zoom-out-95[data-state="closed"] {
  --tw-exit-scale: .95;
}
.data-\[state\=open\]\:zoom-in-90[data-state="open"] {
  --tw-enter-scale: .9;
}
.data-\[state\=open\]\:zoom-in-95[data-state="open"] {
  --tw-enter-scale: .95;
}
.data-\[motion\=from-end\]\:slide-in-from-right-52[data-motion="from-end"] {
  --tw-enter-translate-x: 13rem;
}
.data-\[motion\=from-start\]\:slide-in-from-left-52[data-motion="from-start"] {
  --tw-enter-translate-x: -13rem;
}
.data-\[motion\=to-end\]\:slide-out-to-right-52[data-motion="to-end"] {
  --tw-exit-translate-x: 13rem;
}
.data-\[motion\=to-start\]\:slide-out-to-left-52[data-motion="to-start"] {
  --tw-exit-translate-x: -13rem;
}
.data-\[side\=bottom\]\:slide-in-from-top-2[data-side="bottom"] {
  --tw-enter-translate-y: -0.5rem;
}
.data-\[side\=left\]\:slide-in-from-right-2[data-side="left"] {
  --tw-enter-translate-x: 0.5rem;
}
.data-\[side\=right\]\:slide-in-from-left-2[data-side="right"] {
  --tw-enter-translate-x: -0.5rem;
}
.data-\[side\=top\]\:slide-in-from-bottom-2[data-side="top"] {
  --tw-enter-translate-y: 0.5rem;
}
.data-\[state\=closed\]\:slide-out-to-bottom[data-state="closed"] {
  --tw-exit-translate-y: 100%;
}
.data-\[state\=closed\]\:slide-out-to-left[data-state="closed"] {
  --tw-exit-translate-x: -100%;
}
.data-\[state\=closed\]\:slide-out-to-left-1\/2[data-state="closed"] {
  --tw-exit-translate-x: -50%;
}
.data-\[state\=closed\]\:slide-out-to-right[data-state="closed"] {
  --tw-exit-translate-x: 100%;
}
.data-\[state\=closed\]\:slide-out-to-right-full[data-state="closed"] {
  --tw-exit-translate-x: 100%;
}
.data-\[state\=closed\]\:slide-out-to-top[data-state="closed"] {
  --tw-exit-translate-y: -100%;
}
.data-\[state\=closed\]\:slide-out-to-top-\[48\%\][data-state="closed"] {
  --tw-exit-translate-y: -48%;
}
.data-\[state\=open\]\:slide-in-from-bottom[data-state="open"] {
  --tw-enter-translate-y: 100%;
}
.data-\[state\=open\]\:slide-in-from-left[data-state="open"] {
  --tw-enter-translate-x: -100%;
}
.data-\[state\=open\]\:slide-in-from-left-1\/2[data-state="open"] {
  --tw-enter-translate-x: -50%;
}
.data-\[state\=open\]\:slide-in-from-right[data-state="open"] {
  --tw-enter-translate-x: 100%;
}
.data-\[state\=open\]\:slide-in-from-top[data-state="open"] {
  --tw-enter-translate-y: -100%;
}
.data-\[state\=open\]\:slide-in-from-top-\[48\%\][data-state="open"] {
  --tw-enter-translate-y: -48%;
}
.data-\[state\=open\]\:slide-in-from-top-full[data-state="open"] {
  --tw-enter-translate-y: -100%;
}
.data-\[state\=closed\]\:duration-300[data-state="closed"] {
  animation-duration: 300ms;
}
.data-\[state\=open\]\:duration-500[data-state="open"] {
  animation-duration: 500ms;
}
.data-\[panel-group-direction\=vertical\]\:after\:left-0[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  left: 0px;
}
.data-\[panel-group-direction\=vertical\]\:after\:h-1[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  height: 0.25rem;
}
.data-\[panel-group-direction\=vertical\]\:after\:w-full[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  width: 100%;
}
.data-\[panel-group-direction\=vertical\]\:after\:-translate-y-1\/2[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[panel-group-direction\=vertical\]\:after\:translate-x-0[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\[state\=open\]\:hover\:bg-sidebar-accent:hover[data-state="open"] {
  background-color: hsl(var(--sidebar-accent));
}
.data-\[state\=open\]\:hover\:text-sidebar-accent-foreground:hover[data-state="open"] {
  color: hsl(var(--sidebar-accent-foreground));
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:left-\[calc\(var\(--sidebar-width\)\*-1\)\] {
  left: calc(var(--sidebar-width) * -1);
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:right-\[calc\(var\(--sidebar-width\)\*-1\)\] {
  right: calc(var(--sidebar-width) * -1);
}
.group[data-side="left"] .group-data-\[side\=left\]\:-right-4 {
  right: -1rem;
}
.group[data-side="right"] .group-data-\[side\=right\]\:left-0 {
  left: 0px;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:-mt-8 {
  margin-top: -2rem;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:hidden {
  display: none;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:\!size-8 {
  width: 2rem !important;
  height: 2rem !important;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[--sidebar-width-icon\] {
  width: var(--sidebar-width-icon);
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)_\+_theme\(spacing\.4\)\)\] {
  width: calc(var(--sidebar-width-icon) + 1rem);
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)_\+_theme\(spacing\.4\)_\+2px\)\] {
  width: calc(var(--sidebar-width-icon) + 1rem + 2px);
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:w-0 {
  width: 0px;
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-side="right"] .group-data-\[side\=right\]\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-state="open"] .group-data-\[state\=open\]\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:overflow-hidden {
  overflow: hidden;
}
.group[data-variant="floating"] .group-data-\[variant\=floating\]\:rounded-lg {
  border-radius: var(--radius);
}
.group[data-variant="floating"] .group-data-\[variant\=floating\]\:border {
  border-width: 1px;
}
.group[data-side="left"] .group-data-\[side\=left\]\:border-r {
  border-right-width: 1px;
}
.group[data-side="right"] .group-data-\[side\=right\]\:border-l {
  border-left-width: 1px;
}
.group[data-variant="floating"] .group-data-\[variant\=floating\]\:border-sidebar-border {
  border-color: hsl(var(--sidebar-border));
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:\!p-0 {
  padding: 0px !important;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:\!p-2 {
  padding: 0.5rem !important;
}
.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:opacity-0 {
  opacity: 0;
}
.group[data-variant="floating"] .group-data-\[variant\=floating\]\:shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:after\:left-full::after {
  content: var(--tw-content);
  left: 100%;
}
.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:hover\:bg-sidebar:hover {
  background-color: hsl(var(--sidebar-background));
}
.peer\/menu-button[data-size="default"] ~ .peer-data-\[size\=default\]\/menu-button\:top-1\.5 {
  top: 0.375rem;
}
.peer\/menu-button[data-size="lg"] ~ .peer-data-\[size\=lg\]\/menu-button\:top-2\.5 {
  top: 0.625rem;
}
.peer\/menu-button[data-size="sm"] ~ .peer-data-\[size\=sm\]\/menu-button\:top-1 {
  top: 0.25rem;
}
.peer[data-variant="inset"] ~ .peer-data-\[variant\=inset\]\:min-h-\[calc\(100svh-theme\(spacing\.4\)\)\] {
  min-height: calc(100svh - 1rem);
}
.peer\/menu-button[data-active="true"] ~ .peer-data-\[active\=true\]\/menu-button\:text-sidebar-accent-foreground {
  color: hsl(var(--sidebar-accent-foreground));
}
@supports ((-webkit-backdrop-filter: var(--tw)) or (backdrop-filter: var(--tw))) {

  .supports-\[backdrop-filter\]\:bg-background\/60 {
    background-color: hsl(var(--background) / 0.6);
  }
}
.dark\:border-destructive:is(.dark *) {
  border-color: hsl(var(--destructive));
}
@media (min-width: 640px) {

  .sm\:bottom-0 {
    bottom: 0px;
  }

  .sm\:right-0 {
    right: 0px;
  }

  .sm\:top-auto {
    top: auto;
  }

  .sm\:mt-0 {
    margin-top: 0px;
  }

  .sm\:flex {
    display: flex;
  }

  .sm\:max-w-sm {
    max-width: 24rem;
  }

  .sm\:flex-row {
    flex-direction: row;
  }

  .sm\:flex-col {
    flex-direction: column;
  }

  .sm\:justify-end {
    justify-content: flex-end;
  }

  .sm\:gap-2\.5 {
    gap: 0.625rem;
  }

  .sm\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\:rounded-lg {
    border-radius: var(--radius);
  }

  .sm\:text-left {
    text-align: left;
  }

  .data-\[state\=open\]\:sm\:slide-in-from-bottom-full[data-state="open"] {
    --tw-enter-translate-y: 100%;
  }
}
@media (min-width: 768px) {

  .md\:absolute {
    position: absolute;
  }

  .md\:block {
    display: block;
  }

  .md\:flex {
    display: flex;
  }

  .md\:w-\[var\(--radix-navigation-menu-viewport-width\)\] {
    width: var(--radix-navigation-menu-viewport-width);
  }

  .md\:w-auto {
    width: auto;
  }

  .md\:max-w-\[420px\] {
    max-width: 420px;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .md\:opacity-0 {
    opacity: 0;
  }

  .after\:md\:hidden::after {
    content: var(--tw-content);
    display: none;
  }

  .peer[data-variant="inset"] ~ .md\:peer-data-\[variant\=inset\]\:m-2 {
    margin: 0.5rem;
  }

  .peer[data-state="collapsed"][data-variant="inset"] ~ .md\:peer-data-\[state\=collapsed\]\:peer-data-\[variant\=inset\]\:ml-2 {
    margin-left: 0.5rem;
  }

  .peer[data-variant="inset"] ~ .md\:peer-data-\[variant\=inset\]\:ml-0 {
    margin-left: 0px;
  }

  .peer[data-variant="inset"] ~ .md\:peer-data-\[variant\=inset\]\:rounded-xl {
    border-radius: 0.75rem;
  }

  .peer[data-variant="inset"] ~ .md\:peer-data-\[variant\=inset\]\:shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
@media (min-width: 1024px) {

  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.\[\&\:has\(\[aria-selected\]\)\]\:bg-accent:has([aria-selected]) {
  background-color: hsl(var(--accent));
}
.first\:\[\&\:has\(\[aria-selected\]\)\]\:rounded-l-md:has([aria-selected]):first-child {
  border-top-left-radius: calc(var(--radius) - 2px);
  border-bottom-left-radius: calc(var(--radius) - 2px);
}
.last\:\[\&\:has\(\[aria-selected\]\)\]\:rounded-r-md:has([aria-selected]):last-child {
  border-top-right-radius: calc(var(--radius) - 2px);
  border-bottom-right-radius: calc(var(--radius) - 2px);
}
.\[\&\:has\(\[aria-selected\]\.day-outside\)\]\:bg-accent\/50:has([aria-selected].day-outside) {
  background-color: hsl(var(--accent) / 0.5);
}
.\[\&\:has\(\[aria-selected\]\.day-range-end\)\]\:rounded-r-md:has([aria-selected].day-range-end) {
  border-top-right-radius: calc(var(--radius) - 2px);
  border-bottom-right-radius: calc(var(--radius) - 2px);
}
.\[\&\:has\(\[role\=checkbox\]\)\]\:pr-0:has([role=checkbox]) {
  padding-right: 0px;
}
.\[\&\>button\]\:hidden>button {
  display: none;
}
.\[\&\>span\:last-child\]\:truncate>span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.\[\&\>span\]\:line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.\[\&\>svg\+div\]\:translate-y-\[-3px\]>svg+div {
  --tw-translate-y: -3px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\[\&\>svg\]\:absolute>svg {
  position: absolute;
}
.\[\&\>svg\]\:left-4>svg {
  left: 1rem;
}
.\[\&\>svg\]\:top-4>svg {
  top: 1rem;
}
.\[\&\>svg\]\:size-4>svg {
  width: 1rem;
  height: 1rem;
}
.\[\&\>svg\]\:h-2\.5>svg {
  height: 0.625rem;
}
.\[\&\>svg\]\:h-3>svg {
  height: 0.75rem;
}
.\[\&\>svg\]\:h-3\.5>svg {
  height: 0.875rem;
}
.\[\&\>svg\]\:w-2\.5>svg {
  width: 0.625rem;
}
.\[\&\>svg\]\:w-3>svg {
  width: 0.75rem;
}
.\[\&\>svg\]\:w-3\.5>svg {
  width: 0.875rem;
}
.\[\&\>svg\]\:shrink-0>svg {
  flex-shrink: 0;
}
.\[\&\>svg\]\:text-destructive>svg {
  color: hsl(var(--destructive));
}
.\[\&\>svg\]\:text-foreground>svg {
  color: hsl(var(--foreground));
}
.\[\&\>svg\]\:text-muted-foreground>svg {
  color: hsl(var(--muted-foreground));
}
.\[\&\>svg\]\:text-sidebar-accent-foreground>svg {
  color: hsl(var(--sidebar-accent-foreground));
}
.\[\&\>svg\~\*\]\:pl-7>svg~* {
  padding-left: 1.75rem;
}
.\[\&\>tr\]\:last\:border-b-0:last-child>tr {
  border-bottom-width: 0px;
}
.\[\&\[data-panel-group-direction\=vertical\]\>div\]\:rotate-90[data-panel-group-direction=vertical]>div {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\[\&\[data-state\=open\]\>svg\]\:rotate-180[data-state=open]>svg {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\[\&_\.recharts-cartesian-axis-tick_text\]\:fill-muted-foreground .recharts-cartesian-axis-tick text {
  fill: hsl(var(--muted-foreground));
}
.\[\&_\.recharts-cartesian-grid_line\[stroke\=\'\#ccc\'\]\]\:stroke-border\/50 .recharts-cartesian-grid line[stroke='#ccc'] {
  stroke: hsl(var(--border) / 0.5);
}
.\[\&_\.recharts-curve\.recharts-tooltip-cursor\]\:stroke-border .recharts-curve.recharts-tooltip-cursor {
  stroke: hsl(var(--border));
}
.\[\&_\.recharts-dot\[stroke\=\'\#fff\'\]\]\:stroke-transparent .recharts-dot[stroke='#fff'] {
  stroke: transparent;
}
.\[\&_\.recharts-layer\]\:outline-none .recharts-layer {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.\[\&_\.recharts-polar-grid_\[stroke\=\'\#ccc\'\]\]\:stroke-border .recharts-polar-grid [stroke='#ccc'] {
  stroke: hsl(var(--border));
}
.\[\&_\.recharts-radial-bar-background-sector\]\:fill-muted .recharts-radial-bar-background-sector {
  fill: hsl(var(--muted));
}
.\[\&_\.recharts-rectangle\.recharts-tooltip-cursor\]\:fill-muted .recharts-rectangle.recharts-tooltip-cursor {
  fill: hsl(var(--muted));
}
.\[\&_\.recharts-reference-line_\[stroke\=\'\#ccc\'\]\]\:stroke-border .recharts-reference-line [stroke='#ccc'] {
  stroke: hsl(var(--border));
}
.\[\&_\.recharts-sector\[stroke\=\'\#fff\'\]\]\:stroke-transparent .recharts-sector[stroke='#fff'] {
  stroke: transparent;
}
.\[\&_\.recharts-sector\]\:outline-none .recharts-sector {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.\[\&_\.recharts-surface\]\:outline-none .recharts-surface {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.\[\&_\[cmdk-group-heading\]\]\:px-2 [cmdk-group-heading] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.\[\&_\[cmdk-group-heading\]\]\:py-1\.5 [cmdk-group-heading] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.\[\&_\[cmdk-group-heading\]\]\:text-xs [cmdk-group-heading] {
  font-size: 0.75rem;
  line-height: 1rem;
}
.\[\&_\[cmdk-group-heading\]\]\:font-medium [cmdk-group-heading] {
  font-weight: 500;
}
.\[\&_\[cmdk-group-heading\]\]\:text-muted-foreground [cmdk-group-heading] {
  color: hsl(var(--muted-foreground));
}
.\[\&_\[cmdk-group\]\:not\(\[hidden\]\)_\~\[cmdk-group\]\]\:pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {
  padding-top: 0px;
}
.\[\&_\[cmdk-group\]\]\:px-2 [cmdk-group] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.\[\&_\[cmdk-input-wrapper\]_svg\]\:h-5 [cmdk-input-wrapper] svg {
  height: 1.25rem;
}
.\[\&_\[cmdk-input-wrapper\]_svg\]\:w-5 [cmdk-input-wrapper] svg {
  width: 1.25rem;
}
.\[\&_\[cmdk-input\]\]\:h-12 [cmdk-input] {
  height: 3rem;
}
.\[\&_\[cmdk-item\]\]\:px-2 [cmdk-item] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.\[\&_\[cmdk-item\]\]\:py-3 [cmdk-item] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.\[\&_\[cmdk-item\]_svg\]\:h-5 [cmdk-item] svg {
  height: 1.25rem;
}
.\[\&_\[cmdk-item\]_svg\]\:w-5 [cmdk-item] svg {
  width: 1.25rem;
}
.\[\&_p\]\:leading-relaxed p {
  line-height: 1.625;
}
.\[\&_svg\]\:pointer-events-none svg {
  pointer-events: none;
}
.\[\&_svg\]\:size-4 svg {
  width: 1rem;
  height: 1rem;
}
.\[\&_svg\]\:shrink-0 svg {
  flex-shrink: 0;
}
.\[\&_tr\:last-child\]\:border-0 tr:last-child {
  border-width: 0px;
}
.\[\&_tr\]\:border-b tr {
  border-bottom-width: 1px;
}
[data-side=left][data-collapsible=offcanvas] .\[\[data-side\=left\]\[data-collapsible\=offcanvas\]_\&\]\:-right-2 {
  right: -0.5rem;
}
[data-side=left][data-state=collapsed] .\[\[data-side\=left\]\[data-state\=collapsed\]_\&\]\:cursor-e-resize {
  cursor: e-resize;
}
[data-side=left] .\[\[data-side\=left\]_\&\]\:cursor-w-resize {
  cursor: w-resize;
}
[data-side=right][data-collapsible=offcanvas] .\[\[data-side\=right\]\[data-collapsible\=offcanvas\]_\&\]\:-left-2 {
  left: -0.5rem;
}
[data-side=right][data-state=collapsed] .\[\[data-side\=right\]\[data-state\=collapsed\]_\&\]\:cursor-w-resize {
  cursor: w-resize;
}
[data-side=right] .\[\[data-side\=right\]_\&\]\:cursor-e-resize {
  cursor: e-resize;
}</style></head>
  <body>
    <div id="root"><div data-replit-metadata="client/src/pages/home.tsx:11:4" data-component-name="div" class="min-h-screen bg-background text-foreground"><nav data-replit-metadata="client/src/components/layout/navbar.tsx:7:4" data-component-name="nav" class="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"><div data-replit-metadata="client/src/components/layout/navbar.tsx:8:6" data-component-name="div" class="container mx-auto px-4 h-16 flex items-center justify-between"><a data-replit-metadata="client/src/components/layout/navbar.tsx:9:8" data-component-name="Link" href="/"><a data-replit-metadata="client/src/components/layout/navbar.tsx:10:10" data-component-name="a" class="flex items-center gap-2 font-bold text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" data-replit-metadata="client/src/components/layout/navbar.tsx:11:12" data-component-name="SiRocket" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"></path></svg>ROCKCOIN</a></a><div data-replit-metadata="client/src/components/layout/navbar.tsx:16:8" data-component-name="div" class="hidden md:flex items-center gap-6"><a data-replit-metadata="client/src/components/layout/navbar.tsx:17:10" data-component-name="a" href="#how-it-works" class="hover:text-primary transition-colors">How It Works</a><a data-replit-metadata="client/src/components/layout/navbar.tsx:18:10" data-component-name="a" href="#musicians" class="hover:text-primary transition-colors">For Musicians</a><a data-replit-metadata="client/src/components/layout/navbar.tsx:19:10" data-component-name="a" href="#roadmap" class="hover:text-primary transition-colors">Roadmap</a><a data-replit-metadata="client/src/components/layout/navbar.tsx:20:10" data-component-name="a" href="#contact" class="hover:text-primary transition-colors">Contact</a><a data-replit-metadata="client/src/components/layout/navbar.tsx:21:10" data-component-name="a" href="https://t.me/rockcoin123" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" data-replit-metadata="client/src/components/layout/navbar.tsx:27:12" data-component-name="SiTelegram" class="w-5 h-5 text-primary-foreground" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg></a></div></div></nav><main data-replit-metadata="client/src/pages/home.tsx:13:6" data-component-name="main"><section data-replit-metadata="client/src/components/sections/hero.tsx:8:4" data-component-name="section" class="pt-32 pb-16 px-4"><div data-replit-metadata="client/src/components/sections/hero.tsx:9:6" data-component-name="div" class="container mx-auto text-center"><div data-replit-metadata="client/src/components/sections/hero.tsx:10:8" data-component-name="motion.div" style="opacity: 1; transform: none;"><h1 data-replit-metadata="client/src/components/sections/hero.tsx:15:10" data-component-name="h1" class="text-4xl md:text-6xl font-bold mb-6">Support Musicians with<span data-replit-metadata="client/src/components/sections/hero.tsx:17:12" data-component-name="span" class="text-primary"> ROCKCOIN</span></h1><p data-replit-metadata="client/src/components/sections/hero.tsx:20:10" data-component-name="p" class="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">The first cryptocurrency designed to empower musicians and connect them with fans. Our price grows with every beat sold.</p><div data-replit-metadata="client/src/components/sections/hero.tsx:25:10" data-component-name="div" class="flex flex-col sm:flex-row gap-4 justify-center"><a data-replit-metadata="client/src/components/sections/hero.tsx:27:14" data-component-name="a" href="#musicians" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music w-5 h-5" data-replit-metadata="client/src/components/sections/hero.tsx:28:16" data-component-name="MusicIcon"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>Join as Musician</a><a data-replit-metadata="client/src/components/sections/hero.tsx:33:14" data-component-name="a" href="#price-tracker" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-5 h-5" data-replit-metadata="client/src/components/sections/hero.tsx:34:16" data-component-name="TrendingUpIcon"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>View Price Chart</a><a data-replit-metadata="client/src/components/sections/hero.tsx:39:14" data-component-name="a" href="https://t.me/rockcoin123" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" data-replit-metadata="client/src/components/sections/hero.tsx:44:16" data-component-name="SiTelegram" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>Join Community</a></div></div></div></section><section data-replit-metadata="client/src/components/sections/how-it-works.tsx:30:4" data-component-name="section" id="how-it-works" class="py-16 px-4"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:31:6" data-component-name="div" class="container mx-auto"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:32:8" data-component-name="motion.div" class="text-center mb-12" style="opacity: 1; transform: none;"><h2 data-replit-metadata="client/src/components/sections/how-it-works.tsx:39:10" data-component-name="h2" class="text-3xl font-bold mb-4">How ROCKCOIN Works</h2><p data-replit-metadata="client/src/components/sections/how-it-works.tsx:40:10" data-component-name="p" class="text-muted-foreground max-w-2xl mx-auto">Our unique ecosystem connects musicians with fans through cryptocurrency</p></div><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:45:8" data-component-name="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:47:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:54:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:55:16" data-component-name="CardContent" class="p-6 pt-6 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music2 w-12 h-12 text-primary" data-replit-metadata="client/src/components/sections/how-it-works.tsx:7:8" data-component-name="Music2"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg><h3 data-replit-metadata="client/src/components/sections/how-it-works.tsx:57:18" data-component-name="h3" class="text-xl font-semibold mt-4 mb-2">Musicians Upload Beats</h3><p data-replit-metadata="client/src/components/sections/how-it-works.tsx:58:18" data-component-name="p" class="text-muted-foreground">Artists can upload and sell their beats directly on our platform</p></div></div></div><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:47:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:54:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:55:16" data-component-name="CardContent" class="p-6 pt-6 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins w-12 h-12 text-primary" data-replit-metadata="client/src/components/sections/how-it-works.tsx:12:8" data-component-name="Coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg><h3 data-replit-metadata="client/src/components/sections/how-it-works.tsx:57:18" data-component-name="h3" class="text-xl font-semibold mt-4 mb-2">Fans Buy with ROCKCOIN</h3><p data-replit-metadata="client/src/components/sections/how-it-works.tsx:58:18" data-component-name="p" class="text-muted-foreground">Supporters use ROCKCOIN to purchase beats and support artists</p></div></div></div><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:47:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:54:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:55:16" data-component-name="CardContent" class="p-6 pt-6 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-12 h-12 text-primary" data-replit-metadata="client/src/components/sections/how-it-works.tsx:17:8" data-component-name="TrendingUp"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><h3 data-replit-metadata="client/src/components/sections/how-it-works.tsx:57:18" data-component-name="h3" class="text-xl font-semibold mt-4 mb-2">Price Grows</h3><p data-replit-metadata="client/src/components/sections/how-it-works.tsx:58:18" data-component-name="p" class="text-muted-foreground">Each beat sale increases ROCKCOIN's value, benefiting all holders</p></div></div></div><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:47:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:54:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/how-it-works.tsx:55:16" data-component-name="CardContent" class="p-6 pt-6 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-12 h-12 text-primary" data-replit-metadata="client/src/components/sections/how-it-works.tsx:22:8" data-component-name="Users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h3 data-replit-metadata="client/src/components/sections/how-it-works.tsx:57:18" data-component-name="h3" class="text-xl font-semibold mt-4 mb-2">Community Growth</h3><p data-replit-metadata="client/src/components/sections/how-it-works.tsx:58:18" data-component-name="p" class="text-muted-foreground">A growing ecosystem of musicians and supporters</p></div></div></div></div></div></section><section data-replit-metadata="client/src/components/sections/musicians.tsx:16:4" data-component-name="section" id="musicians" class="py-16 px-4 bg-accent/5"><div data-replit-metadata="client/src/components/sections/musicians.tsx:17:6" data-component-name="div" class="container mx-auto"><div data-replit-metadata="client/src/components/sections/musicians.tsx:18:8" data-component-name="div" class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div data-replit-metadata="client/src/components/sections/musicians.tsx:19:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><h2 data-replit-metadata="client/src/components/sections/musicians.tsx:25:12" data-component-name="h2" class="text-3xl font-bold mb-4">For Musicians</h2><p data-replit-metadata="client/src/components/sections/musicians.tsx:26:12" data-component-name="p" class="text-muted-foreground mb-8">Join the revolution in music monetization. ROCKCOIN provides a new way to connect with fans and earn from your music.</p><ul data-replit-metadata="client/src/components/sections/musicians.tsx:31:12" data-component-name="ul" class="space-y-4 mb-8"><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Direct fan support through cryptocurrency</span></li><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Increased visibility in the music community</span></li><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Additional revenue stream from beat sales</span></li><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Grow with the ROCKCOIN ecosystem</span></li><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Access to dedicated musician features</span></li><li data-replit-metadata="client/src/components/sections/musicians.tsx:33:14" data-component-name="motion.li" class="flex items-center gap-3" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary" data-replit-metadata="client/src/components/sections/musicians.tsx:41:18" data-component-name="Check"><path d="M20 6 9 17l-5-5"></path></svg><span data-replit-metadata="client/src/components/sections/musicians.tsx:42:18" data-component-name="span">Connect with a supportive community</span></li></ul><button data-replit-metadata="client/src/components/sections/musicians.tsx:47:12" data-component-name="Button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Start Earning with ROCKCOIN</button></div><div data-replit-metadata="client/src/components/sections/musicians.tsx:50:10" data-component-name="motion.div" class="relative aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/musicians.tsx:57:12" data-component-name="div" class="absolute inset-0 flex items-center justify-center"><div data-replit-metadata="client/src/components/sections/musicians.tsx:58:14" data-component-name="div" class="w-32 h-32 rounded-full bg-primary/20 animate-pulse"></div></div><div data-replit-metadata="client/src/components/sections/musicians.tsx:60:12" data-component-name="div" class="text-6xl">🎸</div></div></div></div></section><section data-replit-metadata="client/src/components/sections/price-tracker.tsx:55:4" data-component-name="section" id="price-tracker" class="py-16 px-4"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:56:6" data-component-name="div" class="container mx-auto"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:57:8" data-component-name="motion.div" class="space-y-8" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:64:10" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:65:12" data-component-name="CardHeader" class="flex flex-col space-y-1.5 p-6"><h3 data-replit-metadata="client/src/components/sections/price-tracker.tsx:66:14" data-component-name="CardTitle" class="text-2xl font-semibold leading-none tracking-tight">ROCKCOIN Price Chart</h3></div><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:68:12" data-component-name="CardContent" class="p-6 pt-0"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:69:14" data-component-name="div" class="h-[300px] mt-4"><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 122px;"><svg class="recharts-surface" width="122" height="300" viewBox="0 0 122 300" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="65" y="5" height="260" width="52"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="52" height="30" x="65" y="265" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="265" x2="117" y2="265"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="52" height="30" x="65" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="75.4" y1="271" x2="75.4" y2="265"></line><text orientation="bottom" width="52" height="30" stroke="none" x="75.4" y="273" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="75.4" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="52" height="30" x="65" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="117" y1="271" x2="117" y2="265"></line><text orientation="bottom" width="52" height="30" stroke="none" x="110.0859375" y="273" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="110.0859375" dy="0.71em">Jun</tspan></text></g></g></g><g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="5" x2="65" y2="265"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="265" x2="65" y2="265"></line><text orientation="left" width="60" height="260" stroke="none" x="57" y="265" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="200" x2="65" y2="200"></line><text orientation="left" width="60" height="260" stroke="none" x="57" y="200" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0.0015</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="135" x2="65" y2="135"></line><text orientation="left" width="60" height="260" stroke="none" x="57" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0.003</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="70.00000000000003" x2="65" y2="70.00000000000003"></line><text orientation="left" width="60" height="260" stroke="none" x="57" y="70.00000000000003" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0.0045</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="5" x2="65" y2="5"></line><text orientation="left" width="60" height="260" stroke="none" x="57" y="12" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0.006</tspan></text></g></g></g><g class="recharts-layer recharts-line"><path stroke="hsl(var(--primary))" stroke-width="2" fill="none" width="52" height="260" class="recharts-curve recharts-line-curve" d="M65,221.667C68.467,207.222,71.933,192.778,75.4,178.333C78.867,163.889,82.333,135,85.8,135C89.267,135,92.733,156.667,96.2,156.667C99.667,156.667,103.133,106.111,106.6,91.667C110.067,77.222,113.533,73.611,117,70"></path><g class="recharts-layer"></g><g class="recharts-layer recharts-line-dots"><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="65" cy="221.66666666666669" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="75.4" cy="178.33333333333334" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="85.8" cy="135" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="96.2" cy="156.66666666666666" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="106.6" cy="91.66666666666667" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="hsl(var(--primary))" stroke-width="2" fill="#fff" width="52" height="260" cx="117" cy="70.00000000000003" class="recharts-dot recharts-line-dot"></circle></g></g></svg><div tabindex="-1" class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(75px, 10px);"><div class="recharts-default-tooltip" style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"><p class="recharts-tooltip-label" style="margin: 0px;">Jan</p></div></div></div></div></div></div></div><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:87:10" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:88:12" data-component-name="CardHeader" class="flex flex-col space-y-1.5 p-6"><h3 data-replit-metadata="client/src/components/sections/price-tracker.tsx:89:14" data-component-name="CardTitle" class="text-2xl font-semibold leading-none tracking-tight">Beat Sales Across Platforms</h3></div><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:91:12" data-component-name="CardContent" class="p-6 pt-0"><div data-replit-metadata="client/src/components/sections/price-tracker.tsx:92:14" data-component-name="div" class="h-[300px] mt-4"><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 122px;"><svg class="recharts-surface" width="122" height="300" viewBox="0 0 122 300" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts4-clip"><rect x="65" y="5" height="164" width="52"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="52" height="30" x="65" y="169" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="169" x2="117" y2="169"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="52" height="30" x="65" y="169" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="78" y1="175" x2="78" y2="169"></line><text orientation="bottom" width="52" height="30" stroke="none" x="78" y="177" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="78" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="52" height="30" x="65" y="169" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="112.66666666666666" y1="175" x2="112.66666666666666" y2="169"></line><text orientation="bottom" width="52" height="30" stroke="none" x="110.0859375" y="177" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="110.0859375" dy="0.71em">Jun</tspan></text></g></g></g><g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="5" x2="65" y2="169"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="169" x2="65" y2="169"></line><text orientation="left" width="60" height="164" stroke="none" x="57" y="169" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">0</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="128" x2="65" y2="128"></line><text orientation="left" width="60" height="164" stroke="none" x="57" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">75</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="87" x2="65" y2="87"></line><text orientation="left" width="60" height="164" stroke="none" x="57" y="87" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">150</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="46" x2="65" y2="46"></line><text orientation="left" width="60" height="164" stroke="none" x="57" y="46" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">225</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="164" x="5" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="5" x2="65" y2="5"></line><text orientation="left" width="60" height="164" stroke="none" x="57" y="12" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#666"><tspan x="57" dy="0.355em">300</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path x="65.86666666666666" y="103.39999999999999" width="2" height="65.60000000000001" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 65.86666666666666,103.39999999999999 h 2 v 65.60000000000001 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="74.53333333333333" y="87" width="2" height="82" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 74.53333333333333,87 h 2 v 82 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="83.19999999999999" y="70.60000000000001" width="2" height="98.39999999999999" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 83.19999999999999,70.60000000000001 h 2 v 98.39999999999999 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="91.86666666666667" y="59.66666666666668" width="2" height="109.33333333333331" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 91.86666666666667,59.66666666666668 h 2 v 109.33333333333331 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="100.5333333333333" y="32.33333333333333" width="2" height="136.66666666666669" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 100.5333333333333,32.33333333333333 h 2 v 136.66666666666669 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="109.20000000000005" y="5" width="2" height="164" radius="0" name="Beatstars" fill="hsl(var(--primary))" class="recharts-rectangle" d="M 109.20000000000005,5 h 2 v 164 h -2 Z"></path></g></g></g><g class="recharts-layer"></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path x="67.86666666666666" y="122.53333333333335" width="2" height="46.466666666666654" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 67.86666666666666,122.53333333333335 h 2 v 46.466666666666654 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="76.53333333333333" y="117.06666666666666" width="2" height="51.93333333333334" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 76.53333333333333,117.06666666666666 h 2 v 51.93333333333334 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="85.19999999999999" y="108.86666666666666" width="2" height="60.13333333333334" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 85.19999999999999,108.86666666666666 h 2 v 60.13333333333334 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="93.86666666666667" y="97.93333333333334" width="2" height="71.06666666666666" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 93.86666666666667,97.93333333333334 h 2 v 71.06666666666666 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="102.5333333333333" y="81.53333333333335" width="2" height="87.46666666666665" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 102.5333333333333,81.53333333333335 h 2 v 87.46666666666665 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="111.20000000000005" y="65.13333333333334" width="2" height="103.86666666666666" radius="0" name="SoundCloud" fill="hsl(var(--secondary))" class="recharts-rectangle" d="M 111.20000000000005,65.13333333333334 h 2 v 103.86666666666666 h -2 Z"></path></g></g></g><g class="recharts-layer"></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path x="69.86666666666666" y="144.4" width="2" height="24.599999999999994" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 69.86666666666666,144.4 h 2 v 24.599999999999994 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="78.5333333333333" y="136.20000000000002" width="2" height="32.79999999999998" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 78.5333333333333,136.20000000000002 h 2 v 32.79999999999998 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="87.19999999999999" y="128" width="2" height="41" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 87.19999999999999,128 h 2 v 41 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="95.86666666666667" y="119.8" width="2" height="49.2" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 95.86666666666667,119.8 h 2 v 49.2 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="104.5333333333333" y="108.86666666666666" width="2" height="60.13333333333334" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 104.5333333333333,108.86666666666666 h 2 v 60.13333333333334 h -2 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path x="113.20000000000005" y="92.46666666666665" width="2" height="76.53333333333335" radius="0" name="Bandcamp" fill="hsl(var(--accent))" class="recharts-rectangle" d="M 113.20000000000005,92.46666666666665 h 2 v 76.53333333333335 h -2 Z"></path></g></g></g><g class="recharts-layer"></g></g></svg><div class="recharts-legend-wrapper" style="position: absolute; width: 112px; height: auto; left: 5px; bottom: 5px;"><ul class="recharts-default-legend" style="padding: 0px; margin: 0px; text-align: center;"><li class="recharts-legend-item legend-item-0" style="display: inline-block; margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><title></title><desc></desc><path stroke="none" fill="hsl(var(--primary))" d="M0,4h32v24h-32z" class="recharts-legend-icon"></path></svg><span class="recharts-legend-item-text" style="color: hsl(var(--primary));">Beatstars</span></li><li class="recharts-legend-item legend-item-1" style="display: inline-block; margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><title></title><desc></desc><path stroke="none" fill="hsl(var(--secondary))" d="M0,4h32v24h-32z" class="recharts-legend-icon"></path></svg><span class="recharts-legend-item-text" style="color: hsl(var(--secondary));">SoundCloud</span></li><li class="recharts-legend-item legend-item-2" style="display: inline-block; margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><title></title><desc></desc><path stroke="none" fill="hsl(var(--accent))" d="M0,4h32v24h-32z" class="recharts-legend-icon"></path></svg><span class="recharts-legend-item-text" style="color: hsl(var(--accent));">Bandcamp</span></li></ul></div><div tabindex="-1" class="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-bottom" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(129.667px, 10px);"><div class="recharts-default-tooltip" style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"><p class="recharts-tooltip-label" style="margin: 0px;">Jan</p></div></div></div></div></div></div></div></div></div></section><section data-replit-metadata="client/src/components/sections/roadmap.tsx:45:4" data-component-name="section" id="roadmap" class="py-16 px-4 bg-accent/5"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:46:6" data-component-name="div" class="container mx-auto"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:47:8" data-component-name="motion.div" class="text-center mb-12" style="opacity: 1; transform: none;"><h2 data-replit-metadata="client/src/components/sections/roadmap.tsx:54:10" data-component-name="h2" class="text-3xl font-bold mb-4">Project Roadmap</h2><p data-replit-metadata="client/src/components/sections/roadmap.tsx:55:10" data-component-name="p" class="text-muted-foreground max-w-2xl mx-auto">Our journey to revolutionize music industry support through cryptocurrency</p></div><div data-replit-metadata="client/src/components/sections/roadmap.tsx:60:8" data-component-name="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:62:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:69:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:70:16" data-component-name="CardContent" class="p-6 pt-6"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:71:18" data-component-name="div" class="text-primary font-semibold mb-2">Q2 2024</div><h3 data-replit-metadata="client/src/components/sections/roadmap.tsx:72:18" data-component-name="h3" class="text-xl font-semibold mb-4">Launch Phase</h3><ul data-replit-metadata="client/src/components/sections/roadmap.tsx:73:18" data-component-name="ul" class="space-y-2"><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Initial ROCKCOIN release</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Community building</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Website launch</li></ul></div></div></div><div data-replit-metadata="client/src/components/sections/roadmap.tsx:62:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:69:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:70:16" data-component-name="CardContent" class="p-6 pt-6"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:71:18" data-component-name="div" class="text-primary font-semibold mb-2">Q3 2024</div><h3 data-replit-metadata="client/src/components/sections/roadmap.tsx:72:18" data-component-name="h3" class="text-xl font-semibold mb-4">Platform Development</h3><ul data-replit-metadata="client/src/components/sections/roadmap.tsx:73:18" data-component-name="ul" class="space-y-2"><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Musician onboarding</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Beat marketplace beta</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Mobile app development</li></ul></div></div></div><div data-replit-metadata="client/src/components/sections/roadmap.tsx:62:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:69:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:70:16" data-component-name="CardContent" class="p-6 pt-6"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:71:18" data-component-name="div" class="text-primary font-semibold mb-2">Q4 2024</div><h3 data-replit-metadata="client/src/components/sections/roadmap.tsx:72:18" data-component-name="h3" class="text-xl font-semibold mb-4">Ecosystem Growth</h3><ul data-replit-metadata="client/src/components/sections/roadmap.tsx:73:18" data-component-name="ul" class="space-y-2"><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Exchange listings</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Partnership announcements</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Community events</li></ul></div></div></div><div data-replit-metadata="client/src/components/sections/roadmap.tsx:62:10" data-component-name="motion.div" style="opacity: 1; transform: none;"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:69:14" data-component-name="Card" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:70:16" data-component-name="CardContent" class="p-6 pt-6"><div data-replit-metadata="client/src/components/sections/roadmap.tsx:71:18" data-component-name="div" class="text-primary font-semibold mb-2">Q1 2025</div><h3 data-replit-metadata="client/src/components/sections/roadmap.tsx:72:18" data-component-name="h3" class="text-xl font-semibold mb-4">Expansion</h3><ul data-replit-metadata="client/src/components/sections/roadmap.tsx:73:18" data-component-name="ul" class="space-y-2"><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Global marketing campaign</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Advanced features rollout</li><li data-replit-metadata="client/src/components/sections/roadmap.tsx:75:18" data-component-name="li" class="text-muted-foreground">• Major partnerships</li></ul></div></div></div></div></div></section><section data-replit-metadata="client/src/components/sections/contact.tsx:53:4" data-component-name="section" id="contact" class="py-16 px-4"><div data-replit-metadata="client/src/components/sections/contact.tsx:54:6" data-component-name="div" class="container mx-auto max-w-md"><div data-replit-metadata="client/src/components/sections/contact.tsx:55:8" data-component-name="motion.div" class="text-center mb-8" style="opacity: 1; transform: none;"><h2 data-replit-metadata="client/src/components/sections/contact.tsx:62:10" data-component-name="h2" class="text-3xl font-bold mb-4">Contact Us</h2><p data-replit-metadata="client/src/components/sections/contact.tsx:63:10" data-component-name="p" class="text-muted-foreground">Have questions about ROCKCOIN? We're here to help!</p></div><div data-replit-metadata="client/src/components/sections/contact.tsx:68:8" data-component-name="motion.div" style="opacity: 1; transform: none;"><form data-replit-metadata="client/src/components/sections/contact.tsx:75:12" data-component-name="form" class="space-y-6"><div data-replit-metadata="client/src/components/sections/contact.tsx:80:16" data-component-name="FormItem" class="space-y-2"><label data-replit-metadata="client/src/components/sections/contact.tsx:81:20" data-component-name="FormLabel" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":r0:-form-item">Name</label><input data-replit-metadata="client/src/components/sections/contact.tsx:83:22" data-component-name="Input" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" name="name" id=":r0:-form-item" aria-describedby=":r0:-form-item-description" aria-invalid="false" value=""></div><div data-replit-metadata="client/src/components/sections/contact.tsx:94:16" data-component-name="FormItem" class="space-y-2"><label data-replit-metadata="client/src/components/sections/contact.tsx:95:20" data-component-name="FormLabel" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":r1:-form-item">Email</label><input data-replit-metadata="client/src/components/sections/contact.tsx:97:22" data-component-name="Input" type="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="your@email.com" name="email" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" aria-invalid="false" value=""></div><div data-replit-metadata="client/src/components/sections/contact.tsx:108:16" data-component-name="FormItem" class="space-y-2"><label data-replit-metadata="client/src/components/sections/contact.tsx:109:20" data-component-name="FormLabel" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":r2:-form-item">Message</label><textarea data-replit-metadata="client/src/components/sections/contact.tsx:111:22" data-component-name="Textarea" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your message" name="message" id=":r2:-form-item" aria-describedby=":r2:-form-item-description" aria-invalid="false"></textarea></div><button data-replit-metadata="client/src/components/sections/contact.tsx:118:14" data-component-name="Button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">Send Message</button></form></div></div></section></main></div><div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events: none;"><ol tabindex="-1" data-replit-metadata="client/src/components/ui/toaster.tsx:30:6" data-component-name="ToastViewport" class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"></ol></div></div>
    <script type="module" src="/src/main.tsx?v=ta4Qy8UTvUjTul8Wp99G3"></script>
  
<div class="replit-beacon-tooltip" role="tooltip"></div><span id="recharts_measurement_span" aria-hidden="true" style="position: absolute; top: -20000px; left: 0px; padding: 0px; margin: 0px; border: none; white-space: pre; font-size: 16px; letter-spacing: normal;">75</span><div id="veepn-guard-alert"></div><style>@font-face{font-family:FigtreeVF;src:url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2 supports variations"),url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2-variations");font-weight:100 1000;font-display:swap}</style><div id="veepn-breach-alert"></div><style>@font-face{font-family:FigtreeVF;src:url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2 supports variations"),url(chrome-extension://majdfhpaihoncoakbjgbdhglocklcgno/fonts/FigtreeVF.woff2) format("woff2-variations");font-weight:100 1000;font-display:swap}</style></body></html>
