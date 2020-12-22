const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Misc', function () {

	const item = {
		OLSKAppToolbarGuideURL: Math.random().toString(),
		OLSKAppToolbarFundLimitText: Math.random().toString(),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKAppToolbar', function test_OLSKAppToolbar () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbarJustify');
		});

		it('classes OLSKCommonEdgeTop', function () {
			browser.assert.hasClass(OLSKAppToolbar, 'OLSKCommonEdgeTop');
		});

	});

	describe('OLSKAppToolbarAproposButton', function test_OLSKAppToolbarAproposButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchApropos', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarAproposButton);
			});
	
			it('sends OLSKAppToolbarDispatchApropos', function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchApropos', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarAproposButtonImage', function test_OLSKAppToolbarAproposButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKAppToolbarAproposButtonImage } #_OLSKSharedApropos`, 1);
		});

	});

	describe('OLSKAppToolbarLanguageButton', function test_OLSKAppToolbarLanguageButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchTongue', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarLanguageButton);
			});
	
			it('sends OLSKAppToolbarDispatchTongue', function () {
				browser.assert.text('#TestOLSKAppToolbarDispatchTongue', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarLanguageButtonImage', function test_OLSKAppToolbarLanguageButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKAppToolbarLanguageButtonImage } #_OLSKSharedLanguage`, 1);
		});

	});

	describe('OLSKAppToolbarGuideLink', function test_OLSKAppToolbarGuideLink () {

		it('sets href', function () {
			browser.assert.attribute(OLSKAppToolbarGuideLink, 'href', item.OLSKAppToolbarGuideURL);
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKAppToolbarGuideLink, 'target', '_blank');
		});

	});

	describe('OLSKAppToolbarFundButton', function test_OLSKAppToolbarFundButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(OLSKAppToolbarFundButton, 'OLSKDecorPress');
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

	describe('OLSKAppToolbarFundLimit', function test_OLSKAppToolbarFundLimit () {

		it('binds OLSKAppToolbarFundLimitText', function () {
			browser.assert.text(OLSKAppToolbarFundLimit, item.OLSKAppToolbarFundLimitText);
		});

	});

	describe('OLSKAppToolbarFundProgress', function test_OLSKAppToolbarFundProgress () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarFundShowProgress: true,
			});
		});

		it('sets innerText', function () {
			browser.assert.text(OLSKAppToolbarFundProgress, '…');
		});

	});

	describe('OLSKAppToolbarStorageStatus', function test_OLSKAppToolbarStorageStatus () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarStorageStatus: 'alfa',
			});
		});

		it('binds OLSKAppToolbarStorageStatus', function () {
			browser.assert.text(OLSKAppToolbarStorageStatus, 'alfa');
		});

	});

	describe('OLSKAppToolbarStorageButton', function test_OLSKAppToolbarStorageButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarStorageButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarStorageButton, 'OLSKDecorTappable');
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

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKDecorTappable');
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
