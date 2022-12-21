open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m6 4c-1.105 0-2 .895-2 2v18c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2v-18c0-1.105-.895-2-2-2zm6 4c.553 0 1 .447 1 1v2h4v-2c0-.553.447-1 1-1s1 .447 1 1v2h2c.553 0 1 .447 1 1s-.447 1-1 1h-2v4h2c.553 0 1 .447 1 1s-.447 1-1 1h-2v2c0 .553-.447 1-1 1s-1-.447-1-1v-2h-4v2c0 .553-.447 1-1 1s-1-.447-1-1v-2h-2c-.553 0-1-.447-1-1s.447-1 1-1h2v-4h-2c-.553 0-1-.447-1-1s.447-1 1-1h2v-2c0-.553.447-1 1-1zm1 5v4h4v-4z"/> </Svg>;
