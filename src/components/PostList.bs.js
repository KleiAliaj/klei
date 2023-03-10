// Generated by ReScript, PLEASE EDIT WITH CARE

import * as T from "../T.bs.js";
import * as Font from "./shareable/Font.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as PostPreview from "./PostPreview.bs.js";
import * as ReactNative from "react-native";
import * as Style$ReactNative from "rescript-react-native/src/apis/Style.bs.js";
import * as Predefined$ReactMultiversal from "react-multiversal/src/Predefined.bs.js";

var styles = ReactNative.StyleSheet.create({
      flex: {
        width: Style$ReactNative.pct(100)
      }
    });

function PostList(Props) {
  var posts = Props.posts;
  var theme = Curry._2(T.useTheme, undefined, undefined);
  var latestYear = {
    contents: new Date().getFullYear().toString()
  };
  return React.createElement(React.Fragment, undefined, Belt_Array.map(posts, (function (item) {
                    var year = Belt_Option.getWithDefault(Belt_Option.map(Caml_option.null_to_opt(item.date), (function (s) {
                                return s.slice(0, 4);
                              })), "2000");
                    var newYear = year !== latestYear.contents;
                    latestYear.contents = year;
                    return React.createElement(ReactNative.View, {
                                style: styles.flex,
                                children: null,
                                key: item.id
                              }, newYear ? React.createElement(ReactNative.View, {
                                      style: Predefined$ReactMultiversal.styles.center,
                                      children: React.createElement(ReactNative.Text, {
                                            children: year,
                                            style: [
                                              Font.iosEm.title2,
                                              theme.styles.text
                                            ]
                                          })
                                    }) : null, React.createElement(PostPreview.make, {
                                    item: item
                                  }));
                  })));
}

var make = PostList;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
