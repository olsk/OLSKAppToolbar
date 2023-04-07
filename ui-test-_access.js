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
	
	OLSKAppToolbarError: '.OLSKAppToolbarError',

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
		return browser.assert.elements(OLSKAppToolbar, 1);
	});

	it('shows OLSKReloadButton', function () {
		return browser.assert.elements('.OLSKReloadButton', 1);
	});

	it('hides OLSKAppToolbarAproposButton', function () {
		return browser.assert.elements(OLSKAppToolbarAproposButton, 0);
	});

	it('hides OLSKAppToolbarLanguageButton', function () {
		return browser.assert.elements(OLSKAppToolbarLanguageButton, 0);
	});

	it('hides OLSKAppToolbarGuideLink', function () {
		return browser.assert.elements(OLSKAppToolbarGuideLink, 0);
	});

	it('hides OLSKAppToolbarFundButton', function () {
		return browser.assert.elements(OLSKAppToolbarFundButton, 0);
	});

	it('hides OLSKAppToolbarFundProgress', function () {
		return browser.assert.elements(OLSKAppToolbarFundProgress, 0);
	});

	it('hides OLSKAppToolbarFundLimit', function () {
		return browser.assert.elements(OLSKAppToolbarFundLimit, 0);
	});

	it('hides OLSKAppToolbarClubButton', function () {
		return browser.assert.elements(OLSKAppToolbarClubButton, 0);
	});

	it('hides OLSKAppToolbarClubLimit', function () {
		return browser.assert.elements(OLSKAppToolbarClubLimit, 0);
	});

	it('hides OLSKAppToolbarError', function () {
		return browser.assert.elements(OLSKAppToolbarError, 0);
	});

	it('hides OLSKAppToolbarCloudStatus', function () {
		return browser.assert.elements(OLSKAppToolbarCloudStatus, 0);
	});

	it('hides OLSKAppToolbarCloudButton', function () {
		return browser.assert.elements(OLSKAppToolbarCloudButton, 0);
	});

	it('hides OLSKAppToolbarLauncherButton', function () {
		return browser.assert.elements(OLSKAppToolbarLauncherButton, 0);
	});

	context('OLSKAppToolbarAproposButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('hides OLSKReloadButton', function () {
			return browser.assert.elements('.OLSKReloadButton', 0);
		});

		it('shows OLSKAppToolbarAproposButton', function () {
			return browser.assert.elements(OLSKAppToolbarAproposButton, 1);
		});

		it('shows OLSKAppToolbarAproposButtonImage', function () {
			return browser.assert.elements(OLSKAppToolbarAproposButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarLanguageButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarLanguageButton', function () {
			return browser.assert.elements(OLSKAppToolbarLanguageButton, 1);
		});

		it('shows OLSKAppToolbarLanguageButtonImage', function () {
			return browser.assert.elements(OLSKAppToolbarLanguageButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarGuideLink', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarGuideURL: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarGuideLink', function () {
			return browser.assert.elements(OLSKAppToolbarGuideLink, 1);
		});
	
	});

	context('OLSKAppToolbarFundButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarFundButton', function () {
			return browser.assert.elements(OLSKAppToolbarFundButton, 1);
		});

		it('hides OLSKAppToolbarFundLimit', function () {
			return browser.assert.elements(OLSKAppToolbarFundLimit, 0);
		});

		it('hides OLSKAppToolbarFundProgress', function () {
			return browser.assert.elements(OLSKAppToolbarFundProgress, 0);
		});

		context('OLSKAppToolbarFundShowProgress', function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarFundLimitText: Math.random().toString(),
					OLSKAppToolbarFundShowProgress: true,
				});
			});

			it('hides OLSKAppToolbarFundButton', function () {
				return browser.assert.elements(OLSKAppToolbarFundButton, 0);
			});

			it('hides OLSKAppToolbarFundLimit', function () {
				return browser.assert.elements(OLSKAppToolbarFundLimit, 0);
			});

			it('shows OLSKAppToolbarFundProgress', function () {
				return browser.assert.elements(OLSKAppToolbarFundProgress, 1);
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
			return browser.assert.elements(OLSKAppToolbarFundLimit, 1);
		});

		context('falsy', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarFundLimitText: 0,
				});
			});

			it('shows OLSKAppToolbarFundLimit', function () {
				return browser.assert.elements(OLSKAppToolbarFundLimit, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarClubButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarClubButton', function () {
			return browser.assert.elements(OLSKAppToolbarClubButton, 1);
		});

		it('hides OLSKAppToolbarClubLimit', function () {
			return browser.assert.elements(OLSKAppToolbarClubLimit, 0);
		});
	
	});

	context('OLSKAppToolbarClubLimitText', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarClubLimitText: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarClubLimit', function () {
			return browser.assert.elements(OLSKAppToolbarClubLimit, 1);
		});

		context('falsy', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarClubLimitText: 0,
				});
			});

			it('shows OLSKAppToolbarClubLimit', function () {
				return browser.assert.elements(OLSKAppToolbarClubLimit, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarErrorText', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarErrorText: Math.random().toString(),
			});
		});

		it('shows OLSKAppToolbarError', function () {
			return browser.assert.elements(OLSKAppToolbarError, 1);
		});

		context('falsy', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarErrorText: 0,
				});
			});

			it('shows OLSKAppToolbarError', function () {
				return browser.assert.elements(OLSKAppToolbarError, 1);
			});
		
		});
	
	});

	context('OLSKAppToolbarDispatchCloud', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarCloudStatus', function () {
			return browser.assert.elements(OLSKAppToolbarCloudStatus, 1);
		});

		it('shows OLSKAppToolbarCloudButton', function () {
			return browser.assert.elements(OLSKAppToolbarCloudButton, 1);
		});

		it('shows OLSKAppToolbarCloudButtonImage', function () {
			return browser.assert.elements(OLSKAppToolbarCloudButtonImage, 1);
		});
	
	});

	context('OLSKAppToolbarDispatchLauncher', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('shows OLSKAppToolbarLauncherButton', function () {
			return browser.assert.elements(OLSKAppToolbarLauncherButton, 1);
		});

		it('shows OLSKAppToolbarLauncherButtonImage', function () {
			return browser.assert.elements(OLSKAppToolbarLauncherButtonImage, 1);
		});
	
	});

});
