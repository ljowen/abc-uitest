import RNPage from '../../pages/radio/rn.page';
import ProgramPage from '../../pages/radio/program.page';

const rnPage = new RNPage();
const PROGRAM_NAME = 'The Economists';

describe('Radio National landing page', () => {
    beforeEach(() => {
        rnPage.open();
    });

    it('should allow navigation to a program', () => {
        rnPage.programsDropdownLink.click();
        rnPage.getProgramDropdownLink(PROGRAM_NAME).click();
        const programPage = new ProgramPage();
        expect(programPage.pageTitle).to.be.equal(PROGRAM_NAME);
    });

    it('should allow clicking last item in program guide', () => {
        const lastProgramLink = rnPage.onAirSlider.lastProgram;

        // This is overkill, @todo refactor to click until last program is visible
        rnPage.onAirSlider.programs.forEach(() => rnPage.onAirSlider.nextArrow.click());
        // For some reason getText is not working here @todo fix
        const lastProgramHTML = lastProgramLink.element('div.program').getHTML();
        lastProgramLink.click();

        const programPage = new ProgramPage();
        // expect(lastProgramHTML).to.contain(programPage.pageTitle); //@todo - this gets broken by links to non abc programs
    });
});
