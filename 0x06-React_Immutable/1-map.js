// 1. Converting into Immutable using Map
import { Map } from 'immutable';

const getImmutableObject = (object) => Map(object);

module.exports = getImmutableObject;