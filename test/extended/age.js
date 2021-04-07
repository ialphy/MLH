import sel from '../../data/selectors';
import {name, age, gender, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {

        it('TC-XXX Placeholder is correct', function () {
            expect(tryAgainBtn).toEqual(true);
        });
    });

    describe('Positive cases', function () {

        it('TC-XXX Age = 1', function () {
            inputValues4(name.default, gender.she, age.min, story.comedy);
            let tryAgainBtn = $(sel.tryAgain).isDisplayed();
            expect(tryAgainBtn).toEqual(true);
        });

        it('TC-XXX Age = 999999999999', function () {
            expect(tryAgainBtn).toEqual(true);
        });
    });

    describe('Negative cases', function () {

        it('TC-XXX Age = 0', function () {
            expect(tryAgainBtn).toEqual(true);
        });

        it('TC-XXX Age = 9999999999999', function () {
            expect(tryAgainBtn).toEqual(true);
        });
    });

});



