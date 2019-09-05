import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import mapValues from "@unction/mapvalues";
import domEvents from "@unction/domevents";
import {empty} from "most";

type DOMEventsManyConfigurationType = {}
type DOMType = {}
type DOMEventStreamType = {}
type DOMEventNameType = string

export default function domEventsMany (options: DOMEventsManyConfigurationType) {
  const domEventsWithOptions = domEvents(options);

  return function domEventsManyOptions (names: Array<DOMEventNameType>): DOMEventStreamType {
    return function domEventsManyOptionsNames (dom: DOMType) {
      return reduceValues(mergeRight)(empty())(mapValues((name: string) => domEventsWithOptions(name)(dom))(names));
    };
  };
}
