// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Consts from "../Consts.bs.js";
import * as ReactNative from "react-native";
import * as ViewWithGradient from "./ViewWithGradient.bs.js";
import * as Spacer$ReactMultiversal from "react-multiversal/src/Spacer.bs.js";
import * as SpacedView$ReactMultiversal from "react-multiversal/src/SpacedView.bs.js";

var styles = ReactNative.StyleSheet.create({
      itemWrapper: {
        flex: 1,
        flexBasis: 250
      },
      item: {
        shadowColor: "#000",
        shadowOffset: {
          height: 5,
          width: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        flexBasis: 200,
        padding: 20
      },
      textNodeStrong: {
        color: Consts.Colors.light,
        fontSize: 32,
        fontWeight: "800"
      },
      textSpace: {
        flex: 1
      },
      textNode: {
        color: Consts.Colors.light,
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right"
      }
    });

function CardWithGradient(Props) {
  var item = Props.item;
  return React.createElement(SpacedView$ReactMultiversal.make, {
              style: styles.itemWrapper,
              children: React.createElement(ViewWithGradient.make, {
                    color: item.bg,
                    color2: item.bg2,
                    children: React.createElement(ReactNative.View, {
                          style: styles.item,
                          children: null
                        }, item.icon, React.createElement(ReactNative.Text, {
                              children: item.title,
                              style: [
                                styles.textNodeStrong,
                                {
                                  color: item.color
                                }
                              ]
                            }), React.createElement(Spacer$ReactMultiversal.make, {
                              style: styles.textSpace
                            }), React.createElement(ReactNative.Text, {
                              children: item.text,
                              style: styles.textNode
                            }))
                  })
            });
}

var make = CardWithGradient;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
