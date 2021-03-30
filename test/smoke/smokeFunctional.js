import sel from '../../data/selectors';

describe('Required fields and Story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue('MisterBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();

        let submitBtn = $(sel.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with a valid values', function () {
        browser.refresh();

        $(sel.name).setValue('MisterBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submitButton).click();

        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});

