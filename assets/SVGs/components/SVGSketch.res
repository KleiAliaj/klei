open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <G fill="none" fillRule=#evenodd transform="translate(2 4)"> <Path d="m5.66129032.76685733 7.31249998-.76685733 7.3125.76685733 5.6612903 7.53859746-12.9737903 14.98621191-12.9737903-14.98621191z" fill="#fdb300"/> <Path d="m5.25497917 8.3054549 7.71875003 14.9862917-12.9737292-14.9862917m20.6926628 0-7.71875 14.9862917 12.9737292-14.9862917" fill="#ea6c00" fillRule=#nonzero/> <Path d="m5.25497917 8.3054549h15.43750003l-7.71875 14.9862917" fill="#fdad00"/> <Path d="m12.9737292 0-7.31250003.76672917-.40625 7.53864583m7.71887243-8.305375 7.3125.76672917.40625 7.53864583" fill="#fdd231" fillRule=#nonzero/> <Path d="m25.947642 8.305375-5.6612292-7.53864583.40625 7.53864583m-20.6926628 0 5.66122917-7.53864583-.40625 7.53864583" fill="#fdad00" fillRule=#nonzero/> <Path d="m12.9737292 0-7.71875003 8.305375h15.43750003" fill="#feeeb7"/> </G> </Svg>;
