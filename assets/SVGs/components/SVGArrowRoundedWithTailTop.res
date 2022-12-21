open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 24 24" ?width ?height ?fill ?stroke ?style> <Path d="m17 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/> <Path d="m7 10c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z"/> <Path d="m12 21c-.6 0-1-.4-1-1v-16c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1z"/> </Svg>;
