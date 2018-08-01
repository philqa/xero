import {browser} from 'protractor';
import {HomePage} from "../pages/homePage";
import {LoginPage} from "../pages/loginPage";
import {DashboardPage} from "../pages/dashboardPage";
import {BankAccountsPage} from "../pages/bankAccountsPage";

describe('add bank account scenarios', () => {
    let homePage = new HomePage();
    let loginPage = new LoginPage();
    let dashboardPage = new DashboardPage();
    let bankAccountsPage = new BankAccountsPage();
    let accountName;

    beforeAll(async () => {
        console.log('running beforeAll');
        await browser.waitForAngularEnabled(false);
        await homePage.goToPage();
    });

    describe('add organisation happy path', () => {
        it('should navigate to the login page when the login link is clicked', async () => {
            await loginPage.goToPage();
            const currentUrl = await browser.getCurrentUrl();
            const expectedUrl = await loginPage.getUrl();
            expect(currentUrl).toEqual(expectedUrl);
        });
        it('should authenticate the user if valid details are submitted', async () => {
            await loginPage.login();
            expect(await dashboardPage.isLoggedIn()).toBe(true);
        });
        it('should navigate to the Bank Accounts page when selected from the menu', async () => {
            await dashboardPage.clickAccountsMenuLink();
            await dashboardPage.clickAccountsMenuBankAccountsLink();
            const pageTitle = await bankAccountsPage.getPageTitle();
            expect(pageTitle).toEqual('Bank Accounts');
        });
        it('should load add bank accounts page when the Add Bank Account button is clicked', async () => {
            await bankAccountsPage.clickAddBankAccountButton();
            const header = await bankAccountsPage.pageHeaderContainingText('Add Bank Accounts');
            expect(header).toBeTruthy('Failed to locate Add Bank Accounts header');
        });
        it('should display the account details page when an ANZ account is chosen to be added', async () => {
            await bankAccountsPage.clickANZFromPopularBanksList();
            const header = await bankAccountsPage.pageHeaderContainingText('Bank Accounts');
            expect(header).toBeTruthy('Failed to locate Bank Accounts header');
        });
        it('should process the bank details if the form is successfully filled and submitted', async () => {
            accountName = 'Testing' + (new Date).getTime();
            await bankAccountsPage.enterAcountName(accountName);
            await bankAccountsPage.clickAccountType();
            await bankAccountsPage.clickAccountTypeEverydayItem();
            await bankAccountsPage.enterAccountNumberBSB('012346');
            await bankAccountsPage.enterAccountNumber('12345678');
            await bankAccountsPage.clickContinueButton();
        });
        it('should show the auto import transactions page', async () => {
            await bankAccountsPage.clickSkipAutoImportButton();
            const header = await bankAccountsPage.pageHeaderContainingText('Add Bank Accounts');
            expect(header).toBeTruthy('Failed to locate Add Bank Accounts header');
        });
        it('should successfully add the bank account and display a success message', async () => {
            const statusMessage = await bankAccountsPage.getStatusMessage();
            expect(statusMessage).toContain(accountName + ' has been added.');
        });
    });
});