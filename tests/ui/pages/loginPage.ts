import {browser, by, element} from 'protractor';
import {BasePage} from "./basePage";
import * as waits from "../util/waits";

export class LoginPage extends BasePage {

    emailInputField = element(by.id("email"));
    passwordInputField = element(by.id('password'));
    loginButton = element(by.id('submitButton'));
    errorMessage = element(by.css('div[class="x-boxed warning"]'));

    constructor() {
        super();
    }

    async getUrl() {
        return await browser.params.customConfig.loginUrl;
    }

    async goToPage() {
        return await browser.get(browser.params.customConfig.loginUrl);
    }

    async enterEmailAddress(emailAddress: string) {
        await waits.waitForVisibilityOf(this.emailInputField);
        await this.emailInputField.sendKeys(emailAddress);
    }

    async enterPassword(password: string) {
        await waits.waitForVisibilityOf(this.passwordInputField);
        await this.passwordInputField.sendKeys(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        await waits.waitForVisibilityOf(this.errorMessage);
        return await this.errorMessage.getText();
    }

    async loginWithCreds(email: string, password: string) {
        await this.enterEmailAddress(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async login() {
        await this.loginWithCreds(browser.params.customConfig.data.email, browser.params.customConfig.data.password);
    }

}