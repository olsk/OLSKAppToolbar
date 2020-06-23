const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKAppToolbar: '.OLSKAppToolbar',
	
	OLSKAppToolbarGuideLink: '.OLSKAppToolbarGuideLink',
	
	OLSKAppToolbarDonateLink: '.OLSKAppToolbarDonateLink',
	
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

	it('hides OLSKAppToolbarDonateLink', function () {
		browser.assert.elements(OLSKAppToolbarDonateLink, 0);
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

	context('OLSKAppToolbarDonateLink', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppToolbarDonateURL: 'alfa',
			});
		});

		it('shows OLSKAppToolbarDonateLink', function () {
			browser.assert.elements(OLSKAppToolbarDonateLink, 1);
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
