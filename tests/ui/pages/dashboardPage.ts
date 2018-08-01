import {by, element} from 'protractor';
import {BasePage} from "./basePage";
import * as waits from "../util/waits";

export class DashboardPage extends BasePage {

    profileLink = element(by.css('a[class="username"]'));
    logoutLink = element(by.linkText('Logout'));
    accountsMenuLink = element(by.linkText('Accounts'));
    accountsMenuBankAccountsLink = element(by.linkText('Bank Accounts'));

    constructor() {
        super();
    }

    async clickProfileLink() {
        await waits.waitForVisibilityOf(this.profileLink);
        await this.profileLink.click();
    }

    async clickAccountsMenuLink() {
        await waits.waitForVisibilityOf(this.accountsMenuLink);
        await this.accountsMenuLink.click();
    }

    async clickAccountsMenuBankAccountsLink() {
        await waits.waitForVisibilityOf(this.accountsMenuBankAccountsLink);
        await this.accountsMenuBankAccountsLink.click();
    }

    async clickLogoutLink() {
        await waits.waitForVisibilityOf(this.logoutLink);
        await this.logoutLink.click();
    }

    async isLoggedIn() {
        await waits.waitForVisibilityOf(this.profileLink);
        return await this.profileLink.isPresent();
    }

}