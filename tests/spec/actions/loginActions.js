import loginLocator from '../locator/loginLocator';
const { expect } = require('@playwright/test');

export default class loginActions {
	// /**
	//  * @param {import('@playwright/test').Page} page
	//  */
	constructor(page) {
		this.page = page;
		this.loginLocator = new loginLocator();
		this.inputUsername = this.page.locator(this.loginLocator.inputUsername);
		this.inputPassword = this.page.locator(this.loginLocator.inputPassword);
		this.clickLogin = this.page.locator(this.loginLocator.buttonLogin);
	}

	async goTo() {
		await this.page.goto('https://saucedemo.com/');
	}

	async inputLogin() {
		await this.inputUsername.fill('standard_user');
		await expect(this.inputUsername).toHaveValue('standard_user');
		await this.inputPassword.fill('secret_sauce');
		await expect(this.inputPassword).toHaveValue('secret_sauce');
		await this.clickLogin.click();
	}
}
