import {by, element} from 'protractor';
import {BasePage} from "./basePage";
import * as waits from "../util/waits";

export class BankAccountsPage extends BasePage {

    pageTitle = element(by.id('title'));
    addBankAccountButton = element(by.css('span[data-automationid="Add Bank Account-button"]'));
    popularBanksANZListItem = element(by.cssContainingText('.ba-banklist--item', 'ANZ (AU)'));
    autoImportSkipButton = element(by.css('a[data-automationid="skipButton"]'));
    accountNameInput = element(by.css('input[id^="accountname"]'));
    accountTypeInput = element(by.css('input[id^="accounttype"]'));
    accountTypeEverydayItem = element.all(by.css('li.ba-combo-list-item')).first();
    accountNumberBSBInput = element(by.css('input[placeholder="BSB"]'));
    accountNumberInput = element.all(by.xpath('//div[@data-automationid="accountNumber"]//input')).first();
    continueButton = element(by.css('a[data-automationid="continueButton"]'));
    statusMessage = element(by.id('notify01'));

    constructor() {
        super();
    }

    async getPageTitle() {
        await waits.waitForVisibilityOf(this.pageTitle);
        return await this.pageTitle.getText();
    }

    async pageHeaderContainingText(headerText: string) {
        let el = element(by.cssContainingText('h1', headerText));
        await waits.waitForVisibilityOf(el);
        return el.isPresent();
    }

    async clickAddBankAccountButton() {
        await waits.waitForVisibilityOf(this.addBankAccountButton);
        await this.addBankAccountButton.click();
    }

    async clickSkipAutoImportButton() {
        await waits.waitForVisibilityOf(this.autoImportSkipButton);
        await this.autoImportSkipButton.click();
    }

    async clickANZFromPopularBanksList() {
        await waits.waitForVisibilityOf(this.popularBanksANZListItem);
        await this.popularBanksANZListItem.click();
    }

    async enterAcountName(accountName: string) {
        await waits.waitForVisibilityOf(this.accountNameInput);
        await this.accountNameInput.sendKeys(accountName);
    }

    async clickAccountType() {
        await waits.waitForVisibilityOf(this.accountTypeInput);
        await this.accountTypeInput.click();
    }

    async clickAccountTypeEverydayItem() {
        await waits.waitForVisibilityOf(this.accountTypeEverydayItem);
        await this.accountTypeEverydayItem.click();
    }

    async enterAccountNumberBSB(bsb: string) {
        await waits.waitForVisibilityOf(this.accountNumberBSBInput);
        await this.accountNumberBSBInput.sendKeys(bsb);
    }

    async enterAccountNumber(accountNumber: string) {
        await waits.waitForVisibilityOf(this.accountNumberInput);
        await this.accountNumberInput.sendKeys(accountNumber);
    }

    async clickContinueButton() {
        await waits.waitForVisibilityOf(this.continueButton);
        await this.continueButton.click();
    }

    async getStatusMessage() {
        await waits.waitForVisibilityOf(this.statusMessage);
        return await this.statusMessage.getText();
    }

}