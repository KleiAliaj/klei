open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m3 4v2.8320312a1.0001 1.0001 0 0 0 0 .3261719v1.8417969l3 2v-3h3v4.201172l4.064453 3.480469-1.064453 6.318359h7l.8125-4.058594 3.109375 4.058594h3.078125l-4.753906-6.603516c-.529-.734-1.295875-1.262187-2.171875-1.492187l-4.292969-1.126953-3.273438-1.990235-.375-2.7949215a1.0001 1.0001 0 0 0 -.132812-1.9921875h-5v-2zm16 2a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 -3-3zm-16 18a1.0001 1.0001 0 1 0 0 2h24a1.0001 1.0001 0 1 0 0-2z"/> </Svg>;
