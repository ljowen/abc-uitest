import Page from '../page';

export default class Station extends Page {
    get playingPanel() {
        return browser.element('.rp__playingItem__hero__primary');
    }

    get playerControls() {
        return browser.element('div#player');
    }

    get playBtn() {
        return this.playerControls.element('div[role="button"][aria-label="Play"]')
    }
}
