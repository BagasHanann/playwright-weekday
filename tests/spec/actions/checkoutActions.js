import { expect } from '@playwright/test';
import checkoutLocator from '../locator/checkoutLocator';

export default class checkoutActions {
	constructor(page) {
		this.page = page;
		this.checkoutLocator = new checkoutLocator();
		this.checkout = this.page.locator(this.checkoutLocator.checkout);
		this.firstName = this.page.locator(this.checkoutLocator.firstName);
		this.lastName = this.page.locator(this.checkoutLocator.lastName);
		this.zipCode = this.page.locator(this.checkoutLocator.zipCode);
		this.buttonContinue = this.page.locator(
			this.checkoutLocator.buttonContinue,
		);
		this.buttonFinish = this.page.locator(this.checkoutLocator.buttonFinish);
		this.titleSuccess = this.page.locator(this.checkoutLocator.titleSuccess);
		this.buttonBackHome = this.page.locator(
			this.checkoutLocator.buttonBackHome,
		);
	}

	async inputCheckout(firstName, lastName, zipCode) {
		await this.checkout.click();
		await this.firstName.fill(firstName);
		await expect(this.firstName).toHaveValue(firstName);

		await this.lastName.fill(lastName);
		await expect(this.lastName).toHaveValue(lastName);

		await this.zipCode.fill(zipCode);
		await expect(this.zipCode).toHaveValue(zipCode);
		await this.buttonContinue.click();
	}

	async finishCheckout() {
		await this.buttonFinish.click();
		await expect(this.titleSuccess).toContainText('Thank you for your order!');
	}

	async goBackHome() {
		await this.buttonBackHome.click();
	}
}
