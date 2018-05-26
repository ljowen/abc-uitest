import ArticlePage from './article.page';

export default class VideoArticlePage extends ArticlePage {
    get section() {
        return browser.element('.article.section');
    }

    get videoPlayer() {
        return this.section.element('.video video');
    }

    get controls() {
        return this.section.element('.jw-controlbar');
    }

    get pauseBtn() {
        return this.controls.element('.jw-icon[aria-role="button"][aria-label="Play"]');
    }
}
