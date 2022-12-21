open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 28 28" ?width ?height ?fill ?stroke ?style> <G fill="none"> <Rect fill="#cb3837" height={28.->Style.dp} rx={2.->Style.dp} width={28.->Style.dp}/> <Path d="m6 21.9898219h8l.0101781-11.9796438h3.9898219l-.0101781 11.9898219h4l.0101781-15.97964377-15.97964377-.02035623z" fill="#fff"/> </G> </Svg>
;
