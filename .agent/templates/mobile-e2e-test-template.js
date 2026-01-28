/**
 * @file Mobile E2E Test Template
 * @description Detox/Jest E2E test suite for React Native or native apps
 */

describe('Login Flow', () => {

    beforeAll(async () => {
        // Launch app with permissions
        await device.launchApp({
            permissions: { notifications: 'YES' }
        });
    });

    beforeEach(async () => {
        // Reload react native bundle if needed
        await device.reloadReactNative();
    });

    it('should show login screen initially', async () => {
        await expect(element(by.id('login_screen'))).toBeVisible();
    });

    it('should show error for invalid credentials', async () => {
        await element(by.id('email_input')).typeText('invalid@user.com');
        await element(by.id('password_input')).typeText('123456');
        await element(by.id('password_input')).tapReturnKey();

        await element(by.id('login_button')).tap();

        await expect(element(by.text('Invalid credentials'))).toBeVisible();
    });

    it('should login successfully and navigate to home', async () => {
        await element(by.id('email_input')).clearText();
        await element(by.id('email_input')).typeText('user@example.com');
        await element(by.id('password_input')).replaceText('password123'); // faster than typeText

        await element(by.id('login_button')).tap();

        // Wait for navigation
        await waitFor(element(by.id('home_screen')))
            .toBeVisible()
            .withTimeout(5000);

        await expect(element(by.id('welcome_text'))).toHaveText('Welcome back!');
    });

});
