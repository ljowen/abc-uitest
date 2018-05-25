import { GalleryArticlePage, VideoArticlePage } from '../../pages/news/article.page';
import NEWS_ARTICLE_SAMPLES from '../../constants/news_articles';

const galleryPage = new GalleryArticlePage(NEWS_ARTICLE_SAMPLES.picOfTheWeek.url);
const videoPage = new VideoArticlePage();

describe('A Video Article', () => {
    beforeEach(() => {
        videoPage.open(NEWS_ARTICLE_SAMPLES.ebolaVideo.url);
    });

    it('should have a initially paused video element', () => {
        expect(videoPage.videoPlayer.isExisting);
        expect(! videoPage.pauseBtn.isExisting);
    });

    describe('video player', () => {
        it('should start playback when clicked', () => {
            videoPage.videoPlayer.click();
            expect(videoPage.pauseBtn.isExisting);
        });
    });
});

// describe('A Gallery Page', () => {
//     beforeEach(() => {
//         galleryPage.open();
//     });
//
//     it('should have a sub-header Just IN', () => {
//         expect(justInPage.subHeader.getText()).to.contain('Just In');
//     });
//
//     it('should have a list of articles with title, timestamp and textbody', () => {
//         expect(justInPage.articles.length).to.not.equal(0);
//         justInPage.articles.forEach(article => {
//             expect(article.title.getText()).to.have.length.greaterThan(0);
//             expect(article.timestamp.getText()).to.have.length.greaterThan(0);
//             expect(article.text.getText()).to.have.length.greaterThan(0);
//         })
//     });
// });

