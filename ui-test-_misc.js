const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Misc', function () {


	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKAppToolbarGuideURL: 'alfa',
			OLSKAppToolbarDonateURL: 'bravo',
			OLSKAppToolbarLauncherVisible: true,
		});
	});

	describe('OLSKAppToolbarGuideLink', function test_OLSKAppToolbarGuideLink () {

		it('sets href', function () {
			browser.assert.attribute(OLSKAppToolbarGuideLink, 'href', 'alfa');
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKAppToolbarGuideLink, 'target', '_blank');
		});

	});

	describe('OLSKAppToolbarDonateLink', function test_OLSKAppToolbarDonateLink () {

		it('sets href', function () {
			browser.assert.attribute(OLSKAppToolbarDonateLink, 'href', 'bravo');
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKAppToolbarDonateLink, 'target', '_blank');
		});

	});

	describe('OLSKAppToolbarLauncherButton', function test_OLSKAppToolbarLauncherButton () {

		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKLayoutButtonNoStyle');
		});

		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKLayoutElementTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarLauncherButton);
			});
	
			it('sends OLSKAppToolbarDispatchLauncher', function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarLauncherButtonImage', function test_OLSKAppToolbarLauncherButtonImage () {
	
		it('sets src', function () {
			browser.assert.elements(`${ OLSKAppToolbarLauncherButtonImage } #_OLSKSharedLauncher`, 1);
		});

	});

	describe('OLSKAppToolbarStorageStatus', function test_OLSKAppToolbarStorageStatus () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarStorageStatus: 'alfa',
			});
		});

		it('sets text', function () {
			browser.assert.text(OLSKAppToolbarStorageStatus, 'alfa');
		});

	});

	describe('OLSKAppToolbarStorageButton', function test_OLSKAppToolbarStorageButton () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarStorageButton, 'OLSKLayoutButtonNoStyle');
		});

		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarStorageButton, 'OLSKLayoutElementTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OLSKAppToolbarStorageButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchStorage', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarStorageButton);
			});
	
			it('sends OLSKAppToolbarDispatchStorage', function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchStorage', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarStorageButtonImage', function test_OLSKAppToolbarStorageButtonImage () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
	
		it('sets src', function () {
			browser.assert.elements(`${ OLSKAppToolbarStorageButtonImage } #_OLSKSharedCloud`, 1);
		});

	});

});
