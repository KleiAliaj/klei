open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m25.980469 2.9902344a1.0001 1.0001 0 0 0 -.111328.0097656h-5.869141a1.0001 1.0001 0 1 0 0 2h3.585938l-10.292969 10.292969a1.0001 1.0001 0 1 0 1.414062 1.414062l10.292969-10.2929685v3.5859375a1.0001 1.0001 0 1 0 2 0v-5.8730469a1.0001 1.0001 0 0 0 -1.019531-1.1367187zm-19.980469 4.0097656c-1.0930628 0-2 .9069372-2 2v15c0 1.093063.9069372 2 2 2h15c1.093063 0 2-.906937 2-2v-10-2.578125l-2 2v2.578125 8h-15v-15h8 2 .578125l2-2h-2.578125-2z"/> </Svg>;
