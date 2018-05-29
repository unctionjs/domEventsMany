import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import mapValues from "@unction/mapvalues";
import domEvents from "@unction/domevents";
import { empty } from "most";
export default function domEventsMany(options) {
  const domEventsWithOptions = domEvents(options);
  return function domEventsManyOptions(names) {
    return function domEventsManyOptionsNames(dom) {
      return reduceValues(mergeRight)(empty())(mapValues(name => domEventsWithOptions(name)(dom))(names));
    };
  };
}
