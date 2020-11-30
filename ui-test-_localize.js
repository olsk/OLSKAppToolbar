const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, languageCode);
	};

	describe(`OLSKAppToolbar_Localize-${ languageCode }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
				OLSKAppToolbarGuideURL: 'alfa',
			});
		});

		it('localizes OLSKAppToolbarGuideLink', function() {
			browser.assert.text(OLSKAppToolbarGuideLink, uLocalized('OLSKAppToolbarGuideLinkText'));
		});
	
		it('localizes OLSKAppToolbarFundButton', function() {
			browser.assert.text(OLSKAppToolbarFundButton, uLocalized('OLSKAppToolbarFundButtonText'));
		});
	
		it('localizes OLSKAppToolbarStorageButton', function() {
			browser.assert.attribute(OLSKAppToolbarStorageButton, 'title', uLocalized('OLSKAppToolbarStorageButtonText'));
		});
	
		it('localizes OLSKAppToolbarLauncherButton', function() {
			browser.assert.attribute(OLSKAppToolbarLauncherButton, 'title', uLocalized('OLSKAppToolbarLauncherButtonText'));
		});

	});

});
