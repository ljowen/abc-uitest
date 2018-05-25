import Page from '../page';

export default class NewsPage extends Page {
    get banner() {
        return browser.element('#header');
    }

    get justInLink() {
        return browser.element('#n-justin > a');
    }

    open(slug) {
        super.open(`news/${slug || ''}`);
    }
}