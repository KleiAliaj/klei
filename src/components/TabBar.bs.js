// Generated by ReScript, PLEASE EDIT WITH CARE

import * as T from "../T.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Consts from "../Consts.bs.js";
import * as ViewLink from "./ViewLink.bs.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Router from "next/router";
import * as ReactNative from "react-native";
import * as TabBarItem$ReactMultiversal from "react-multiversal/src/TabBarItem.bs.js";
import * as TinyColor$RescriptTinycolor from "rescript-tinycolor/src/TinyColor.bs.js";

var styles = ReactNative.StyleSheet.create({
      itemWrapper: {
        flex: 1,
        justifyContent: "center"
      },
      tabbar: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        minHeight: 50
      }
    });

function TabBar(Props) {
  var theme = Curry._2(T.useTheme, undefined, undefined);
  var currentLocation = Router.useRouter().asPath;
  return React.createElement(React.Fragment, undefined, React.createElement("style", {
                  dangerouslySetInnerHTML: {
                    __html: "\n.TabBarBackground {\n  background-color: " + theme.colors.back + ";\n  border-top: 0.5px solid " + theme.colors.back + ";\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .TabBarBackground {\n    background-color: " + Belt_Option.getWithDefault(Belt_Option.map(TinyColor$RescriptTinycolor.makeFromString(theme.colors.back), (function (c) {
                                return TinyColor$RescriptTinycolor.setAlpha(0.75, c).toString();
                              })), theme.colors.back) + ";\n    -webkit-backdrop-filter: saturate(200%) brightness(150%) grayscale(20%) blur(20px);\n    backdrop-filter: saturate(200%) brightness(150%) grayscale(20%) blur(20px);\n  }\n}}"
                  }
                }), React.createElement("div", {
                  className: "TabBarBackground FixedBottom"
                }, React.createElement(ReactNative.SafeAreaView, {
                      style: styles.tabbar,
                      children: Belt_Array.map(Consts.menuLinks, (function (param) {
                              var link = param.link;
                              return React.createElement(ViewLink.make, {
                                          href: link,
                                          style: styles.itemWrapper,
                                          children: React.createElement(TabBarItem$ReactMultiversal.make, {
                                                text: Belt_Option.getWithDefault(param.textSmall, param.text),
                                                icon: param.icon,
                                                isActive: Curry._2(param.isActive, currentLocation, link),
                                                colorActive: theme.colors.main,
                                                colorInactive: theme.colors.systemGray
                                              }),
                                          key: link
                                        });
                            }))
                    })), React.createElement(ReactNative.View, {
                  style: styles.tabbar
                }));
}

var height = 50;

var make = TabBar;

var $$default = TabBar;

export {
  height ,
  styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
