const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Shortcuts', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('Space', function test_Space () {

		before(function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '0');
		});

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'Space');
		});
		
		it('sends no OLSKAppToolbarDispatchLauncher', function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '0');
		});

	});

	describe('AltSpace', function test_AltSpace () {

		before(function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '0');
		});

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'Space', {
				altKey: true,
			});
		});
		
		it('sends OLSKAppToolbarDispatchLauncher', function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
		});

	});

});
