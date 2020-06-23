const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, languageCode);
	};

	describe(`OLSKAppToolbar_Localize-${ languageCode }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
				OLSKAppToolbarGuideURL: 'alfa',
				OLSKAppToolbarDonateURL: 'bravo',
			});
		});

		it('localizes OLSKAppToolbarGuideLink', function() {
			browser.assert.text(OLSKAppToolbarGuideLink, uLocalized('OLSKAppToolbarGuideLinkText'));
		});
	
		it('localizes OLSKAppToolbarDonateLink', function() {
			browser.assert.text(OLSKAppToolbarDonateLink, uLocalized('OLSKAppToolbarDonateLinkText'));
		});
	
		it('localizes OLSKAppToolbarStorageButton', function() {
			browser.assert.attribute(OLSKAppToolbarStorageButton, 'title', uLocalized('OLSKAppToolbarStorageButtonText'));
		});
	
		it('localizes OLSKAppToolbarLauncherButton', function() {
			browser.assert.attribute(OLSKAppToolbarLauncherButton, 'title', uLocalized('OLSKAppToolbarLauncherButtonText'));
		});

	});

});
