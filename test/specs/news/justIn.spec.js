import JustInPage from '../../pages/news/justIn.page';

const justInPage = new JustInPage();

describe('News Just In Page', () => {
    beforeEach(() => {
        justInPage.open();
    });

    it('should have a sub-header Just IN', () => {
        expect(justInPage.subHeader.getText()).to.contain('Just In');
    });

    it('should have a list of articles with title, timestamp and textbody', () => {
        expect(justInPage.articles.length).to.not.equal(0);
        justInPage.articles.forEach(article => {
            expect(article.title.getText()).to.have.length.greaterThan(0);
            expect(article.timestamp.getText()).to.have.length.greaterThan(0);
            expect(article.text.getText()).to.have.length.greaterThan(0);
        })
    });
});
