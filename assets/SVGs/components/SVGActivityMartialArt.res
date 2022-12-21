open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m10.5 3a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.517578 1.9863281a1.0001 1.0001 0 0 0 -1.003906 1.1777344l1 5.9999995a1.0001 1.0001 0 0 0 .515625.71875l3.332031 1.775391-1.875 1.853516-4.695312-3.451172-6.3808598-3.6406251-.0195312.0039062a2.5 2.5 0 0 0 -1.390625-.4238281 2.5 2.5 0 0 0 -2.0878906 1.126953 2.5 2.5 0 0 0 -.0019532 0l-.0078124.013672a2.5 2.5 0 0 0 -.0253907.041016l-2.9648437 4.945312a2.5 2.5 0 0 0 -.4121094 1.373047 2.5 2.5 0 0 0 .1445312.828125l1.0097657 3.619141-2.83789065 4.304687-.09765625.123047a1.0004882 1.0004882 0 1 0 1.5625 1.25l4-5a1.0001 1.0001 0 0 0 .2167969-.693359l-.1289063-1.871094 2.65625 2.609375 1.4980474 4.570312.005859-.001953a1.0001 1.0001 0 1 0 1.951172-.433593l-1-5a1.0001 1.0001 0 0 0 -.123047-.314454 1.0001 1.0001 0 0 0 0-.001953l-.003906-.003906a1.0001 1.0001 0 0 0 -.126954-.167969 1.0001 1.0001 0 0 0 -.007812-.009765l-3.1171875-4.121094 1.9707031-3.291016a2.5 2.5 0 0 0 .15625-.259765l4.2714844 2.27539 5.583984 5.195313a2.5 2.5 0 0 0 .003907.005859 2.5 2.5 0 0 0 1.912109.888672 2.5 2.5 0 0 0 1.841797-.8125h.001953l3.917969-3.916016a2.5 2.5 0 0 0 .046875-.046875l.03125-.03125v-.005859a2.5 2.5 0 0 0 .660156-1.6875 2.5 2.5 0 0 0 -.212891-1.003906v-.003906l-1.835937-3.773438 3.412109-2.7714844.150391-.0898437a1.0001 1.0001 0 0 0 -.486328-1.8652344 1.0001 1.0001 0 0 0 -.541016.1503906l-5 3a1.0001 1.0001 0 0 0 -.445312 1.1425781l.037109.1230469.660156 2.5917969-3.30664-1.589844-1.458985-4.6386716a1.0001 1.0001 0 0 0 -.955078-.7851563zm-1.517578 15.0136719a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5z"/> </Svg>;
