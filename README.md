# designkit-tooltips
1.0.0

A Sass module for tooltips used in RightScale apps.

## Install
```
npm i --save designkit-tooltips
```

## CSS

```css
.tooltipped {
  position: relative;
}

.tooltipped::after {
  position: absolute;
  z-index: 1000000;
  display: none;
  padding: 0.5em 0.75em;
  font: normal normal 11px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  color: #fff;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: break-word;
  white-space: pre;
  pointer-events: none;
  content: attr(aria-label);
  background: #1b1f23;
  border-radius: 3px;
  opacity: 0;
}

.tooltipped::before {
  position: absolute;
  z-index: 1000001;
  display: none;
  width: 0;
  height: 0;
  color: #1b1f23;
  pointer-events: none;
  content: "";
  border: 6px solid transparent;
  opacity: 0;
}

@-webkit-keyframes tooltip-appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes tooltip-appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tooltipped:hover::before, .tooltipped:hover::after,
.tooltipped:active::before,
.tooltipped:active::after,
.tooltipped:focus::before,
.tooltipped:focus::after {
  display: inline-block;
  text-decoration: none;
  -webkit-animation-name: tooltip-appear;
          animation-name: tooltip-appear;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

.tooltipped-no-delay:hover::before, .tooltipped-no-delay:hover::after,
.tooltipped-no-delay:active::before,
.tooltipped-no-delay:active::after,
.tooltipped-no-delay:focus::before,
.tooltipped-no-delay:focus::after {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}

.tooltipped-multiline:hover::after,
.tooltipped-multiline:active::after,
.tooltipped-multiline:focus::after {
  display: table-cell;
}

.tooltipped-s::after,
.tooltipped-se::after,
.tooltipped-sw::after {
  top: 100%;
  right: 50%;
  margin-top: 6px;
}

.tooltipped-s::before,
.tooltipped-se::before,
.tooltipped-sw::before {
  top: auto;
  right: 50%;
  bottom: -7px;
  margin-right: -6px;
  border-bottom-color: #1b1f23;
}

.tooltipped-se::after {
  right: auto;
  left: 50%;
  margin-left: -16px;
}

.tooltipped-sw::after {
  margin-right: -16px;
}

.tooltipped-n::after,
.tooltipped-ne::after,
.tooltipped-nw::after {
  right: 50%;
  bottom: 100%;
  margin-bottom: 6px;
}

.tooltipped-n::before,
.tooltipped-ne::before,
.tooltipped-nw::before {
  top: -7px;
  right: 50%;
  bottom: auto;
  margin-right: -6px;
  border-top-color: #1b1f23;
}

.tooltipped-ne::after {
  right: auto;
  left: 50%;
  margin-left: -16px;
}

.tooltipped-nw::after {
  margin-right: -16px;
}

.tooltipped-s::after,
.tooltipped-n::after {
  -webkit-transform: translateX(50%);
          transform: translateX(50%);
}

.tooltipped-w::after {
  right: 100%;
  bottom: 50%;
  margin-right: 6px;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.tooltipped-w::before {
  top: 50%;
  bottom: 50%;
  left: -7px;
  margin-top: -6px;
  border-left-color: #1b1f23;
}

.tooltipped-e::after {
  bottom: 50%;
  left: 100%;
  margin-left: 6px;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.tooltipped-e::before {
  top: 50%;
  right: -7px;
  bottom: 50%;
  margin-top: -6px;
  border-right-color: #1b1f23;
}

.tooltipped-align-right-1::after,
.tooltipped-align-right-2::after {
  right: 0;
  margin-right: 0;
}

.tooltipped-align-right-1::before {
  right: 10px;
}

.tooltipped-align-right-2::before {
  right: 15px;
}

.tooltipped-align-left-1::after,
.tooltipped-align-left-2::after {
  left: 0;
  margin-left: 0;
}

.tooltipped-align-left-1::before {
  left: 5px;
}

.tooltipped-align-left-2::before {
  left: 10px;
}

.tooltipped-multiline::after {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  border-collapse: separate;
}

.tooltipped-multiline.tooltipped-s::after, .tooltipped-multiline.tooltipped-n::after {
  right: auto;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

.tooltipped-multiline.tooltipped-w::after, .tooltipped-multiline.tooltipped-e::after {
  right: 100%;
}

@media screen and (min-width: 0\0) {
  .tooltipped-multiline::after {
    width: 250px;
  }
}

.tooltipped-sticky::before, .tooltipped-sticky::after {
  display: inline-block;
  opacity: 1;
}

.tooltipped-sticky.tooltipped-multiline::after {
  display: table-cell;
  opacity: 1;
}

```

## Author

Jason Melgoza

## License

MIT
