import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Homepage ${config.name} version`, async ({ homepage, page }) => {
    await test.step(`Navigate to Homepage ${config.name} version`, async () => {
        await homepage.navigateToHomepage();
    });
    await test.step(`Check Navigation Visibility ${config.name} version`, async () => {
        await homepage.verifyNavigationVisibility();
    });
    await test.step(`Check Hero Banner Visibility ${config.name} version`, async () => {
        await homepage.verifyHeroVisibility();
    });
    await test.step(`Check Item Container Visibility ${config.name} version`, async () => {
        await homepage.verifyItemContainerVisibility();
    });
    await test.step(`Check Footer Visibility ${config.name} version`, async () => {
        await homepage.verifyFooterVisibility();
    });
});