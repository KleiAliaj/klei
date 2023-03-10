open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m15 3c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm7 8h-3c-.552 0-1 .448-1 1v7.967c0 .57-.463 1.033-1.033 1.033-.544 0-.995-.422-1.031-.964l-.438-4.57c-.018-.262-.235-.466-.498-.466s-.48.204-.498.465l-.438 4.57c-.036.543-.487.965-1.031.965-.57 0-1.033-.463-1.033-1.033v-7.967c0-.552-.448-1-1-1h-3c-.553 0-1-.448-1-1s.447-1 1-1h14c.553 0 1 .448 1 1s-.447 1-1 1z"/> </Svg>;
