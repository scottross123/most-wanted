import { describe, it, expect } from "vitest";
import getWanted from "../getWanted";

describe('test get wanted from fbi api', () => {
    it('get data without paramters', () => {
        console.log(getWanted());
    })
});