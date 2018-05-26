import ArticlePage from './article.page';

export default class GalleryArticlePage extends ArticlePage {
    get mediaSection() {
        return browser.element('.section.media-article')
    }

    get gallery() {
        return this.mediaSection.element('.gallery.article > .slideshowpro-gallery');
    }

    get currentImageWrapper() {
        return this.gallery.element('ul.imageGallery.lightSlider > li.active');
    }

    get currentImage() {
        return this.gallery.element('ul.imageGallery.lightSlider > li.active > img');
    }

    get thumbnails() {
        return this.gallery.elements('ul.lSPager > li').value
            .map(thumb => new Thumbnail(thumb));
    }

    get activeThumbnail() {
        return this.thumbnails.find(thumb => thumb.isActive);
    }

    get nextBtn() {
        return this.gallery.element('a.lSNext');
    }

    get prevBtn() {
        return this.gallery.element('a.lSPrev');
    }
}

class Thumbnail {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    get img() {
        return this.wrapper.element('img');
    }

    get isActive() {
        return this.wrapper.getAttribute('class') === 'active';
    }
}