// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function ViewWithGradient(Props) {
  var color = Props.color;
  var color2 = Props.color2;
  var children = Props.children;
  return React.createElement("div", {
              style: {
                background: "linear-gradient(0.45turn, " + (color + (" 10%, " + (color2 + " 110%)"))),
                display: "flex",
                overflow: "hidden",
                borderRadius: "6px",
                flex: "1 1 auto",
                flexDirection: "column"
              }
            }, children);
}

var make = ViewWithGradient;

export {
  make ,
  
}
/* react Not a pure module */
