// Generated by ReScript, PLEASE EDIT WITH CARE

import * as T from "../T.bs.js";
import * as Font from "./shareable/Font.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as SVGReact from "../../assets/SVGs/components/SVGReact.bs.js";
import * as SVGDevices from "../../assets/SVGs/components/SVGDevices.bs.js";
import * as SVGMenuTalk from "../../assets/SVGs/components/SVGMenuTalk.bs.js";
import * as ReactNative from "react-native";
import * as Row$ReactMultiversal from "react-multiversal/src/Row.bs.js";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as Container$ReactMultiversal from "react-multiversal/src/Container.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";

var styles = ReactNative.StyleSheet.create({
      blahblah: {
        alignItems: "center",
        flex: 1,
        flexBasis: 240
      }
    });

function BlocksAboutMySkills(Props) {
  var theme = Curry._2(T.useTheme, undefined, undefined);
  return React.createElement(Container$ReactMultiversal.make, {
              maxWidth: 1200,
              children: null
            }, React.createElement(Row$ReactMultiversal.Wrap.make, {
                  children: null
                }, React.createElement(SpacedView$ReactMultiversal.make, {
                      style: styles.blahblah,
                      children: null
                    }, React.createElement(SpacedView$ReactMultiversal.make, {
                          horizontal: /* XS */5,
                          children: React.createElement(Row$ReactMultiversal.Wrap.Center.make, {
                                children: null
                              }, React.createElement(SVGDevices.make, {
                                    width: 32,
                                    height: 32,
                                    fill: "#bbb"
                                  }), React.createElement(Spacer$ReactMultiversal.make, {
                                    size: /* S */4
                                  }), React.createElement(ReactNative.Text, {
                                    children: "Software Architect.",
                                    style: [
                                      Font.ios.title1,
                                      Font.weight.ultralight,
                                      theme.styles.text
                                    ]
                                  }))
                        }), React.createElement(Spacer$ReactMultiversal.make, {
                          size: /* M */3
                        }), React.createElement(ReactNative.Text, {
                          children: "I made my first website in 1998, & fell in love with web development. Since then, I never stopped to learn things.\nOver the years, I refined my way to approach development, which allows me to confidently takes high-level design choices when building web & mobile apps, and selecting tools adapted to the user interface you need.",
                          style: [
                            Font.ios.body,
                            theme.styles.text
                          ]
                        })), React.createElement(SpacedView$ReactMultiversal.make, {
                      style: styles.blahblah,
                      children: null
                    }, React.createElement(SpacedView$ReactMultiversal.make, {
                          horizontal: /* XS */5,
                          children: React.createElement(Row$ReactMultiversal.Wrap.Center.make, {
                                children: null
                              }, React.createElement(SVGReact.make, {
                                    width: 32,
                                    height: 32,
                                    fill: "#bbb"
                                  }), React.createElement(Spacer$ReactMultiversal.make, {
                                    size: /* S */4
                                  }), React.createElement(ReactNative.Text, {
                                    children: "React Developer.",
                                    style: [
                                      Font.ios.title1,
                                      Font.weight.ultralight,
                                      theme.styles.text
                                    ]
                                  }))
                        }), React.createElement(Spacer$ReactMultiversal.make, {
                          size: /* M */3
                        }), React.createElement(ReactNative.Text, {
                          children: "I really believe that React & React Native are currently the best tools available to produce fast & maintainable user-interfaces since the first day I tried it, in 2014.\nTheir features & ecosystem allow me to be focus on creating beautiful & polished user experiences with scalability and performance in mind.",
                          style: [
                            Font.ios.body,
                            theme.styles.text
                          ]
                        })), React.createElement(SpacedView$ReactMultiversal.make, {
                      style: styles.blahblah,
                      children: null
                    }, React.createElement(SpacedView$ReactMultiversal.make, {
                          horizontal: /* XS */5,
                          children: React.createElement(Row$ReactMultiversal.Wrap.Center.make, {
                                children: null
                              }, React.createElement(SVGMenuTalk.make, {
                                    width: 32,
                                    height: 32,
                                    fill: "#bbb"
                                  }), React.createElement(Spacer$ReactMultiversal.make, {
                                    size: /* S */4
                                  }), React.createElement(ReactNative.Text, {
                                    children: "Expert, Leader, Trainer.",
                                    style: [
                                      Font.ios.title1,
                                      Font.weight.ultralight,
                                      theme.styles.text
                                    ]
                                  }))
                        }), React.createElement(Spacer$ReactMultiversal.make, {
                          size: /* M */3
                        }), React.createElement(ReactNative.Text, {
                          children: "My various experiences made me confident about the technologies & tools I use so I can probably help you & your team, whether you need some advices, training or help to boostrap your project so you can focus on the feature your user needs.",
                          style: [
                            Font.ios.body,
                            theme.styles.text
                          ]
                        }))), React.createElement(Spacer$ReactMultiversal.make, {
                  size: /* L */2
                }));
}

var make = BlocksAboutMySkills;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
