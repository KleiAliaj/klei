// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGLogo(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 128 128",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m64 0c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64zm0 14c-27.5 0-50 22.5-50 50s22.5 50 50 50 50-22.5 50-50-22.5-50-50-50zm16 37.2 31.36 31.36c2.56-5.76-1.988041 33.298402-47.0168091 33.298402-45.0287682 0-49.6231909-37.138402-47.0631909-30.738402l21.12-21.12 14.72 14.08zm-1.0123967 26.8-14.9876033 15h30z"
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

var make = SVGLogo;

export {
  make ,
  
}
/* react Not a pure module */
