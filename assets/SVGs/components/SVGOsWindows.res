open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 50 50" ?width ?height ?fill ?stroke ?style> <Path d="m46 4.867188-42 5.25v29.765625l42 5.25zm-2 2.265625v16.867187h-19v-14.492187zm-21 2.625v14.242187h-17v-12.117187zm-17 16.242187h17v14.242188l-17-2.125zm19 0h19v16.867188l-19-2.375z"/> </Svg>;
