// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGDevJavascriptIcon(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 30 30",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m24 4h-18c-1.105 0-2 .895-2 2v18c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2v-18c0-1.105-.895-2-2-2zm-9 16.38c0 1.777-1.09 2.773-2.9 2.773-1.788 0-2.927-1.045-2.927-2.735h1.937c.005.627.379 1.023.957 1.023.594 0 .913-.374.913-1.078v-5.365h2.02zm5.481 2.773c-2.009 0-3.273-.946-3.307-2.476h1.926c.049.578.626.946 1.463.946.754 0 1.272-.363 1.272-.886 0-.44-.347-.677-1.255-.858l-1.045-.209c-1.453-.275-2.201-1.067-2.201-2.316 0-1.552 1.244-2.57 3.158-2.57 1.86 0 3.147 1.007 3.18 2.476h-1.865c-.044-.561-.578-.952-1.289-.952-.709 0-1.176.336-1.176.864 0 .435.352.688 1.188.853l1.022.198c1.569.303 2.273 1.012 2.273 2.272.001 1.657-1.264 2.658-3.344 2.658z"
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

var make = SVGDevJavascriptIcon;

export {
  make ,
  
}
/* react Not a pure module */
