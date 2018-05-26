import _ from 'lodash';
import ppJj0E8g2R from '../../constants/ppJj0E8g2R.json';
const URL = "http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";

describe('Programs endpoint', () => {
    it('returns a JSON blob', () => {
       browser.url(URL);
       // This feels hacky and outside the scope of UI Testing, should instead be an integ test using curl or similar
       const jsonObj = JSON.parse(browser.element('body').getText());
       expect(_.isEqual(jsonObj, ppJj0E8g2R));
    });
});