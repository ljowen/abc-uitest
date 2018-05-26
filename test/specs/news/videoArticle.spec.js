const videoPage = new VideoArticlePage();
import NEWS_ARTICLE_SAMPLES from '../../constants/news_articles';

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

