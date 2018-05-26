import StationPage from '../../pages/radio/station.page';

const stationPage = new StationPage();

describe('A station page', () => {
    beforeEach(() => {
        stationPage.open('http://radio.abc.net.au/stations/local_sydney/live');
    });

    it('Shows a player with controls once playback starts', () => {
       expect(stationPage.playingPanel.isExisting());
       stationPage.playingPanel.click();
       browser.waitUntil(_ => stationPage.playerControls.isExisting());
       expect(stationPage.playerControls.isExisting());
       expect(stationPage.playBtn.isExisting());
       stationPage.playBtn.click();
       browser.waitUntil(_ => stationPage.playerControls.element('.rp__controls__title').isExisting);
    });
});

