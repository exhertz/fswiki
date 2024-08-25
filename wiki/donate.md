---
exclude: true
comments: false
lastUpdated: false
---

# Пожертвование

Спасибо за использование fswiki!  
Ваша материальная помощь приветствуется, она поможет и дальше развивать портал.
Денежные пожертвования идут на хостинг и другие нужды.  
Нажмите на удобный метот оплаты.

## Криптовалюта

<n-space>
	<n-button 
	  v-for="[name, data] in wallets" 
	  :key="name" 
	  @click="showDonateCard(name)"
	>
	  <template #icon>
		<n-icon size="20" v-html="data.icon"></n-icon>
	  </template>
	  {{ name }}
	</n-button>
</n-space>

## История пожертвований

<n-table>
  <thead>
	<tr>
	  <th style="width:10%;text-align:left;">Дата</th>
	  <th>Комментарий</th>
	  <th style="width:20%;text-align:right;">Сумма</th>
	</tr>
  </thead>
  <tbody>
	<tr v-for="row in history">
	  <td>{{row.date}}</td>
	  <td>{{row.comment}}</td>
	  <td style="text-align:right;">{{row.amount}}</td>
	</tr>
  </tbody>
</n-table>


<script setup>
  import { NTable, NFlex, NCollapse, NCollapseItem, NIcon, NButton, NSpace, useModal, NQrCode } from 'naive-ui'
  import {h} from 'vue'

  const modal = useModal()

  const history = [
	{date: '16.08.2024', comment: 'Крутой сайт с гайдами, много полезностей про культивацию. Закинул редакторам на кофе)', amount: '10.0 TON'}
  ]

  const wallets = new Map([
	['USDT(ERC20)', {addr: '0x88948D5e65bD2390bC978aB51b24471DC2B41074', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26a17b"/><path fill="#fff" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"/></g></svg>'}],
	['USDT(TON)', {addr: 'UQDvsOT-iBitai6JKva2HMfNcbMlb03GUFCu__KREM-r8Xaa', icon: '<svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#009393"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0197 17.1436C18.7713 17.1436 21.0709 16.6784 21.6329 16.0568C21.1557 15.5296 19.4297 15.1143 17.2377 15.0007V16.314C16.8453 16.3344 16.4373 16.3443 16.0193 16.3443C15.6013 16.3443 15.1933 16.3344 14.8001 16.314V15.0007C12.6089 15.1143 10.8821 15.5296 10.4049 16.0568C10.9677 16.6784 13.2677 17.1436 16.0193 17.1436H16.0197ZM20.9085 10.9624V12.7708H17.2377V14.0248C19.8161 14.1588 21.7509 14.71 21.7653 15.3696V16.7448C21.7509 17.4044 19.8161 17.9544 17.2377 18.0888V21.1663H14.8005V18.0888C12.2221 17.9548 10.2881 17.4044 10.2737 16.7448V15.3696C10.2881 14.71 12.2221 14.1588 14.8005 14.0248V12.7708H11.1297V10.9624H20.9089H20.9085ZM9.68612 8.08435H22.5725C22.8805 8.08435 23.1641 8.24635 23.3177 8.50955L27.0717 14.956C27.2661 15.2904 27.2085 15.7123 26.9309 15.9831L16.5973 26.0704C16.2621 26.3972 15.7237 26.3972 15.3893 26.0704L5.06852 15.9968C4.78492 15.7192 4.73133 15.2852 4.94053 14.9492L8.95372 8.48955C9.11012 8.23835 9.38772 8.08475 9.68652 8.08475L9.68612 8.08435Z" fill="white"/></svg>'}],
	['BTC', {addr: 'bc1qusjl9g85j6pdp09zj5fcuj82qr6ddw8067338l', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#f7931a"/><path fill="#fff" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839q-.565-.127-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235q.073.017.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84q.707.19 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538m-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11m.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733"/></g></svg>'}],
	['ETH', {addr: '0x88948D5e65bD2390bC978aB51b24471DC2B41074', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627eea"/><g fill="#fff" fill-rule="nonzero"><path fill-opacity="0.602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity="0.602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity="0.2" d="m16.498 20.573l7.497-4.353l-7.497-3.348z"/><path fill-opacity="0.602" d="m9 16.22l7.498 4.353v-7.701z"/></g></g></svg>'}],
	['LTC', {addr: 'ltc1q0t0mvmweytfnahj6jz08dj9u9cxvaf8ayjgg8p', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#315d9e" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483l1.427-.571l.68-2.75l-1.41.571L18.342 8h-5.129l-2.081 8.429l-1.444.58L9 19.768z"/></svg>'}],
	['TON', {addr: 'UQDvsOT-iBitai6JKva2HMfNcbMlb03GUFCu__KREM-r8Xaa', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0099eb" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M7.902 6.697h8.196c1.505 0 2.462 1.628 1.705 2.94l-5.059 8.765a.86.86 0 0 1-1.488 0L6.199 9.637c-.758-1.314.197-2.94 1.703-2.94m4.844 1.496v7.58l1.102-2.128l2.656-4.756a.465.465 0 0 0-.408-.696zM7.9 8.195a.464.464 0 0 0-.408.694l2.658 4.754l1.102 2.13V8.195z"/></svg>'}],
  ]);

  const showDonateCard = (t) => {
	const {addr} = wallets.get(t)
	if (!addr)
	  return;
	const m = modal.create({
		title: `Поддержать fswiki.ru - ${t}`,
		preset: 'card',
		style: {
		  width: 'auto'
		},
		content: () =>
		  [h(
			NQrCode,
			{ value: addr, style:"box-sizing:initial;margin-bottom:10px;"}
		  ), h('br'), addr],
	  })
  }


</script>

<style scoped>
  table {
	display: table;
  }
.vp-doc th, .vp-doc td {
  border: 0;
}
</style>