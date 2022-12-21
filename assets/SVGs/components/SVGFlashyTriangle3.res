open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg  viewBox="0 0 288 272" ?width ?height ?fill ?stroke ?style> <LinearGradient id="flashy-triangle-3-a" x1={19.028507->Style.pct} x2={89.260976->Style.pct} y1={0.->Style.pct} y2={73.030917->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#fecf24"/> <Stop offset={1.->Style.dp} stopColor="#fd12c9"/> </LinearGradient> <LinearGradient id="flashy-triangle-3-b" x1={89.260976->Style.pct} x2={14.927787->Style.pct} y1={69.255008->Style.pct} y2={31.222246->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#90f0ff"/> <Stop offset={1.->Style.dp} stopColor="#79e3ea"/> </LinearGradient> <Path d="m462.778216 3445.9274 220.369072 201.66557-243.031084 72.59684z" fill="url(#flashy-triangle-3-a)" fillRule=#evenodd stroke="url(#flashy-triangle-3-b)" strokeWidth={8.170213->Style.dp} transform="matrix(.20791169 .9781476 -.9781476 .20791169 3554.703395 -1163.351461)"/> </Svg>
;
