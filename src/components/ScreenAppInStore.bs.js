// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Consts from "../Consts.bs.js";
import * as SVGLogo from "../../assets/SVGs/components/SVGLogo.bs.js";
import * as ViewLink from "./ViewLink.bs.js";
import * as ReactNative from "react-native";
import * as Row$ReactMultiversal from "react-multiversal/src/Row.bs.js";
import * as Title$ReactMultiversal from "react-multiversal/src/Title.bs.js";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as TitlePre$ReactMultiversal from "react-multiversal/src/TitlePre.bs.js";
import * as Predefined$ReactMultiversal from "react-multiversal/src/Predefined.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";
import * as ButtonContained$ReactMultiversal from "react-multiversal/src/ButtonContained.bs.js";

function ScreenAppInStore(Props) {
  return React.createElement(SpacedView$ReactMultiversal.make, {
              children: null
            }, React.createElement(Row$ReactMultiversal.make, {
                  children: null
                }, React.createElement(SpacedView$ReactMultiversal.make, {
                      vertical: /* XS */5,
                      horizontal: /* XS */5,
                      style: {
                        borderColor: Consts.Colors.lightGrey,
                        borderRadius: 20,
                        borderStyle: "solid",
                        borderWidth: Predefined$ReactMultiversal.hairlineWidth
                      },
                      children: React.createElement(SVGLogo.make, {
                            width: 64,
                            height: 64,
                            fill: Consts.Colors.dark
                          }),
                      key: Predefined$ReactMultiversal.hairlineWidth.toString()
                    }), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ReactNative.View, {
                      children: null
                    }, React.createElement(TitlePre$ReactMultiversal.make, {
                          children: "This can be"
                        }), React.createElement(Title$ReactMultiversal.make, {
                          children: "Your App"
                        }), React.createElement(Spacer$ReactMultiversal.make, {
                          size: /* XS */5
                        }), React.createElement(ReactNative.Text, {
                          children: "MoOx, Inc.",
                          style: {
                            color: "#ccc",
                            fontSize: 12,
                            fontWeight: "300"
                          }
                        })), React.createElement(SpacedView$ReactMultiversal.make, {
                      children: React.createElement(ViewLink.make, {
                            href: "/contact/",
                            children: React.createElement(ButtonContained$ReactMultiversal.make, {
                                  round: true,
                                  color: "#1F5EDC",
                                  verticalSpace: /* XS */5,
                                  children: React.createElement(ButtonContained$ReactMultiversal.$$Text.make, {
                                        children: "GET"
                                      })
                                })
                          })
                    })), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ReactNative.View, {
                  children: React.createElement(Row$ReactMultiversal.SpaceBetween.make, {
                        children: null
                      }, React.createElement(ReactNative.Text, {
                            children: "4.8 ⭑⭑⭑⭑⭑",
                            style: {
                              color: "#999",
                              fontSize: 20,
                              fontWeight: "600"
                            }
                          }), React.createElement(ReactNative.Text, {
                            children: "9k ♥",
                            style: {
                              color: "#999",
                              fontSize: 20,
                              fontWeight: "600"
                            }
                          }))
                }), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ReactNative.Text, {
                  children: "You need an awesome native app? You got lucky, I can help you with that. I know how to build fast & beautiful mobile apps with React Native that works perfectly on iOS, Android & even more platform. We can target the web, Windows, macOS... Just get in touch, I am available to listen to your needs!",
                  style: {
                    color: "#333",
                    fontSize: 14,
                    fontWeight: "300",
                    lineHeight: 14 * 1.5
                  }
                }), React.createElement(Spacer$ReactMultiversal.make, {
                  size: /* L */2
                }), React.createElement(ViewLink.make, {
                  href: "https://www.linkedin.com/in/maxthirouin/",
                  children: null
                }, React.createElement(Title$ReactMultiversal.make, {
                      children: "Testimonials"
                    }), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(SpacedView$ReactMultiversal.make, {
                      style: {
                        backgroundColor: "#eee",
                        borderRadius: 10
                      },
                      children: null
                    }, React.createElement(ReactNative.Text, {
                          children: "David"
                        }), React.createElement(ReactNative.Text, {
                          children: "⭑⭑⭑⭑⭑",
                          style: {
                            color: "orange",
                            fontSize: 20,
                            fontWeight: "600"
                          }
                        }), React.createElement(ReactNative.Text, {
                          children: null,
                          style: {
                            color: "#333",
                            fontSize: 14
                          }
                        }, "Having collaborated with Maxime on several open source projects, I can attest that he is a knowledgeable and motivated frontend developer. Not only does he stay up-to-date with the latest tools and best practices: he actively contributes to them... ", React.createElement(ReactNative.Text, {
                              children: "Read more",
                              style: {
                                color: Predefined$ReactMultiversal.Colors.Ios.light.blue
                              }
                            })))), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(TitlePre$ReactMultiversal.make, {
                  children: "A joke just for you"
                }), React.createElement(Title$ReactMultiversal.make, {
                  children: "Fun story"
                }), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ReactNative.Text, {
                  children: "Helvetica and Times New Roman walk into a bar.\nThe bartender says \"Get out, we don't serve your type!\"",
                  style: {
                    color: "#333",
                    fontSize: 14,
                    fontWeight: "300",
                    lineHeight: 14 * 1.5
                  }
                }));
}

var make = ScreenAppInStore;

export {
  make ,
  
}
/* react Not a pure module */
