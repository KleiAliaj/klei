// Generated by ReScript, PLEASE EDIT WITH CARE

import * as T from "../T.bs.js";
import * as Font from "./shareable/Font.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Avatar from "./Avatar.bs.js";
import * as Consts from "../Consts.bs.js";
import * as SVGLogo from "../../assets/SVGs/components/SVGLogo.bs.js";
import * as SVGReact from "../../assets/SVGs/components/SVGReact.bs.js";
import * as ScreenHome from "./ScreenHome.bs.js";
import * as ReactNative from "react-native";
import * as DeviceIPhoneX from "./DeviceIPhoneX.bs.js";
import * as ScreenAppInStore from "./ScreenAppInStore.bs.js";
import * as WindowSizeFilter from "./WindowSizeFilter.bs.js";
import * as ScreenAppInSearch from "./ScreenAppInSearch.bs.js";
import * as Style$ReactNative from "rescript-react-native/src/apis/Style.bs.js";
import * as SVGIPhoneStatusBar from "../../assets/SVGs/components/SVGIPhoneStatusBar.bs.js";
import * as Animated$ReactNative from "rescript-react-native/src/apis/Animated.bs.js";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as Container$ReactMultiversal from "react-multiversal/src/Container.bs.js";
import * as Predefined$ReactMultiversal from "react-multiversal/src/Predefined.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";

function JumbotronApps(Props) {
  var scrollYAnimatedValue = Props.scrollYAnimatedValue;
  var theme = Curry._2(T.useTheme, undefined, undefined);
  return React.createElement(ReactNative.View, {
              style: {
                maxWidth: Style$ReactNative.pct(100),
                overflow: "hidden"
              },
              children: null
            }, React.createElement(WindowSizeFilter.SMax.make, {
                  children: null
                }, React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ScreenHome.make, {})), React.createElement(WindowSizeFilter.MMin.make, {
                  children: React.createElement("div", {
                        style: {
                          background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
                          boxShadow: "inset 0 0 40px rgba(0,0,0,0.25)"
                        }
                      }, React.createElement(ReactNative.View, {
                            style: {
                              opacity: 0.05,
                              transform: [{
                                  rotate: Style$ReactNative.deg(4)
                                }],
                              position: "absolute",
                              right: -20,
                              top: -100
                            },
                            children: React.createElement(SVGLogo.make, {
                                  width: 500,
                                  height: 500,
                                  fill: Consts.Colors.lightest
                                })
                          }), React.createElement(Animated$ReactNative.View.make, {
                            style: {
                              opacity: 0.2,
                              transform: [
                                {
                                  rotateZ: scrollYAnimatedValue.interpolate({
                                        inputRange: [
                                          0,
                                          200
                                        ],
                                        outputRange: [
                                          "0deg",
                                          "5deg"
                                        ],
                                        extrapolate: "identity",
                                        extrapolateLeft: "extend",
                                        extrapolateRight: "extend"
                                      })
                                },
                                {
                                  translateZ: "0"
                                }
                              ],
                              bottom: -250,
                              left: -250,
                              position: "absolute"
                            },
                            children: React.createElement(SVGReact.make, {
                                  width: 750,
                                  height: 750,
                                  fill: Consts.Colors.lightest
                                })
                          }), React.createElement(Container$ReactMultiversal.make, {
                            style: {
                              alignItems: "center",
                              justifyContent: "flex-start",
                              maxHeight: 600
                            },
                            maxWidth: 1200,
                            children: null
                          }, React.createElement(Spacer$ReactMultiversal.make, {
                                size: /* XL */1
                              }), React.createElement(ReactNative.View, {
                                style: Object.assign({}, {
                                      flexDirection: "row",
                                      justifyContent: "center"
                                    }, {
                                      maxWidth: "100vw"
                                    }),
                                children: null
                              }, React.createElement(DeviceIPhoneX.make, {
                                    style: {
                                      transform: [
                                        {
                                          perspective: 1000
                                        },
                                        {
                                          rotateX: Style$ReactNative.deg(20)
                                        },
                                        {
                                          rotateY: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  "-10deg",
                                                  "-14deg"
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          scale: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  0.8,
                                                  0.75
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          translateY: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  40,
                                                  100
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          translateX: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  0,
                                                  -10
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        }
                                      ]
                                    },
                                    width: 450,
                                    children: null
                                  }, React.createElement(Spacer$ReactMultiversal.make, {
                                        size: /* L */2
                                      }), React.createElement(ScreenAppInSearch.make, {})), React.createElement(DeviceIPhoneX.make, {
                                    style: {
                                      transform: [
                                        {
                                          translateZ: "400px"
                                        },
                                        {
                                          perspective: 1000
                                        },
                                        {
                                          rotateX: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  "15deg",
                                                  "20deg"
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          scale: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  1.1,
                                                  1.15
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          translateY: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  20,
                                                  -20
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        }
                                      ]
                                    },
                                    width: 450,
                                    children: null,
                                    backgroundColor: theme.colors.back
                                  }, React.createElement(SpacedView$ReactMultiversal.make, {
                                        vertical: /* XXS */6,
                                        horizontal: /* XS */5,
                                        style: {
                                          left: 0,
                                          position: "absolute",
                                          right: 0,
                                          top: 0
                                        },
                                        children: React.createElement(SVGIPhoneStatusBar.make, {
                                              width: Style$ReactNative.pct(100),
                                              fill: theme.colors.text
                                            })
                                      }), React.createElement(Spacer$ReactMultiversal.make, {
                                        size: /* L */2
                                      }), React.createElement(SpacedView$ReactMultiversal.make, {
                                        style: Predefined$ReactMultiversal.styles.rowSpaceBetween,
                                        children: null
                                      }, React.createElement(ReactNative.View, {
                                            children: null
                                          }, React.createElement(ReactNative.Text, {
                                                children: "HI, I AM",
                                                style: [
                                                  Font.ios.subtitle1,
                                                  theme.styles.textLight1
                                                ]
                                              }), React.createElement(ReactNative.Text, {
                                                children: "Klei",
                                                style: [
                                                  Font.iosEm.largeTitle,
                                                  theme.styles.text
                                                ]
                                              })), React.createElement(Avatar.make, {
                                            size: 56
                                          })), React.createElement(ScreenHome.make, {})), React.createElement(DeviceIPhoneX.make, {
                                    style: {
                                      transform: [
                                        {
                                          perspective: 1000
                                        },
                                        {
                                          rotateX: Style$ReactNative.deg(20)
                                        },
                                        {
                                          rotateY: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  "10deg",
                                                  "12deg"
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          scale: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  0.8,
                                                  0.725
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          translateY: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  150,
                                                  -0
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        },
                                        {
                                          translateX: scrollYAnimatedValue.interpolate({
                                                inputRange: [
                                                  0,
                                                  200
                                                ],
                                                outputRange: [
                                                  0,
                                                  20
                                                ],
                                                extrapolate: "identity",
                                                extrapolateLeft: "extend",
                                                extrapolateRight: "extend"
                                              })
                                        }
                                      ]
                                    },
                                    width: 450,
                                    children: null
                                  }, React.createElement(Spacer$ReactMultiversal.make, {
                                        size: /* L */2
                                      }), React.createElement(ScreenAppInStore.make, {})))))
                }));
}

var make = JumbotronApps;

export {
  make ,
  
}
/* T Not a pure module */
