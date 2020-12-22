<script>
export let OLSKAppToolbarGuideURL = '';
export let OLSKAppToolbarStorageStatus = '';
export let OLSKAppToolbarFundShowProgress = false;
export let OLSKAppToolbarFundLimitText = '';
export let OLSKAppToolbarDispatchApropos = null;
export let OLSKAppToolbarDispatchTongue = null;
export let OLSKAppToolbarDispatchLauncher = null;
export let OLSKAppToolbarDispatchStorage;
export let OLSKAppToolbarDispatchFund = null;

import { OLSKLocalized } from 'OLSKInternational';

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
import _OLSKSharedApropos from '../OLSKUIAssets/_OLSKSharedApropos.svg';
import _OLSKSharedLanguage from '../OLSKUIAssets/_OLSKSharedLanguage.svg';
import _OLSKSharedCloud from '../OLSKUIAssets/_OLSKSharedCloud.svg';
import _OLSKSharedLauncher from '../OLSKUIAssets/_OLSKSharedLauncher.svg';
</script>
<svelte:window on:keydown={ mod.InterfaceWindowDidKeydown } />

<div class="OLSKAppToolbar OLSKToolbar OLSKToolbarJustify OLSKCommonEdgeTop">

<div class="OLSKToolbarElementGroup">
	{#if OLSKAppToolbarDispatchApropos }
		<button class="OLSKAppToolbarAproposButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarAproposButtonText') } on:click={ OLSKAppToolbarDispatchApropos }>
			<div class="OLSKAppToolbarAproposButtonImage">{@html _OLSKSharedApropos }</div>
		</button>
	{:else}
		<OLSKReloadButton />
	{/if}

	{#if OLSKAppToolbarDispatchTongue }
		<button class="OLSKAppToolbarLanguageButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLanguageButtonText') } on:click={ OLSKAppToolbarDispatchTongue }>
			<div class="OLSKAppToolbarLanguageButtonImage">{@html _OLSKSharedLanguage }</div>
		</button>
	{/if}

	{#if OLSKAppToolbarGuideURL}
		<a class="OLSKAppToolbarGuideLink" href={ OLSKAppToolbarGuideURL } target="_blank">{ OLSKLocalized('OLSKAppToolbarGuideLinkText') }</a>
	{/if}
</div>

<div class="OLSKToolbarElementGroup">
	<div class="OLSKAppToolbarFund">
		{#if OLSKAppToolbarDispatchFund && !OLSKAppToolbarFundShowProgress }
			<button class="OLSKAppToolbarFundButton OLSKDecorPress" on:click={ OLSKAppToolbarDispatchFund }>{ OLSKLocalized('OLSKAppToolbarFundButtonText') }</button>

			{#if OLSKAppToolbarFundLimitText !== '' }
				<!-- #hotfix svelte rendering issue resolves with button  -->
				<button class="OLSKAppToolbarFundLimit OLSKDecorButtonNoStyle" disabled>{ OLSKAppToolbarFundLimitText.toString() }</button>
			{/if}
		{/if}

		{#if OLSKAppToolbarFundShowProgress }
			<div class="OLSKAppToolbarFundProgress">…</div>
		{/if}
	</div>
</div>

<div class="OLSKToolbarElementGroup">
	<div class="OLSKAppToolbarStorageStatus">{ OLSKAppToolbarStorageStatus }</div>

	<button class="OLSKAppToolbarStorageButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarStorageButtonText') } on:click={ OLSKAppToolbarDispatchStorage } class:OSWIconVisible={ false }>
		<div class="OLSKAppToolbarStorageButtonImage">{@html _OLSKSharedCloud }</div>
	</button>

	{#if OLSKAppToolbarDispatchLauncher }
		<button class="OLSKAppToolbarLauncherButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLauncherButtonText') } on:click={ OLSKAppToolbarDispatchLauncher } class:OSWIconVisible={ false }>
			<div class="OLSKAppToolbarLauncherButtonImage">{@html _OLSKSharedLauncher }</div>
		</button>
	{/if}
</div>
	
</div>

<style src="./ui-style.css"></style>
