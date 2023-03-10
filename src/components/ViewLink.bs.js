// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as TextLink from "./TextLink.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function ViewLink(Props) {
  var accessibilityLabel = Props.accessibilityLabel;
  var href = Props.href;
  var styl = Props.style;
  var activeStyle = Props.activeStyle;
  var children = Props.children;
  var onPress = Props.onPress;
  var tmp = {
    children: children,
    href: href,
    style: [
      {
        display: "flex",
        flexDirection: "column"
      },
      styl
    ]
  };
  if (accessibilityLabel !== undefined) {
    tmp.accessibilityLabel = accessibilityLabel;
  }
  if (activeStyle !== undefined) {
    tmp.activeStyle = Caml_option.valFromOption(activeStyle);
  }
  if (onPress !== undefined) {
    tmp.onPress = Caml_option.valFromOption(onPress);
  }
  return React.createElement(TextLink.make, tmp);
}

var make = ViewLink;

export {
  make ,
  
}
/* react Not a pure module */
