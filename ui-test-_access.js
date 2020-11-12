const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKAppToolbar: '.OLSKAppToolbar',
	
	OLSKAppToolbarGuideLink: '.OLSKAppToolbarGuideLink',
	
	OLSKAppToolbarFundButton: '.OLSKAppToolbarFundButton',
	OLSKAppToolbarFundProgress: '.OLSKAppToolbarFundProgress',
	
	OLSKAppToolbarStorageStatus: '.OLSKAppToolbarStorageStatus',
	OLSKAppToolbarStorageButton: '.OLSKAppToolbarStorageButton',
	OLSKAppToolbarStorageButtonImage: '.OLSKAppToolbarStorageButtonImage',

	OLSKAppToolbarLauncherButton: '.OLSKAppToolbarLauncherButton',
	OLSKAppToolbarLauncherButtonImage: '.OLSKAppToolbarLauncherButtonImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKAppToolbar_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKAppToolbarDispatchFund: null,
			OLSKAppToolbarDispatchLauncher: null,
		});
	});

	it('shows OLSKAppToolbar', function () {
		browser.assert.elements(OLSKAppToolbar, 1);
	});

	it('shows OLSKReloadButton', function () {
		browser.assert.elements('.OLSKReloadButton', 1);
	});

	it('shows OLSKLanguageSwitcher', function () {
		browser.assert.elements('.OLSKLanguageSwitcher', 1);
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

	it('shows OLSKAppToolbarStorageStatus', function () {
		browser.assert.elements(OLSKAppToolbarStorageStatus, 1);
	});

	it('shows OLSKAppToolbarStorageButton', function () {
		browser.assert.elements(OLSKAppToolbarStorageButton, 1);
	});

	it('shows OLSKAppToolbarStorageButtonImage', function () {
		browser.assert.elements(OLSKAppToolbarStorageButtonImage, 1);
	});

	it('hides OLSKAppToolbarLauncherButton', function () {
		browser.assert.elements(OLSKAppToolbarLauncherButton, 0);
	});

	context('OLSKAppToolbarGuideLink', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarGuideURL: 'alfa',
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

		it('hides OLSKAppToolbarFundProgress', function () {
			browser.assert.elements(OLSKAppToolbarFundProgress, 0);
		});
	
	});

	context('OLSKAppToolbarFundButton', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarFundShowProgress: true,
			});
		});

		it('hides OLSKAppToolbarFundButton', function () {
			browser.assert.elements(OLSKAppToolbarFundButton, 0);
		});

		it('shows OLSKAppToolbarFundProgress', function () {
			browser.assert.elements(OLSKAppToolbarFundProgress, 1);
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
