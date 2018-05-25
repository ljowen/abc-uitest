import NewsPage from './news.page';

class ArticlePage extends NewsPage {
    open(articlePath) {
        super.open(articlePath);
    }

    get section() {
        return browser.element('.article.section');
    }
}

export class VideoArticlePage extends ArticlePage {
    get videoPlayer() {
        return this.section.element('.video video')
    }

    get controls() {
        return this.section.element('.jw-controlbar');
    }

    get pauseBtn() {
        return this.controls.element('.jw-icon[aria-role="button"][aria-label="Play"]');
    }
}

export class GalleryArticlePage extends ArticlePage {
    get mediaSection() {
        return browser.element('.section.media-article')
    }

    get gallery() {
        return this.section.element('.gallery.article > .slideshowpro-gallery')
    }

    get thumbnails() {
        return this.gallery.elements('ul.lSPager > li');
    }

    get nextBtn() {
        return this.gallery.element('a.lSNext')
    }

    get prevBtn() {
        return this.gallery.element('a.lSPrev')
    }
}