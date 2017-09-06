import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"
import domEvents from "@unction/domevents"
import xstream from "xstream"

export default function domEventsMany (options: DOMEventsConfigurationType): Function {
  const domEventsWithOptions = domEvents(options)
  return function domEventsManyOptions (names: Array<DOMEventNameType>): Function {
    return function domEventsManyOptionsNames (dom: DOMStreamType): DOMEventStreamType {
      return reduceValues(
        mergeRight
      )(
        xstream.never()
      )(
        mapValues((name: DOMEventNameType): DOMEventStreamType => domEventsWithOptions(name)(dom))(eventNames)
      )
    }
  }
}
