import Page from '../page';

export default class RNPage extends Page {
    constructor(...args) {
        super(args);
        this.onAirSlider = new OnAirSlider();
    }

    open(slug) {
        super.open(`radionational/${slug || ''}`);
    }

    get navBar() {
        return browser.element('#rn-navigation');
    }

    get programsDropdownLink() {
        return this.navBar.element('a*=Programs');
    }

    get programsDropdown() {
        return this.navBar.element('#rn-programindex');
    }

    getProgramDropdownLink(programName) {
        return this.programsDropdown.element(`a*=${programName}`);
    }
}

class OnAirSlider {
    get wrapper() {
        return browser.element('.on-air-wrapper');
    }

    get programs() {
        return this.wrapper.elements('li:not(.guide)').value;
    }

    get lastProgram() {
        return this.programs[this.programs.length - 1];
    }

    get nextArrow() {
        return this.wrapper.element('div#right-arrow');
    }
}