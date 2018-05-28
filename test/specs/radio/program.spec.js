import RADIO_PROGRAM_SAMPLES from '../../constants/radio_programs';
import ProgramPage from '../../pages/radio/program.page';

const programPage = new ProgramPage();

const nextTab = currentTabId => browser.switchTab(browser.getTabIds().find(tabId => tabId !== currentTabId));

describe('RN Program Episode Page', function() {
    beforeEach(function () {
        programPage.open(RADIO_PROGRAM_SAMPLES.bigIdeas.aFortunateUniverse.url);
    });

    it('should have the correct title', () => {
        expect(programPage.pageTitle).to.equal('Big Ideas');
    });

    it('should render working facebook share media links', () => {
        expect(programPage.socialWrapper.isExisting);
        const programTabId = browser.getTabIds()[0];

        programPage.fbShareBtn.click();
        nextTab(programTabId);

        // @todo extract twitter/fb page models
        browser.waitForVisible('#homelink');
        expect(browser.getTitle()).to.equal('Facebook');
        browser.close();

        programPage.twitterShareBtn.click();
        nextTab(programTabId);
        browser.waitForVisible('h1.logo');
        expect(browser.getTitle()).to.equal('Share a link on Twitter');
        browser.close();
    });

    it('should direct to mp3 file from link', () => {
       // @todo actually dl file to disk to check
       //  programPage.downloadAudioLink.click();
        // expect(browser.getUrl()).to.equal(RADIO_PROGRAM_SAMPLES.bigIdeas.aFortunateUniverse.audio_link);

        expect(programPage.downloadAudioLink.getAttribute('href'))
            .to.equal(RADIO_PROGRAM_SAMPLES.bigIdeas.aFortunateUniverse.audio_link);
    });
})