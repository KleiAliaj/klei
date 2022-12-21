// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNative from "react-native";

function ImageFromUri(Props) {
  var uri = Props.uri;
  var resizeMode = Props.resizeMode;
  var style = Props.style;
  var tmp = {
    defaultSource: {
      uri: uri
    },
    source: {
      uri: uri
    }
  };
  if (resizeMode !== undefined) {
    tmp.resizeMode = Caml_option.valFromOption(resizeMode);
  }
  if (style !== undefined) {
    tmp.style = Caml_option.valFromOption(style);
  }
  return React.createElement(ReactNative.Image, tmp);
}

var make = ImageFromUri;

export {
  make ,
  
}
/* react Not a pure module */
