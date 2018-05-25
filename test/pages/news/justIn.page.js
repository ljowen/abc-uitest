import NewsPage from './news.page';

export default class JustInPage extends NewsPage {
    get subHeader() {
        return browser.element('.header.subheader > h1');
    }

    get articles() {
        return browser.elements('ul.article-index > li')
            .value
            .map(element => new JustInArticle(element))
    }

    open() {
        super.open('justin');
    }
}

class JustInArticle {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    get title() {
        return this.wrapper.element('h3');
    }

    get timestamp() {
        return this.wrapper.element('p.published');
    }

    get text() {
        return this.wrapper.element('p:not(.topics):not(.published)');
    }
}