// Generated by ReScript, PLEASE EDIT WITH CARE

import * as T from "../T.bs.js";
import * as Font from "./shareable/Font.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as ReactNative from "react-native";
import * as UnderlinedTextLink from "./UnderlinedTextLink.bs.js";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";

function TalkPreview(Props) {
  var item = Props.item;
  var theme = Curry._2(T.useTheme, undefined, undefined);
  var href = "/talk/" + (item.id + "/");
  var conference = item.conference;
  var lang = item.lang;
  return React.createElement(SpacedView$ReactMultiversal.make, {
              horizontal: /* None */7,
              children: React.createElement(ReactNative.Text, {
                    children: null,
                    style: [
                      Font.ios.title3,
                      theme.styles.text
                    ]
                  }, React.createElement(ReactNative.Text, {
                        children: "•"
                      }), React.createElement(Spacer$ReactMultiversal.make, {
                        size: /* S */4
                      }), React.createElement(UnderlinedTextLink.make, {
                        href: href,
                        children: null
                      }, item.title, React.createElement("small", undefined, conference !== null ? React.createElement(ReactNative.Text, {
                                  children: " @ " + conference
                                }) : null)), React.createElement(Spacer$ReactMultiversal.make, {
                        size: /* S */4
                      }), lang !== null ? React.createElement(ReactNative.Text, {
                          children: "[" + (lang + "] ")
                        }) : null),
              key: item.id
            });
}

var make = TalkPreview;

export {
  make ,
  
}
/* T Not a pure module */
