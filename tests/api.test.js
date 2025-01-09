const { test, expect, request } = require('@playwright/test');

test.describe('API', () => {
	test('GET users', async ({}) => {
		const req = await request.newContext();
		const res = await req.get('https://reqres.in/api/users/2');
		expect(res.status()).toBe(200);

		const resBody = await res.json();
		console.log(resBody);
		expect(resBody.data.first_name).toBe('Janet');
		expect(resBody.data.last_name).toBe('Weaver');
	});

	test('POST users', async ({}) => {
		const req = await request.newContext();
		const res = await req.post('https://reqres.in/api/login', {
			data: {
				email: 'eve.holt@reqres.in',
				password: 'cityslicka',
			},
		});

		expect(res.status()).toBe(200);

		const resBody = await res.json();
		console.log(resBody);
		expect(resBody.token).toBeDefined();
	});

	test('PUT users', async ({}) => {
		const req = await request.newContext();
		const res = await req.put('https://reqres.in/api/users/2', {
			data: {
				name: 'morpheus',
				job: 'zion resident',
			},
		});

		expect(res.status()).toBe(200);

		const resBody = await res.json();
		console.log(resBody);
		expect(resBody.name).toBe('morpheus');
		expect(resBody.job).toBe('zion resident');
	});

	test('DELETE users', async ({}) => {
		const req = await request.newContext();
		const res = await req.delete('https://reqres.in/api/users/2');

		console.log(res.status());
		expect(res.status()).toBe(204);
	});
});
