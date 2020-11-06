const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKAppToolbarGuideURL: 'alfa',
			OLSKAppToolbarStorageStatus: 'alfa',
		});
	});

	describe('OLSKAppToolbar', function test_OLSKAppToolbar () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbarJustify');
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

	describe('OLSKAppToolbarFundButton', function test_OLSKAppToolbarFundButton () {

		it('classes OLSKCommonButton', function () {
			browser.assert.hasClass(OLSKAppToolbarFundButton, 'OLSKCommonButton');
		});

		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchFund', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarFundButton);
			});
		
			it('sends OLSKAppToolbarDispatchFund', function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchFund', '1');
			});
		
		});

	});

	describe('OLSKAppToolbarStorageStatus', function test_OLSKAppToolbarStorageStatus () {

		it('binds OLSKAppToolbarStorageStatus', function () {
			browser.assert.text(OLSKAppToolbarStorageStatus, 'alfa');
		});

	});

	describe('OLSKAppToolbarStorageButton', function test_OLSKAppToolbarStorageButton () {

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

		it('sets src', function () {
			browser.assert.elements(`${ OLSKAppToolbarStorageButtonImage } #_OLSKSharedCloud`, 1);
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

});
