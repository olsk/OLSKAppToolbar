const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKAppToolbar_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OLSKAppToolbarGuideURL: Math.random().toString(),
			});
		});
	
		it('localizes OLSKAppToolbarLanguageButton', function() {
			browser.assert.attribute(OLSKAppToolbarLanguageButton, 'title', uLocalized('OLSKAppToolbarLanguageButtonText'));
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
