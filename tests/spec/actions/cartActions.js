import cartLocator from '../locator/cartLocator';
const { expect } = require('@playwright/test');

export default class cartActions {
	constructor(page) {
		this.page = page;
		this.cartLocator = new cartLocator();
		this.chooseItem = this.page.locator(this.cartLocator.chooseItem);
		this.removeItem = this.page.locator(this.cartLocator.removeItem);
		this.buttonCart = this.page.locator(this.cartLocator.buttonCart);
	}

	async addItemToCart() {
		await this.chooseItem.click();
	}

	async removeItemFromCart() {
		await this.removeItem.click();
	}

	async openCart() {
		await this.buttonCart.click();
	}
}
