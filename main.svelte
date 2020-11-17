<script>
export let OLSKAppToolbarGuideURL = '';
export let OLSKAppToolbarStorageStatus = '';
export let OLSKAppToolbarFundShowProgress = false;
export let OLSKAppToolbarFundLimitText = '';
export let OLSKAppToolbarDispatchLauncher = null;
export let OLSKAppToolbarDispatchStorage;
export let OLSKAppToolbarDispatchFund = null;

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

const mod = {

	// INTERFACE

	InterfaceWindowDidKeydown (event) {
		const handlerFunctions = {
			Space () {
				if (!event.altKey) {
					return
				}

				OLSKAppToolbarDispatchLauncher()

				return event.preventDefault();
			},
		};

		handlerFunctions[event.code] && handlerFunctions[event.code]();
	},

};

import OLSKReloadButton from 'OLSKReloadButton';
import OLSKLanguageSwitcher from 'OLSKLanguageSwitcher';
import _OLSKSharedCloud from '../OLSKUIAssets/_OLSKSharedCloud.svg';
import _OLSKSharedLauncher from '../OLSKUIAssets/_OLSKSharedLauncher.svg';
</script>
<svelte:window on:keydown={ mod.InterfaceWindowDidKeydown } />

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

	{#if OLSKAppToolbarDispatchFund && !OLSKAppToolbarFundShowProgress }
		<button class="OLSKAppToolbarFundButton OLSKCommonButton" on:click={ OLSKAppToolbarDispatchFund }>{ OLSKLocalized('OLSKAppToolbarFundButtonText') }</button>

		{#if OLSKAppToolbarFundLimitText }
			<!-- #hotfix svelte rendering issue resolves with button  -->
			<button class="OLSKAppToolbarFundLimit OLSKLayoutButtonNoStyle" disabled>{ OLSKAppToolbarFundLimitText.toString() }</button>
		{/if}
	{/if}

	{#if OLSKAppToolbarFundShowProgress }
		<div class="OLSKAppToolbarFundProgress">…</div>
	{/if}
</div>

<div class="OLSKToolbarElementGroup">
	<div class="OLSKAppToolbarStorageStatus">{ OLSKAppToolbarStorageStatus }</div>

	<button class="OLSKAppToolbarStorageButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarStorageButtonText') } on:click={ OLSKAppToolbarDispatchStorage } class:OSWIconVisible={ false }>
		<div class="OLSKAppToolbarStorageButtonImage">{@html _OLSKSharedCloud }</div>
	</button>

	{#if OLSKAppToolbarDispatchLauncher }
		<button class="OLSKAppToolbarLauncherButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLauncherButtonText') } on:click={ OLSKAppToolbarDispatchLauncher } class:OSWIconVisible={ false }>
			<div class="OLSKAppToolbarLauncherButtonImage">{@html _OLSKSharedLauncher }</div>
		</button>
	{/if}
</div>
	
</div>

<style src="./ui-style.css"></style>
