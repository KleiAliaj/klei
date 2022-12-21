// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactNative from "react-native";
import * as Style$ReactNative from "rescript-react-native/src/apis/Style.bs.js";

var styles = ReactNative.StyleSheet.create({
      container: {
        overflow: "hidden"
      }
    });

function PlaceholderWithAspectRatio(Props) {
  var ratio = Props.ratio;
  var children = Props.children;
  return React.createElement(ReactNative.View, {
              pointerEvents: "box-none",
              style: {
                paddingBottom: Style$ReactNative.pct(100 * ratio),
                width: Style$ReactNative.pct(100)
              },
              children: children
            });
}

var make = PlaceholderWithAspectRatio;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
