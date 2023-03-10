// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGMarkdown(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 30 30",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m26.0718281 17.2694375h-24.05987498c-1.08981249 0-2.01195312-.9220313-2.01195312-2.0119531v-13.24553128c0-1.08981249.92214063-2.01195312 2.01195312-2.01195312h23.97609378c1.0898125 0 2.0119531.92214063 2.0119531 2.01195312v13.24553128c0 1.0898125-.8383594 2.0119531-1.9281719 2.0119531zm-24.05987498-15.92817187c-.33534374 0-.67068749.33534375-.67068749.6706875v13.24553127c0 .419125.33534375.6706875.67068749.6706875h23.97609378c.419125 0 .6706875-.3353438.6706875-.6706875v-13.24553127c0-.419125-.3353438-.6706875-.6706875-.6706875zm2.01195313 11.90426557v-9.22162495h2.68264062l2.68264063 3.3534375 2.6826406-3.3534375h2.6826406v9.22162495h-2.6826406v-5.28149995l-2.6826406 3.35343745-2.68264063-3.35343745v5.28149995zm16.85031245 0-4.0239062-4.44314057h2.6826406v-4.77848438h2.6826406v4.69470312h2.6826407l-4.0239063 4.52692183z",
          transform: "translate(1 6)"
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

var make = SVGMarkdown;

export {
  make ,
  
}
/* react Not a pure module */
