open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 128 128" ?width ?height ?fill ?stroke ?style> <Path d="m64 0c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64zm0 14c-27.5 0-50 22.5-50 50s22.5 50 50 50 50-22.5 50-50-22.5-50-50-50zm16 37.2 31.36 31.36c2.56-5.76-1.988041 33.298402-47.0168091 33.298402-45.0287682 0-49.6231909-37.138402-47.0631909-30.738402l21.12-21.12 14.72 14.08zm-1.0123967 26.8-14.9876033 15h30z"/> </Svg>;
