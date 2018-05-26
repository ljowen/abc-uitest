import GalleryArticlePage from '../../pages/news/galleryArticle.page';
import NEWS_ARTICLE_SAMPLES from '../../constants/news_articles';

const galleryPage = new GalleryArticlePage();

describe('A Gallery Page', () => {
    beforeEach(() => {
        galleryPage.open(NEWS_ARTICLE_SAMPLES.picOfTheWeek.url);
    });

    it('should load the first image', () => {
        expect(galleryPage.currentImage.isExisting);
    })

    it('should load all images ', () => {
        galleryPage.thumbnails.forEach(thumbWrapper => {
            expect(thumbWrapper.isActive);
            galleryPage.nextBtn.click();
            expect(galleryPage.currentImage.isExisting);
            expect(galleryPage.currentImageWrapper.getAttribute('data-thumb')).to.be.equal(
                galleryPage.activeThumbnail.img.getAttribute('src')
            );
        });
    });
});

