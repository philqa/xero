import {by, element} from 'protractor';
import {BasePage} from "./basePage";
import * as waits from "../util/waits";

export class HomePage extends BasePage {

    loginLink = element(by.cssContainingText('a', 'Login'));

    constructor() {
        super();
    }

    goToPage() {
        return this.navigateTo('/');
    }

    async clickLoginLink() {
        await waits.waitForVisibilityOf(this.loginLink);
        await this.loginLink.click();
    }

}