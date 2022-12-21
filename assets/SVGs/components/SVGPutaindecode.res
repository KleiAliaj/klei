open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <LinearGradient id="putaindecode-a" x1={50.->Style.pct} x2={50.->Style.pct} y1={0.->Style.pct} y2={100.->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#e51d58"/> <Stop offset={1.->Style.dp} stopColor="#cc0613"/> </LinearGradient> <G fill="none" fillRule=#evenodd> <Path d="m0 0h30v30h-30z" fill="url(#putaindecode-a)"/> <G fill="#fff" transform="translate(6 6)"> <Path d="m6.60128752 9.35985394-6.15128752-2.79927v-2.96058394l9 4.70656942v2.29635018l-9 4.6970804v-2.9510948l6.15128752-2.79927007z"/> <Path d="m14.85 0h2.7v18h-2.7z"/> </G> </G> </Svg>
;
