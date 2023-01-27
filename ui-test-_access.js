const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKAppToolbar: '.OLSKAppToolbar',

	OLSKAppToolbarAproposButton: '.OLSKAppToolbarAproposButton',
	OLSKAppToolbarAproposButtonImage: '.OLSKAppToolbarAproposButtonImage',

	OLSKAppToolbarLanguageButton: '.OLSKAppToolbarLanguageButton',
	OLSKAppToolbarLanguageButtonImage: '.OLSKAppToolbarLanguageButtonImage',
	
	OLSKAppToolbarGuideLink: '.OLSKAppToolbarGuideLink',
	
	OLSKAppToolbarFundButton: '.OLSKAppToolbarFundButton',
	OLSKAppToolbarFundProgress: '.OLSKAppToolbarFundProgress',
	OLSKAppToolbarFundLimit: '.OLSKAppToolbarFundLimit',
	
	OLSKAppToolbarClubButton: '.OLSKAppToolbarClubButton',
	OLSKAppToolbarClubLimit: '.OLSKAppToolbarClubLimit',
	
	OLSKAppToolbarCloudStatus: '.OLSKAppToolbarCloudStatus',
	OLSKAppToolbarCloudButton: '.OLSKAppToolbarCloudButton',
	OLSKAppToolbarCloudButtonImage: '.OLSKAppToolbarCloudButtonImage',

	OLSKAppToolbarLauncherButton: '.OLSKAppToolbarLauncherButton',
	OLSKAppToolbarLauncherButtonImage: '.OLSKAppToolbarLauncherButtonImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKAppToolbar_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKAppToolbarDispatchApropos: null,
			OLSKAppToolbarDispatchTongue: null,
			OLSKAppToolbarDispatchFund: null,
			OLSKAppToolbarDispatchClub: null,
			OLSKAppToolbarDispatchCloud: null,
			OLSKAppToolbarDispatchLauncher: null,
		});
	});

	it('shows OLSKAppToolbar', function () {
		browser.assert.elements(OLSKAppToolbar, 1);
	});

	it('shows OLSKReloadButton', function () {
		browser.assert.elements('.OLSKReloadButton', 1);
	});

	it('hides OLSKAppToolbarAproposButton', function () {
		browser.assert.elements(OLSKAppToolbarAproposButton, 0);
	});

	it('hides OLSKAppToolbarLanguageButton', function () {
		browser.assert.elements(OLSKAppToolbarLanguageButton, 0);
	});

	it('hides OLSKAppToolbarGuideLink', function () {
		browser.assert.elements(OLSKAppToolbarGuideLink, 0);
	});

	it('hides OLSKAppToolbarFundButton', function () {
		browser.assert.elements(OLSKAppToolbarFundButton, 0);
	});

	it('hides OLSKAppToolbarFundProgress', function () {
		browser.assert.elements(OLSKAppToolbarFundProgress, 0);
	});

	it('hides OLSKAppToolbarFundLimit', function () {
		browser.assert.elements(OLSKAppToolbarFundLimit, 0);
	});

	it('hides OLSKAppToolbarClubButton', function () {
		browser.assert.elements(OLSKAppToolbarClubButton, 0);
	});

	it('hides OLSKAppToolbarClubLimit', function () {
		browser.assert.elements(OLSKAppToolbarClubLimit, 0);
	});

	it('hides OLSKAppToolbarCloudStatus', function () {
		browser.assert.elements(OLSKAppToolbarCloudStatus, 0);
	});

	it('hides OLSKAppToolbarCloudButton', function () {
		browser.assert.elements(OLSKAppToolbarCloudButton, 0);
	});

	it('hides OLSKAppToolbarLauncherButton', function () {
		browser.assert.elements(OLSKAppToolbarLauncherButton, 0);
	});

	context('OLSKAppToolbarAproposButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('hides OLSKReloadButton', function () {
			browser.assert.elements('.OLSKReloadButton', 0);
		});

		it('shows OLSKAppToolbarAproposButton', function () {
			browser.assert.elements(OLSKAppToolbarAproposButton, 1);
		});

		it('shows OLSKAppToolbarAproposButtonImage', function () {
			browser.assert.elements(OLSKAppToolbarAproposButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarLanguageButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarLanguageButton', function () {
			browser.assert.elements(OLSKAppToolbarLanguageButton, 1);
		});

		it('shows OLSKAppToolbarLanguageButtonImage', function () {
			browser.assert.elements(OLSKAppToolbarLanguageButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarGuideLink', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarGuideURL: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarGuideLink', function () {
			browser.assert.elements(OLSKAppToolbarGuideLink, 1);
		});
	
	});

	context('OLSKAppToolbarFundButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarFundButton', function () {
			browser.assert.elements(OLSKAppToolbarFundButton, 1);
		});

		it('hides OLSKAppToolbarFundLimit', function () {
			browser.assert.elements(OLSKAppToolbarFundLimit, 0);
		});

		it('hides OLSKAppToolbarFundProgress', function () {
			browser.assert.elements(OLSKAppToolbarFundProgress, 0);
		});

		context('OLSKAppToolbarFundShowProgress', function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarFundLimitText: Math.random().toString(),
					OLSKAppToolbarFundShowProgress: true,
				});
			});

			it('hides OLSKAppToolbarFundButton', function () {
				browser.assert.elements(OLSKAppToolbarFundButton, 0);
			});

			it('hides OLSKAppToolbarFundLimit', function () {
				browser.assert.elements(OLSKAppToolbarFundLimit, 0);
			});

			it('shows OLSKAppToolbarFundProgress', function () {
				browser.assert.elements(OLSKAppToolbarFundProgress, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarFundLimitText', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarFundLimitText: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarFundLimit', function () {
			browser.assert.elements(OLSKAppToolbarFundLimit, 1);
		});

		context('falsy', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarFundLimitText: 0,
				});
			});

			it('shows OLSKAppToolbarFundLimit', function () {
				browser.assert.elements(OLSKAppToolbarFundLimit, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarClubButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarClubButton', function () {
			browser.assert.elements(OLSKAppToolbarClubButton, 1);
		});

		it('hides OLSKAppToolbarClubLimit', function () {
			browser.assert.elements(OLSKAppToolbarClubLimit, 0);
		});
	
	});

	context('OLSKAppToolbarClubLimitText', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarClubLimitText: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarClubLimit', function () {
			browser.assert.elements(OLSKAppToolbarClubLimit, 1);
		});

		context('falsy', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarClubLimitText: 0,
				});
			});

			it('shows OLSKAppToolbarClubLimit', function () {
				browser.assert.elements(OLSKAppToolbarClubLimit, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarDispatchCloud', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarCloudStatus', function () {
			browser.assert.elements(OLSKAppToolbarCloudStatus, 1);
		});

		it('shows OLSKAppToolbarCloudButton', function () {
			browser.assert.elements(OLSKAppToolbarCloudButton, 1);
		});

		it('shows OLSKAppToolbarCloudButtonImage', function () {
			browser.assert.elements(OLSKAppToolbarCloudButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarDispatchLauncher', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarLauncherButton', function () {
			browser.assert.elements(OLSKAppToolbarLauncherButton, 1);
		});

		it('shows OLSKAppToolbarLauncherButtonImage', function () {
			browser.assert.elements(OLSKAppToolbarLauncherButtonImage, 1);
		});
	
	});

});
