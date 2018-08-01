import {browser} from 'protractor';
import {HomePage} from "../pages/homePage";
import {LoginPage} from "../pages/loginPage";
import {DashboardPage} from "../pages/dashboardPage";

describe('login scenarios', () => {
    let homePage = new HomePage();
    let loginPage = new LoginPage();
    let dashboardPage = new DashboardPage();

    beforeAll(async () => {
        console.log('running beforeAll');
        await browser.waitForAngularEnabled(false);
        await homePage.goToPage();
    });

    beforeEach(async () => {
        console.log('running beforeEach');
        await loginPage.goToPage();
        const currentUrl = await browser.getCurrentUrl();
        const expectedUrl = await loginPage.getUrl();
        expect(currentUrl).toEqual(expectedUrl);
    });

    describe('login with valid credentials (positive)', () => {

        afterAll(async () => {
            console.log('running afterAll');
            const logoutLinkIsVisible = await dashboardPage.logoutLink.isPresent();
            await dashboardPage.clickProfileLink();
            await dashboardPage.clickLogoutLink();
            await browser.manage().deleteAllCookies();
        });

        it('should authenticate the user if valid details are submitted', async () => {
            await loginPage.login();
            expect(await dashboardPage.isLoggedIn()).toBe(true);
        });

    });

    describe('login with invalid credentials (negative)', () => {
        it('should display an error message if incorrect credentials are submitted', async () => {
            await loginPage.loginWithCreds('incorrect@email.com', 'incorrect');
            const errorMessage = await loginPage.getErrorMessage();
            expect(errorMessage).toEqual('Your email or password is incorrect');
        });
    });

});