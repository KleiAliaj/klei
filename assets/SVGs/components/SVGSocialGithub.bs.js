// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGSocialGithub(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 16 16",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m8 0c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38a8.013 8.013 0 0 0 5.45-7.59c0-4.42-3.58-8-8-8z",
          fillRule: "evenodd"
        })
  };
  if (style !== undefined) {
    tmp.style = Caml_option.valFromOption(style);
  }
  if (width !== undefined) {
    tmp.width = Caml_option.valFromOption(width);
  }
  if (height !== undefined) {
    tmp.height = Caml_option.valFromOption(height);
  }
  if (fill !== undefined) {
    tmp.fill = Caml_option.valFromOption(fill);
  }
  if (stroke !== undefined) {
    tmp.stroke = Caml_option.valFromOption(stroke);
  }
  return React.createElement(ReactNativeSvg.Svg, tmp);
}

var make = SVGSocialGithub;

export {
  make ,
  
}
/* react Not a pure module */
