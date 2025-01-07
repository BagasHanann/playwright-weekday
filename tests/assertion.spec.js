const { test, expect } = require('@playwright/test');

test('assertion and locators', async ({ page }) => {
	await page.goto('https://saucedemo.com/');

	const inputUsername = page.locator('#user-name');
	await inputUsername.fill('standard_user');
	await expect(inputUsername).toHaveValue('standard_user');

	const inputPassword = page.locator('#password');
	await inputPassword.fill('secret_sauce');
	await expect(inputPassword).toHaveValue('secret_sauce');

	const buttonLogin = page.locator('#login-button');
	await expect(buttonLogin).toContainText('Login');
	await buttonLogin.click();

	const chooseItem = page.locator('#add-to-cart-sauce-labs-backpack');
	await chooseItem.click();

	const removeItem = page.locator('#remove-sauce-labs-backpack');
	await expect(removeItem).toContainText('Remove');
	await removeItem.click();

	const buttonCart = page.locator('#shopping_cart_container');
	await buttonCart.click();

	const buttonCheckout = page.locator('#checkout');
	await expect(buttonCheckout).toContainText('Checkout');
	await buttonCheckout.click();

	const firstNameInput = page.locator('#first-name');
	await firstNameInput.fill('Bagas');
	await expect(firstNameInput).toHaveValue('Bagas');

	const lastNameInput = page.locator('#last-name');
	await lastNameInput.fill('Hananto');
	await expect(lastNameInput).toHaveValue('Hananto');

	const zipCodeInput = page.locator('#postal-code');
	await zipCodeInput.fill('12345');
	await expect(zipCodeInput).toHaveValue('12345');

	const buttonContinue = page.locator('#continue');
	await expect(buttonContinue).toContainText('Continue');
	await buttonContinue.click();

	const buttonFinish = page.locator('#finish');
	await expect(buttonFinish).toContainText('Finish');
	await buttonFinish.click();

	const titleSuccess = page.locator('#checkout_complete_container');
	await expect(titleSuccess).toContainText('Thank you for your order!');

	const buttonBackHome = page.locator('#back-to-products');
	await buttonBackHome.click();
});
