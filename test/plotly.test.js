import { expect } from '@esm-bundle/chai';
import * as plotlyJs from "plotly.js-esm";

describe("test bundle", () => {
    it('', () => {
        expect(plotlyJs).to.equal(!undefined);
    })
});