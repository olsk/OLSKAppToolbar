<script>
export let OLSKAppToolbarGuideURL = '';
export let OLSKAppToolbarDonateURL = '';
export let OLSKAppToolbarStorageStatus = '';
export let OLSKAppToolbarLauncherVisible = false;
export let OLSKAppToolbarDispatchLauncher = null;
export let OLSKAppToolbarDispatchStorage;
export let _OLSKAppToolbarDispatchExport;
export let _OLSKAppToolbarDispatchImport;

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

const mod = {

	// INTERFACE

	InterfaceExportButtonDidClick () {
		_OLSKAppToolbarDispatchExport();
	},

	InterfaceImportButtonDidClick (event) {
		const inputElement = event.target;
		const fileReader = new FileReader();
		
		fileReader.onload = function (event) {
			_OLSKAppToolbarDispatchImport(event.target.result);
			
			inputElement.value = null;
		};

		fileReader.readAsText(event.target.files.item(0));
	},

};

import OLSKReloadButton from 'OLSKReloadButton';
import OLSKLanguageSwitcher from 'OLSKLanguageSwitcher';
import _OLSKSharedCloud from '../OLSKUIAssets/_OLSKSharedCloud.svg';
import _OLSKSharedLauncher from '../OLSKUIAssets/_OLSKSharedLauncher.svg';
</script>

<div class="OLSKAppToolbar OLSKToolbar OLSKToolbarJustify">

<div class="OLSKToolbarElementGroup">
	<OLSKReloadButton />
	
	<OLSKLanguageSwitcher OLSKSharedActiveRouteConstant={ window.OLSKPublicConstants('OLSKSharedActiveRouteConstant') }
		OLSKSharedPageLanguagesAvailable={ window.OLSKPublicConstants('OLSKSharedPageLanguagesAvailable') }
		OLSKSharedPageCurrentLanguage={ window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage') }
		/>

	{#if OLSKAppToolbarGuideURL}
		<a class="OLSKAppToolbarGuideLink" href={ OLSKAppToolbarGuideURL } target="_blank">{ OLSKLocalized('OLSKAppToolbarGuideLinkText') }</a>
	{/if}

	{#if OLSKAppToolbarDonateURL}
		<a class="OLSKAppToolbarDonateLink" href={ OLSKAppToolbarDonateURL } target="_blank">{ OLSKLocalized('OLSKAppToolbarDonateLinkText') }</a>
	{/if}

	<!-- <button on:click={ mod.InterfaceExportButtonDidClick }>Export</button>

	<input type="file" accept=".json" on:change={ mod.InterfaceImportButtonDidClick } /> -->
</div>

<div class="OLSKToolbarElementGroup">
	<div class="OLSKAppToolbarStorageStatus">{ OLSKAppToolbarStorageStatus }</div>

	<button class="OLSKAppToolbarStorageButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarStorageButtonText') } on:click={ OLSKAppToolbarDispatchStorage } class:OSWIconVisible={ false }>
		<div class="OLSKAppToolbarStorageButtonImage">{@html _OLSKSharedCloud }</div>
	</button>

	{#if OLSKAppToolbarLauncherVisible}
		<button class="OLSKAppToolbarLauncherButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLauncherButtonText') } on:click={ OLSKAppToolbarDispatchLauncher } class:OSWIconVisible={ false }>
			<div class="OLSKAppToolbarLauncherButtonImage">{@html _OLSKSharedLauncher }</div>
		</button>
	{/if}
</div>
	
</div>

<style src="./ui-style.css"></style>
