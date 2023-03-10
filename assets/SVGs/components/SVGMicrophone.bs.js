// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGMicrophone(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 30 30",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m15 2c-1.657 0-3 1.343-3 3v12c0 1.657 1.343 3 3 3s3-1.343 3-3v-12c0-1.657-1.343-3-3-3zm-6.015625 9.986328a1.0001 1.0001 0 0 0 -.984375 1.013672v4c0 3.513997 2.617426 6.430774 6 6.919922v2.080078h-3a1.0001 1.0001 0 1 0 0 2h3.832031a1.0001 1.0001 0 0 0 .326172 0h3.841797a1.0001 1.0001 0 1 0 0-2h-3v-2.080078c3.382574-.489148 6-3.405925 6-6.919922v-4a1.0001 1.0001 0 1 0 -2 0v4c0 2.735431-2.166484 4.933922-4.886719 4.994141a1.0001 1.0001 0 0 0 -.128906-.007813 1.0001 1.0001 0 0 0 -.109375.007813c-2.71471-.066301-4.875-2.262655-4.875-4.994141v-4a1.0001 1.0001 0 0 0 -1.015625-1.013672z"
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

var make = SVGMicrophone;

export {
  make ,
  
}
/* react Not a pure module */
