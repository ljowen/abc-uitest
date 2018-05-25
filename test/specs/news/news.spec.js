import NewsPage from '../../pages/news/news.page';

const newsPage = new NewsPage();

describe('News landing page', function() {
    beforeEach(function() {
        newsPage.open();
    })

    it('should have a banner', () => {
        expect(newsPage.banner.isExisting());
    });

    it('should have a link to just in', () => {
        newsPage.justInLink.click();
        expect(browser.getUrl()).to.equal('http://www.abc.net.au/news/justin/');
    });
});