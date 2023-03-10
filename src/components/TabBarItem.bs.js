// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as ReactNative from "react-native";

var styles = ReactNative.StyleSheet.create({
      item: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      },
      text: {
        fontSize: 10,
        flexShrink: 1,
        marginTop: 1.5
      }
    });

function TabBarItem(Props) {
  var text = Props.text;
  var icon = Props.icon;
  var isActive = Props.isActive;
  var colorActive = Props.colorActive;
  var colorInactive = Props.colorInactive;
  return React.createElement(ReactNative.View, {
              style: styles.item,
              children: null
            }, Curry._4(icon, 24, 24, isActive ? colorActive : colorInactive, undefined), React.createElement(ReactNative.Text, {
                  children: text,
                  ellipsizeMode: "tail",
                  numberOfLines: 1,
                  style: [
                    styles.text,
                    isActive ? ({
                          color: colorActive
                        }) : ({
                          color: colorInactive
                        })
                  ]
                }));
}

var make = TabBarItem;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
