// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactNativeSvg from "react-native-svg";

function SVGTouch(Props) {
  var width = Props.width;
  var height = Props.height;
  var fill = Props.fill;
  var stroke = Props.stroke;
  var style = Props.style;
  var tmp = {
    viewBox: "0 0 30 30",
    children: React.createElement(ReactNativeSvg.Path, {
          d: "m13 1c-3.309 0-6 2.691-6 6 0 1.771.776 3.360937 2 4.460938v-4.460938c0-2.206 1.794-4 4-4s4 1.794 4 4v4.460938c1.224-1.099001 2-2.688938 2-4.460938 0-3.309-2.691-6-6-6zm-.125 4.0039062c-1.046705.0645586-1.875.9329688-1.875 1.9960938v15c-2.552-1.299-3.5949687-2-5.7929688-2-1 0-2.2070312.443266-2.2070312 1.572266v.427734l5 3 3.357422 2.685547c1.064.851 2.385047 1.314453 3.748047 1.314453h6.894531c2.209 0 4-1.791 4-4v-2-5.5c0-.791-.617203-1.472047-1.408203-1.498047-.42-.014-.729984.068406-.958985.191406-.358.192-.802578.029547-1.017578-.314453-.285-.457-.775234-.878906-1.615234-.878906-.5 0-.885828.141312-1.173828.320312-.356.222-.804766.064266-1.009766-.302734-.283-.509-.816406-1.017578-1.816406-1.017578-.621 0-1.067906.204219-1.378906.449219-.252.198-.621094.000687-.621094-.320313v-7.0214841c0-.996-.681063-1.9200781-1.664062-2.0800781-.156626-.025375-.311409-.0326602-.460938-.0234376z"
        })
  };
  if (style !== undefined) {
    tmp.style = Caml_option.valFromOption(style);
  }
  if (width !== undefined) {
    tmp.width = Caml_option.valFromOption(width);
  }
  if (height !== undefined) {
    tmp.height = Caml_option.valFromOption(height);
  }
  if (fill !== undefined) {
    tmp.fill = Caml_option.valFromOption(fill);
  }
  if (stroke !== undefined) {
    tmp.stroke = Caml_option.valFromOption(stroke);
  }
  return React.createElement(ReactNativeSvg.Svg, tmp);
}

var make = SVGTouch;

export {
  make ,
  
}
/* react Not a pure module */
