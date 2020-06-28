const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Shortcuts', function () {

	// before(function() {
	// 	return browser.OLSKVisit(kDefaultRoute, {
	// 		OLSKAppToolbarGuideURL: 'alfa',
	// 		OLSKAppToolbarDonateURL: 'bravo',
	// 		OLSKAppToolbarStorageStatus: 'alfa',
	// 	});
	// });

	describe('Enter', function test_Enter () {

		before(function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
		});

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'Enter');
		});
		
		it('sends OLSKAppToolbarDispatchLauncher', function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
		});

	});

	describe('AltEnter', function test_AltEnter () {

		before(function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
		});

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'Enter', {
				altKey: true,
			});
		});
		
		it('sends OLSKAppToolbarDispatchLauncher', function () {
			browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '2');
		});

	});

});
