import RNPage from './rn.page';

export default class ProgramPage extends RNPage {
    open(slug) {
        super.open(slug);
    }

    get pageTitle() {
        return browser.element('h2.rn-program-banner > a').getText();
    }

    get socialWrapper() {
        return browser.element('.ct-social-share');
    }

    get fbShareBtn() {
        return this.socialWrapper.element('.fb-share-button');
    }

    get twitterShareBtn() {
        return this.socialWrapper.element('.twitter-share-button');
    }

    get downloadAudioLink() {
        return browser.element('.cs-has-media a.ico.ico-download');
    }
}
