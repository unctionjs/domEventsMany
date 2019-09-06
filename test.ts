/* eslint-disable flowtype/require-variable-type */
import { empty } from "most";
import {of} from "most";
import streamSatisfies from "@unction/streamsatisfies";

import domEventsMany from "./index";

const dom = {
  events: (type) => {
    switch (type) {
      case "click": {
        return of({type: "click"});
      }
      case "input": {
        return of({type: "input"});
      }
      default: {
        return empty();
      }
    }
  },
};

test(done => {
  streamSatisfies(
    [
      {type: "click"},
      {type: "input"},
    ]
  )(
    (given) => (expected) => expect(given).toEqual(expected)
  )(
    doesNotThrow
  )(
    ({length}) =>
      (position) => {
        expect(length).toBe(position);
        done();
      }
  )(
    domEventsMany({})(["click", "input"])(dom)
  );
});
