const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKAppToolbar_Misc', function () {

	const item = {
		OLSKAppToolbarGuideURL: Math.random().toString(),
		OLSKAppToolbarFundLimitText: Math.random().toString(),
		OLSKAppToolbarClubLimitText: Math.random().toString(),
		OLSKAppToolbarErrorText: Math.random().toString(),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKAppToolbar', function test_OLSKAppToolbar () {

		it('classes OLSKToolbar', function () {
			return browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			return browser.assert.hasClass(OLSKAppToolbar, 'OLSKToolbarJustify');
		});

		it('classes OLSKCommonEdgeTop', function () {
			return browser.assert.hasClass(OLSKAppToolbar, 'OLSKCommonEdgeTop');
		});

	});

	describe('OLSKAppToolbarAproposButton', function test_OLSKAppToolbarAproposButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKAppToolbarAproposButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchApropos', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarAproposButton);
			});
	
			it('sends OLSKAppToolbarDispatchApropos', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchApropos', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarAproposButtonImage', function test_OLSKAppToolbarAproposButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKAppToolbarAproposButtonImage } #_OLSKSharedApropos`, 1);
		});

	});

	describe('OLSKAppToolbarLanguageButton', function test_OLSKAppToolbarLanguageButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKAppToolbarLanguageButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchTongue', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarLanguageButton);
			});
	
			it('sends OLSKAppToolbarDispatchTongue', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchTongue', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarLanguageButtonImage', function test_OLSKAppToolbarLanguageButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKAppToolbarLanguageButtonImage } #_OLSKSharedLanguage`, 1);
		});

	});

	describe('OLSKAppToolbarGuideLink', function test_OLSKAppToolbarGuideLink () {

		it('sets href', function () {
			return browser.assert.attribute(OLSKAppToolbarGuideLink, 'href', item.OLSKAppToolbarGuideURL);
		});

		it('sets target', function () {
			return browser.assert.attribute(OLSKAppToolbarGuideLink, 'target', '_blank');
		});

	});

	describe('OLSKAppToolbarFundButton', function test_OLSKAppToolbarFundButton () {

		it('classes OLSKDecorPress', function () {
			return browser.assert.hasClass(OLSKAppToolbarFundButton, 'OLSKDecorPress');
		});

		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchFund', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarFundButton);
			});
		
			it('sends OLSKAppToolbarDispatchFund', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchFund', '1');
			});
		
		});

	});

	describe('OLSKAppToolbarFundLimit', function test_OLSKAppToolbarFundLimit () {

		it('binds OLSKAppToolbarFundLimitText', function () {
			return browser.assert.text(OLSKAppToolbarFundLimit, item.OLSKAppToolbarFundLimitText);
		});

	});

	describe('OLSKAppToolbarClubButton', function test_OLSKAppToolbarClubButton () {

		it('classes OLSKDecorPress', function () {
			return browser.assert.hasClass(OLSKAppToolbarClubButton, 'OLSKDecorPress');
		});

		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchClub', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarClubButton);
			});
		
			it('sends OLSKAppToolbarDispatchClub', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchClub', '1');
			});
		
		});

	});

	describe('OLSKAppToolbarClubLimit', function test_OLSKAppToolbarClubLimit () {

		it('binds OLSKAppToolbarClubLimitText', function () {
			return browser.assert.text(OLSKAppToolbarClubLimit, item.OLSKAppToolbarClubLimitText);
		});

	});

	describe('OLSKAppToolbarError', function test_OLSKAppToolbarError () {

		it('binds OLSKAppToolbarErrorText', function () {
			return browser.assert.text(OLSKAppToolbarError, item.OLSKAppToolbarErrorText);
		});

		it('classes OLSKDecorBlink', function () {
			return browser.assert.hasClass(OLSKAppToolbarError, 'OLSKDecorBlink');
		});

	});

	describe('OLSKAppToolbarCloudButton', function test_OLSKAppToolbarCloudButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKAppToolbarCloudButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKAppToolbarCloudButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKAppToolbarCloudButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchCloud', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarCloudButton);
			});
	
			it('sends OLSKAppToolbarDispatchCloud', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchCloud', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarCloudButtonImage', function test_OLSKAppToolbarCloudButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKAppToolbarCloudButtonImage } #_OLSKSharedCloud`, 1);
		});

		context('offline', function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarCloudOffline: true,
				});
			});

			it('sets src', function () {
				return browser.assert.elements(`${ OLSKAppToolbarCloudButtonImage } #_OLSKSharedCloudOffline`, 1);
			});
		
		});

		context('error', function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarCloudConnected: true,
					OLSKAppToolbarCloudOffline: true,
					OLSKAppToolbarCloudError: true,
				});
			});

			it('sets src', function () {
				return browser.assert.elements(`${ OLSKAppToolbarCloudButtonImage } #_OLSKSharedCloudError`, 1);
			});
		
		});

	});

	describe('OLSKAppToolbarLauncherButton', function test_OLSKAppToolbarLauncherButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKAppToolbarLauncherButton, 'OLSKToolbarButton');
		});
	
		context('click', function () {

			before(function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '0');
			});

			before(function () {
				browser.click(OLSKAppToolbarLauncherButton);
			});
	
			it('sends OLSKAppToolbarDispatchLauncher', function () {
				return browser.assert.text('#TestOLSKAppToolbarDispatchLauncher', '1');
			});
	
		});

	});

	describe('OLSKAppToolbarLauncherButtonImage', function test_OLSKAppToolbarLauncherButtonImage () {
	
		it('sets src', function () {
			return browser.assert.elements(`${ OLSKAppToolbarLauncherButtonImage } #_OLSKSharedLauncher`, 1);
		});

	});

});
