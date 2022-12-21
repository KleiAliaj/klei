open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 24 24" ?width ?height ?fill ?stroke ?style> <Path d="m12 12.713-11.985-9.713h23.971zm-5.425-1.822-6.575-5.329v12.501zm10.85 0 6.575 7.172v-12.501zm-1.557 1.261-3.868 3.135-3.868-3.135-8.11 8.848h23.956z"/> </Svg>;
