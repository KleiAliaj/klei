// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Avatar from "./Avatar.bs.js";
import * as Consts from "../Consts.bs.js";
import * as SVGLogo from "../../assets/SVGs/components/SVGLogo.bs.js";
import * as TextLink from "./TextLink.bs.js";
import * as ViewLink from "./ViewLink.bs.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as SocialIcons from "./SocialIcons.bs.js";
import * as ReactNative from "react-native";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as Container$ReactMultiversal from "react-multiversal/src/Container.bs.js";
import * as Predefined$ReactMultiversal from "react-multiversal/src/Predefined.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";
import * as TinyColor$RescriptTinycolor from "rescript-tinycolor/src/TinyColor.bs.js";

var styles = ReactNative.StyleSheet.create({
      barWrapper: {
        zIndex: 1
      },
      bar: {
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      },
      logo: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        position: "relative",
        zIndex: 1
      },
      logoText: {
        color: Predefined$ReactMultiversal.Colors.white,
        fontSize: 18,
        fontWeight: "700"
      },
      icons: {
        flexDirection: "row"
      },
      icon: {
        padding: 8
      },
      linkContainer: {
        flexDirection: "row"
      },
      link: {
        color: Predefined$ReactMultiversal.Colors.white,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18 * 1.7,
        padding: 10
      },
      linkActive: {
        textShadowColor: "rgba(0, 246, 255, 0.75)",
        textShadowOffset: {
          height: 0,
          width: 0
        },
        textShadowRadius: 16,
        borderBottomColor: Belt_Option.getWithDefault(Belt_Option.map(TinyColor$RescriptTinycolor.makeFromString(Predefined$ReactMultiversal.Colors.white), (function (c) {
                    return TinyColor$RescriptTinycolor.setAlpha(0.25, c).toString();
                  })), Predefined$ReactMultiversal.Colors.white),
        borderBottomWidth: Predefined$ReactMultiversal.hairlineWidth,
        borderStyle: "solid"
      }
    });

function HeaderDesktop(Props) {
  return React.createElement(Container$ReactMultiversal.make, {
              wrapperStyle: styles.barWrapper,
              children: React.createElement(SpacedView$ReactMultiversal.make, {
                    vertical: /* S */4,
                    style: styles.bar,
                    children: null
                  }, React.createElement(ViewLink.make, {
                        href: "/",
                        style: styles.logo,
                        children: null
                      }, React.createElement("div", {
                            style: {
                              filter: "drop-shadow(1px 1px 10px rgba(255,255,255,0.15))drop-shadow(-1px 1px 10px rgba(255,255,255,0.15))drop-shadow(-1px -1px 10px rgba(255,255,255,0.15))drop-shadow(1px -1px 10px rgba(255,255,255,0.15))drop-shadow(0 0 10px rgba(255,255,255,0.15)) "
                            }
                          }, React.createElement(SVGLogo.make, {
                                width: 36,
                                height: 36,
                                fill: Predefined$ReactMultiversal.Colors.white
                              })), React.createElement(Spacer$ReactMultiversal.make, {
                            size: /* M */3
                          }), React.createElement(ReactNative.Text, {
                            children: Consts.title,
                            style: styles.logoText
                          }), React.createElement(Spacer$ReactMultiversal.make, {
                            size: /* XS */5
                          })), React.createElement(ReactNative.View, {
                        style: styles.linkContainer,
                        children: Belt_Array.map(Consts.menuLinks, (function (item) {
                                return React.createElement(TextLink.make, {
                                            activeStyle: styles.linkActive,
                                            children: item.text,
                                            href: item.link,
                                            style: styles.link,
                                            key: item.link
                                          });
                              }))
                      }), React.createElement(ReactNative.View, {
                        style: Predefined$ReactMultiversal.styles.rowCenter,
                        children: null
                      }, React.createElement(SocialIcons.make, {
                            wrapperStyle: Predefined$ReactMultiversal.styles.row,
                            iconStyle: styles.icon,
                            iconSize: 20
                          }), React.createElement(Spacer$ReactMultiversal.make, {}), React.createElement(ReactNative.View, {
                            children: null
                          }, React.createElement(ReactNative.View, {
                                style: {
                                  bottom: -12,
                                  left: -12,
                                  position: "absolute",
                                  right: -12,
                                  top: -12
                                },
                                children: React.createElement("svg", {
                                      version: "1.1",
                                      viewBox: "0 0 82 82",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      xmlnsXlink: "http://www.w3.org/1999/xlink"
                                    }, React.createElement("defs", undefined, React.createElement("linearGradient", {
                                              id: "linearGradient-1",
                                              x1: "0%",
                                              x2: "100%",
                                              y1: "0%",
                                              y2: "100%"
                                            }, React.createElement("stop", {
                                                  offset: "0%",
                                                  stopColor: "#FFA456"
                                                }), React.createElement("stop", {
                                                  offset: "100%",
                                                  stopColor: "#FFA456",
                                                  stopOpacity: "0"
                                                })), React.createElement("linearGradient", {
                                              id: "linearGradient-2",
                                              x1: "100%",
                                              x2: "50%",
                                              y1: "0%",
                                              y2: "50%"
                                            }, React.createElement("stop", {
                                                  offset: "0%",
                                                  stopColor: "#00B1EE"
                                                }), React.createElement("stop", {
                                                  offset: "100%",
                                                  stopColor: "#00B1EE",
                                                  stopOpacity: "0"
                                                })), React.createElement("linearGradient", {
                                              id: "linearGradient-3",
                                              x1: "0%",
                                              x2: "50%",
                                              y1: "100%",
                                              y2: "50%"
                                            }, React.createElement("stop", {
                                                  offset: "0%",
                                                  stopColor: "#EE0000"
                                                }), React.createElement("stop", {
                                                  offset: "100%",
                                                  stopColor: "#EE00E1",
                                                  stopOpacity: "0"
                                                })), React.createElement("linearGradient", {
                                              id: "linearGradient-4",
                                              x1: "100%",
                                              x2: "50%",
                                              y1: "100%",
                                              y2: "50%"
                                            }, React.createElement("stop", {
                                                  offset: "0%",
                                                  stopColor: "#8700FF"
                                                }), React.createElement("stop", {
                                                  offset: "100%",
                                                  stopColor: "#EE00E1",
                                                  stopOpacity: "0"
                                                })), React.createElement("rect", {
                                              id: "path-5",
                                              height: "58",
                                              width: "58",
                                              rx: "29",
                                              x: "0",
                                              y: "0"
                                            }), React.createElement("filter", {
                                              id: "filter-6",
                                              height: "151.7%",
                                              width: "151.7%",
                                              filterUnits: "objectBoundingBox",
                                              x: "-25.9%",
                                              y: "-25.9%"
                                            }, React.createElement("feGaussianBlur", {
                                                  in: "SourceGraphic",
                                                  stdDeviation: "5"
                                                }))), React.createElement("g", {
                                          transform: "translate(-1480.000000, -21.000000)"
                                        }, React.createElement("g", {
                                              transform: "translate(402.000000, 33.000000)"
                                            }, React.createElement("g", {
                                                  filter: "url(#filter-6)",
                                                  transform: "translate(1090.000000, -0.000000)"
                                                }, React.createElement("use", {
                                                      fill: "url(#linearGradient-1)",
                                                      xlinkHref: "#path-5"
                                                    }), React.createElement("use", {
                                                      fill: "url(#linearGradient-2)",
                                                      xlinkHref: "#path-5"
                                                    }), React.createElement("use", {
                                                      fill: "url(#linearGradient-3)",
                                                      xlinkHref: "#path-5"
                                                    }), React.createElement("use", {
                                                      fill: "url(#linearGradient-4)",
                                                      xlinkHref: "#path-5"
                                                    })))))
                              }), React.createElement(Avatar.make, {
                                size: 40,
                                borderWidth: 2,
                                borderColor: "#000"
                              }))))
            });
}

var make = HeaderDesktop;

var $$default = HeaderDesktop;

export {
  styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
