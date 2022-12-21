open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg viewBox="0 0 30 30" ?width ?height ?fill ?stroke ?style> <Path d="m15.5 3a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm-7 5c-1.19 0-2.1815938.8332656-2.4335938 1.9472656l-.9882812 3.9628904c-.046.19-.078125.384844-.078125.589844 0 1.381 1.119 2.5 2.5 2.5.187 0 .3660156-.027406.5410156-.066406-.015-.145-.0410156-.286594-.0410156-.433594 0-.297.0308437-.596578.0898438-.892578l1.515625-7.3320314c-.3330001-.17-.7044688-.2753906-1.1054688-.2753906zm14.992188.9921875a.50005.50005 0 0 0 -.492188.5078125v.998047l-2.580078 2.289062-2.404297-1.5c-.007.05-.008578.098438-.017578.148438l-.480469 2.660156c1.389.471 2.743969.904297 3.042969.904297.239 0 .477062-.085953.664062-.251953l1.775391-1.576172v13.328125a.50005.50005 0 1 0 1 0v-14.214844l.349609-.310547c.413-.367.449985-.999109.083985-1.412109-.12073-.135126-.273617-.213789-.433594-.267578v-.794922a.50005.50005 0 0 0 -.507812-.5078125zm-9.994141.0078125c-1.227557 0-2.242525.887563-2.453125 2.054688l-.003906.003906-.988282 4.929687c-.000553.002661-.001408.005149-.001953.007813v.003906c-.032796.161534-.050781.328824-.050781.5 0 .771024.357278 1.451446.90625 1.910156l.007812.023438 3.892579 3.066406 1.111328 4.189453.09375.470703a1 1 0 0 0 .988281.839844 1 1 0 0 0 1-1 1 1 0 0 0 -.019531-.195312l-1-5a1.0001 1.0001 0 0 0 -.160157-.376954l-1.871093-3.423828c.0018-.008802.000246-.018508.001953-.027344l.982422-4.914062-.001953-.001953c.041539-.180761.068359-.367216.068359-.560547 0-1.379341-1.119867-2.4989304-2.501953-2.5zm-3.5410158 10.724609-.5136718 1.697266-2.2285156 3.939453-.0742188.125.0019531.001953a1 1 0 0 0 -.0332031.058594l-.0078125.015625a1 1 0 0 0 -.1015625.4375 1 1 0 0 0 1 1 1 1 0 0 0 .8085938-.412109h.0019531l.015625-.023438a1 1 0 0 1 .0019531-.001953l3.326172-5.050781z"/> </Svg>;
