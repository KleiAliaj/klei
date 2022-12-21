// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGDevPhp(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 256 134",
    preserveAspectRatio: "xMinYMin meet",
    children: React.createElement(ReactNativeSvg.G, {
          children: null,
          fillRule: "evenodd"
        }, React.createElement(ReactNativeSvg.Ellipse, {
              cx: 128,
              cy: 66.63,
              rx: 128,
              ry: 66.63,
              fill: "#8993be"
            }), React.createElement(ReactNativeSvg.Path, {
              d: "m35.945 106.082 14.028-71.014h32.437c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438h-15.779l-3.507 18.411zm23.671-31.561 4.384-26.302h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zm40.576 13.15 14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014h-13.151l-7.89 39.452zm53.233 18.411 14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411zm23.67-31.561 4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z",
              fill: "#232531"
            }))
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

var make = SVGDevPhp;

export {
  make ,
  
}
/* react Not a pure module */
