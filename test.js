/* eslint-disable flowtype/require-variable-type */
import {test} from "tap";
import {empty} from "most";
import {of} from "most";
import streamSatisfies from "@unction/streamsatisfies";

import domEventsMany from "./";

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

test(({equal, same, doesNotThrow, end}) => {
  streamSatisfies(
    [
      {type: "click"},
      {type: "input"},
    ]
  )(
    (given) => (expected) => same(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) =>
      (position) => {
        equal(length, position);
        end();
      }
  )(
    domEventsMany({})(["click", "input"])(dom)
  );
});
