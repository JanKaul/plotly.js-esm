import { expect } from '@esm-bundle/chai';
import Plotly from "plotly.js-esm";

describe("test bundle", () => {
    it('', () => {
        expect(Plotly.newPlot).to.not.equal(undefined);
    })
});