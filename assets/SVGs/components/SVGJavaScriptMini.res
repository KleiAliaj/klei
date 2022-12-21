open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m.00014102 15.0320337 2.7625772-1.8486955c.53305472 1.044881 1.01788066 1.928999 2.18087067 1.928999 1.11476124 0 1.81774477-.4821328 1.81774477-2.3576482v-12.754689h3.39251254v12.807705c0 3.8852856-2.05973469 5.6538335-5.06486593 5.6538335-2.71392538 0-4.28925718-1.5541454-5.08898027-3.4298167m12.0001434-.3580232 2.8087852-1.7480323c.7394785 1.2979614 1.7004995 2.2514335 3.4005688 2.2514335 1.4294864 0 2.3408933-.7682032 2.3408933-1.8277195 0-1.2712961-.9363573-1.7216752-2.5133953-2.4630591l-.862223-.3976654c-2.4888751-1.13858691-4.1397606-2.56894925-4.1397606-5.5884318 0-2.78119155 1.9712258-4.900224 5.0514543-4.900224 2.193055 0 3.770093.82122526 4.9034725 2.96661461l-2.6860407 1.8542305c-.5914968-1.13889522-1.2318906-1.58912025-2.2175753-1.58912025-1.0103482 0-1.6510287.68867014-1.6510287 1.58912025 0 1.11238412.6406805 1.56291738 2.1190641 2.25158751l.8623664.39720304c2.9323902 1.35098336 4.5832756 2.72816944 4.5832756 5.82687684 0 3.3376148-2.4394044 5.165026-5.7166551 5.165026-3.2032599 0-5.2731401-1.6421423-6.2833449-3.7876858" transform="translate(3 6)"/> </Svg>;
