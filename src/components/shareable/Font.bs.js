// Generated by ReScript, PLEASE EDIT WITH CARE

import * as ReactNative from "react-native";

function props(weight) {
  if (ReactNative.Platform.OS === "android") {
    if (weight === "_400" || weight === "normal") {
      return {
              family: "sans-serif",
              weight: "_400"
            };
    } else if (weight === "_100") {
      return {
              family: "sans-serif-thin",
              weight: "_100"
            };
    } else if (weight === "_200") {
      return {
              family: "sans-serif-light",
              weight: "_200"
            };
    } else if (weight === "_300") {
      return {
              family: "sans-serif-light",
              weight: "_300"
            };
    } else if (weight === "_500") {
      return {
              family: "sans-serif-medium",
              weight: "_500"
            };
    } else if (weight === "_700") {
      return {
              family: "sans-serif-regular",
              weight: "_700"
            };
    } else if (weight === "_800") {
      return {
              family: "sans-serif-bold",
              weight: "_700"
            };
    } else if (weight === "_900") {
      return {
              family: "sans-serif-black",
              weight: "_900"
            };
    } else {
      return {
              family: "sans-serif-medium",
              weight: "_600"
            };
    }
  } else if (weight === "_400" || weight === "normal") {
    return {
            family: "System",
            weight: "_400"
          };
  } else if (weight === "_100") {
    return {
            family: "System",
            weight: "_100"
          };
  } else if (weight === "_200") {
    return {
            family: "System",
            weight: "_200"
          };
  } else if (weight === "_300") {
    return {
            family: "System",
            weight: "_300"
          };
  } else if (weight === "_500") {
    return {
            family: "System",
            weight: "_500"
          };
  } else if (weight === "_700") {
    return {
            family: "System",
            weight: "_700"
          };
  } else if (weight === "_800") {
    return {
            family: "System",
            weight: "_800"
          };
  } else if (weight === "_900") {
    return {
            family: "System",
            weight: "_900"
          };
  } else {
    return {
            family: "System",
            weight: "_600"
          };
  }
}

function propsToStyle(param) {
  return {
          fontFamily: param.family,
          fontWeight: (function () {
                switch (param.weight) {
                  case "normal" :
                      return "normal";
                  case "bold" :
                      return "bold";
                  case "_100" :
                      return "100";
                  case "_200" :
                      return "200";
                  case "_300" :
                      return "300";
                  case "_400" :
                      return "400";
                  case "_500" :
                      return "500";
                  case "_600" :
                      return "600";
                  case "_700" :
                      return "700";
                  case "_800" :
                      return "800";
                  case "_900" :
                      return "900";
                  
                }
              })()
        };
}

var Weight = {
  props: props,
  propsToStyle: propsToStyle
};

var weight = ReactNative.StyleSheet.create({
      "100": propsToStyle(props("_100")),
      "200": propsToStyle(props("_200")),
      "300": propsToStyle(props("_300")),
      "400": propsToStyle(props("_400")),
      "500": propsToStyle(props("_500")),
      "600": propsToStyle(props("_600")),
      "700": propsToStyle(props("_700")),
      "800": propsToStyle(props("_800")),
      "900": propsToStyle(props("_900")),
      thin: propsToStyle(props("_100")),
      ultralight: propsToStyle(props("_200")),
      light: propsToStyle(props("_300")),
      regular: propsToStyle(props("_400")),
      medium: propsToStyle(props("_500")),
      semibold: propsToStyle(props("_600")),
      bold: propsToStyle(props("_700")),
      heavy: propsToStyle(props("_800")),
      black: propsToStyle(props("_900"))
    });

function s(v) {
  if (ReactNative.Platform.OS === "ios") {
    return v;
  } else {
    return 0;
  }
}

var largeTitle_spacing = s(0.40);

var largeTitle = {
  size: 34,
  line: 41,
  spacing: largeTitle_spacing,
  weight: "_400",
  weightEm: "_700"
};

var title1_spacing = s(0.38);

var title1 = {
  size: 28,
  line: 34,
  spacing: title1_spacing,
  weight: "_400",
  weightEm: "_700"
};

var title2_spacing = s(-0.26);

var title2 = {
  size: 22,
  line: 28,
  spacing: title2_spacing,
  weight: "_400",
  weightEm: "_700"
};

var title3_spacing = s(-0.45);

var title3 = {
  size: 20,
  line: 25,
  spacing: title3_spacing,
  weight: "_400",
  weightEm: "_600"
};

var headline_spacing = s(-0.43);

var headline = {
  size: 17,
  line: 22,
  spacing: headline_spacing,
  weight: "_600",
  weightEm: "_800"
};

var body_spacing = s(-0.43);

var body = {
  size: 17,
  line: 22,
  spacing: body_spacing,
  weight: "_400",
  weightEm: "_600"
};

var callout_spacing = s(-0.31);

var callout = {
  size: 16,
  line: 21,
  spacing: callout_spacing,
  weight: "_400",
  weightEm: "_600"
};

var subhead_spacing = s(-0.23);

var subhead = {
  size: 15,
  line: 20,
  spacing: subhead_spacing,
  weight: "_400",
  weightEm: "_600"
};

var footnote_spacing = s(-0.08);

var footnote = {
  size: 13,
  line: 18,
  spacing: footnote_spacing,
  weight: "_400",
  weightEm: "_600"
};

var caption1_spacing = s(0.0);

var caption1 = {
  size: 12,
  line: 16,
  spacing: caption1_spacing,
  weight: "_400",
  weightEm: "_500"
};

var caption2_spacing = s(0.06);

var caption2 = {
  size: 11,
  line: 13,
  spacing: caption2_spacing,
  weight: "_400",
  weightEm: "_600"
};

var Ios = {
  s: s,
  largeTitle: largeTitle,
  title1: title1,
  title2: title2,
  title3: title3,
  headline: headline,
  body: body,
  callout: callout,
  subhead: subhead,
  footnote: footnote,
  caption1: caption1,
  caption2: caption2
};

function l(v) {
  return v * 1.2;
}

var headline1_line = 96 * 1.2;

var headline1 = {
  size: 96,
  line: headline1_line,
  spacing: -1.5,
  weight: "_300",
  weightEm: "_500"
};

var headline2_line = 60 * 1.2;

var headline2 = {
  size: 60,
  line: headline2_line,
  spacing: -0.5,
  weight: "_300",
  weightEm: "_500"
};

var headline3_line = 48 * 1.2;

var headline3 = {
  size: 48,
  line: headline3_line,
  spacing: 0,
  weight: "_400",
  weightEm: "_700"
};

var headline4_line = 34 * 1.2;

var headline4 = {
  size: 34,
  line: headline4_line,
  spacing: 0.25,
  weight: "_400",
  weightEm: "_700"
};

var headline5_line = 24 * 1.2;

var headline5 = {
  size: 24,
  line: headline5_line,
  spacing: 0,
  weight: "_400",
  weightEm: "_700"
};

var headline6_line = 20 * 1.2;

var headline6 = {
  size: 20,
  line: headline6_line,
  spacing: 0.15,
  weight: "_500",
  weightEm: "_600"
};

var subtitle1_line = 16 * 1.2;

var subtitle1 = {
  size: 16,
  line: subtitle1_line,
  spacing: 0.15,
  weight: "_400",
  weightEm: "_600"
};

var subtitle2_line = 14 * 1.2;

var subtitle2 = {
  size: 14,
  line: subtitle2_line,
  spacing: 0.1,
  weight: "_400",
  weightEm: "_600"
};

var body1_line = 16 * 1.2;

var body1 = {
  size: 16,
  line: body1_line,
  spacing: 0.5,
  weight: "_400",
  weightEm: "_500"
};

var body2_line = 14 * 1.2;

var body2 = {
  size: 14,
  line: body2_line,
  spacing: 0.25,
  weight: "_400",
  weightEm: "_500"
};

var button_line = 14 * 1.2;

var button = {
  size: 14,
  line: button_line,
  spacing: 1.25,
  weight: "_500",
  weightEm: "_600"
};

var caption_line = 12 * 1.2;

var caption = {
  size: 12,
  line: caption_line,
  spacing: 0.4,
  weight: "_400",
  weightEm: "_500"
};

var overline_line = 10 * 1.2;

var overline = {
  size: 10,
  line: overline_line,
  spacing: 1.5,
  weight: "_400",
  weightEm: "_500"
};

var Android = {
  l: l,
  headline1: headline1,
  headline2: headline2,
  headline3: headline3,
  headline4: headline4,
  headline5: headline5,
  headline6: headline6,
  subtitle1: subtitle1,
  subtitle2: subtitle2,
  body1: body1,
  body2: body2,
  button: button,
  caption: caption,
  overline: overline
};

var ios_overline = {
  size: 14,
  line: 16,
  spacing: 0.06,
  weight: "_400",
  weightEm: "_600"
};

var ios = {
  largeTitle: largeTitle,
  title1: title1,
  title2: title2,
  title3: title3,
  headline: headline,
  body: body,
  callout: callout,
  subhead: subhead,
  footnote: footnote,
  caption1: caption1,
  caption2: caption2,
  headline1: largeTitle,
  headline2: largeTitle,
  headline3: largeTitle,
  headline4: title1,
  headline5: title2,
  headline6: title3,
  subtitle1: headline,
  subtitle2: subhead,
  body1: body,
  body2: callout,
  button: callout,
  caption: caption1,
  overline: ios_overline
};

var android = {
  largeTitle: headline3,
  title1: headline4,
  title2: headline5,
  title3: headline6,
  headline: subtitle1,
  body: body1,
  callout: button,
  subhead: subtitle2,
  footnote: caption,
  caption1: caption,
  caption2: caption,
  headline1: headline1,
  headline2: headline2,
  headline3: headline3,
  headline4: headline4,
  headline5: headline5,
  headline6: headline6,
  subtitle1: subtitle1,
  subtitle2: subtitle2,
  body1: body1,
  body2: body2,
  button: button,
  caption: caption,
  overline: overline
};

function propsToStyle$1(param) {
  var match = props(param.weight);
  return {
          fontFamily: match.family,
          fontSize: param.size,
          fontWeight: (function () {
                switch (match.weight) {
                  case "normal" :
                      return "normal";
                  case "bold" :
                      return "bold";
                  case "_100" :
                      return "100";
                  case "_200" :
                      return "200";
                  case "_300" :
                      return "300";
                  case "_400" :
                      return "400";
                  case "_500" :
                      return "500";
                  case "_600" :
                      return "600";
                  case "_700" :
                      return "700";
                  case "_800" :
                      return "800";
                  case "_900" :
                      return "900";
                  
                }
              })(),
          letterSpacing: param.spacing,
          lineHeight: param.line
        };
}

function propsToStyleEm(param) {
  var match = props(param.weightEm);
  return {
          fontFamily: match.family,
          fontSize: param.size,
          fontWeight: (function () {
                switch (match.weight) {
                  case "normal" :
                      return "normal";
                  case "bold" :
                      return "bold";
                  case "_100" :
                      return "100";
                  case "_200" :
                      return "200";
                  case "_300" :
                      return "300";
                  case "_400" :
                      return "400";
                  case "_500" :
                      return "500";
                  case "_600" :
                      return "600";
                  case "_700" :
                      return "700";
                  case "_800" :
                      return "800";
                  case "_900" :
                      return "900";
                  
                }
              })(),
          letterSpacing: param.spacing,
          lineHeight: param.line
        };
}

var Size = {
  Ios: Ios,
  Android: Android,
  ios: ios,
  android: android,
  propsToStyle: propsToStyle$1,
  propsToStyleEm: propsToStyleEm
};

var ios$1 = ReactNative.StyleSheet.create({
      largeTitle: propsToStyle$1(largeTitle),
      title1: propsToStyle$1(title1),
      title2: propsToStyle$1(title2),
      title3: propsToStyle$1(title3),
      headline: propsToStyle$1(headline),
      body: propsToStyle$1(body),
      callout: propsToStyle$1(callout),
      subhead: propsToStyle$1(subhead),
      footnote: propsToStyle$1(footnote),
      caption1: propsToStyle$1(caption1),
      caption2: propsToStyle$1(caption2),
      headline1: propsToStyle$1(largeTitle),
      headline2: propsToStyle$1(largeTitle),
      headline3: propsToStyle$1(largeTitle),
      headline4: propsToStyle$1(title1),
      headline5: propsToStyle$1(title2),
      headline6: propsToStyle$1(title3),
      subtitle1: propsToStyle$1(headline),
      subtitle2: propsToStyle$1(subhead),
      body1: propsToStyle$1(body),
      body2: propsToStyle$1(callout),
      button: propsToStyle$1(callout),
      caption: propsToStyle$1(caption1),
      overline: propsToStyle$1(ios_overline)
    });

var android$1 = ReactNative.StyleSheet.create({
      largeTitle: propsToStyle$1(headline3),
      title1: propsToStyle$1(headline4),
      title2: propsToStyle$1(headline5),
      title3: propsToStyle$1(headline6),
      headline: propsToStyle$1(subtitle1),
      body: propsToStyle$1(body1),
      callout: propsToStyle$1(button),
      subhead: propsToStyle$1(subtitle2),
      footnote: propsToStyle$1(caption),
      caption1: propsToStyle$1(caption),
      caption2: propsToStyle$1(caption),
      headline1: propsToStyle$1(headline1),
      headline2: propsToStyle$1(headline2),
      headline3: propsToStyle$1(headline3),
      headline4: propsToStyle$1(headline4),
      headline5: propsToStyle$1(headline5),
      headline6: propsToStyle$1(headline6),
      subtitle1: propsToStyle$1(subtitle1),
      subtitle2: propsToStyle$1(subtitle2),
      body1: propsToStyle$1(body1),
      body2: propsToStyle$1(body2),
      button: propsToStyle$1(button),
      caption: propsToStyle$1(caption),
      overline: propsToStyle$1(overline)
    });

var iosEm = ReactNative.StyleSheet.create({
      largeTitle: propsToStyleEm(largeTitle),
      title1: propsToStyleEm(title1),
      title2: propsToStyleEm(title2),
      title3: propsToStyleEm(title3),
      headline: propsToStyleEm(headline),
      body: propsToStyleEm(body),
      callout: propsToStyleEm(callout),
      subhead: propsToStyleEm(subhead),
      footnote: propsToStyleEm(footnote),
      caption1: propsToStyleEm(caption1),
      caption2: propsToStyleEm(caption2),
      headline1: propsToStyleEm(largeTitle),
      headline2: propsToStyleEm(largeTitle),
      headline3: propsToStyleEm(largeTitle),
      headline4: propsToStyleEm(title1),
      headline5: propsToStyleEm(title2),
      headline6: propsToStyleEm(title3),
      subtitle1: propsToStyleEm(headline),
      subtitle2: propsToStyleEm(subhead),
      body1: propsToStyleEm(body),
      body2: propsToStyleEm(callout),
      button: propsToStyleEm(callout),
      caption: propsToStyleEm(caption1),
      overline: propsToStyleEm(ios_overline)
    });

var androidEm = ReactNative.StyleSheet.create({
      largeTitle: propsToStyleEm(headline3),
      title1: propsToStyleEm(headline4),
      title2: propsToStyleEm(headline5),
      title3: propsToStyleEm(headline6),
      headline: propsToStyleEm(subtitle1),
      body: propsToStyleEm(body1),
      callout: propsToStyleEm(button),
      subhead: propsToStyleEm(subtitle2),
      footnote: propsToStyleEm(caption),
      caption1: propsToStyleEm(caption),
      caption2: propsToStyleEm(caption),
      headline1: propsToStyleEm(headline1),
      headline2: propsToStyleEm(headline2),
      headline3: propsToStyleEm(headline3),
      headline4: propsToStyleEm(headline4),
      headline5: propsToStyleEm(headline5),
      headline6: propsToStyleEm(headline6),
      subtitle1: propsToStyleEm(subtitle1),
      subtitle2: propsToStyleEm(subtitle2),
      body1: propsToStyleEm(body1),
      body2: propsToStyleEm(body2),
      button: propsToStyleEm(button),
      caption: propsToStyleEm(caption),
      overline: propsToStyleEm(overline)
    });

var thin = "_100";

var ultralight = "_200";

var light = "_300";

var regular = "_400";

var medium = "_500";

var semibold = "_600";

var bold = "_700";

var heavy = "_800";

var black = "_900";

export {
  thin ,
  ultralight ,
  light ,
  regular ,
  medium ,
  semibold ,
  bold ,
  heavy ,
  black ,
  Weight ,
  weight ,
  Size ,
  ios$1 as ios,
  android$1 as android,
  iosEm ,
  androidEm ,
  
}
/* weight Not a pure module */
