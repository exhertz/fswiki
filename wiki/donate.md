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

## Онлайн-банки
<n-space>
<n-button
    tag="a"
    href="https://yoomoney.ru/to/4100110338121082"
    target="_blank"
	class="clear_btn"
> 
<template #icon>
		<n-icon size="20"><svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9677 0C15.9275 0 10.2701 5.69531 10.2701 12.6563C10.2701 19.6746 15.9832 25.3125 22.966 25.3125C29.9489 25.3125 35.667 19.6172 35.667 12.6563C35.667 5.69531 29.9506 0 22.9677 0ZM22.9677 17.3737C20.3707 17.3737 18.236 15.2449 18.236 12.6563C18.236 10.0676 20.3707 7.93884 22.9677 7.93884C25.5648 7.93884 27.7003 10.0676 27.7003 12.6563C27.6421 15.2449 25.5648 17.3737 22.9677 17.3737Z" fill="#8B3FFD"/>
<path d="M10.2701 3.67676V22.0857H5.77125L0 3.67676H10.2701Z" fill="#8B3FFD"/>
</svg></n-icon>
	  </template>
	  Перевод на Yoomoney (МИР, MasterCard, Visa, Maestro, кошелёк)
</n-button>
<n-button
    @click="showTBANK()"
> 
<template #icon>
		<n-icon size="20"><svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.103516H32V15.0937C32 19.2194 29.7991 23.032 26.2263 25.095L16.0001 31.0001L5.77375 25.095C2.2009 23.032 3.66761e-06 19.2194 3.66761e-06 15.0937L0 0.103516Z" fill="#FFDD2D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.82758 7.82812V12.8021C9.50774 12.034 10.7444 11.5143 12.1584 11.5143H13.695V17.2965C13.695 18.8348 13.277 20.3411 12.6569 21.0818H19.3408C18.722 20.3403 18.305 18.8359 18.305 17.2995V11.5143H19.8416C21.2556 11.5143 22.4922 12.034 23.1724 12.8021V7.82812H8.82758Z" fill="#333333"/>
</svg></n-icon>
	  </template>
	  Перевод на Т-Банк (картой МИР любого банка)
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
	['USDT(TRC20)', {addr: 'TDHmNpwdTNJHcLgVc8DnGLCMpj9kRTgunG', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26a17b"/><path fill="#fff" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"/></g></svg>'}],
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
			{ value: addr, style:"box-sizing:initial;margin-bottom:10px;", size:200}
		  ), h('br'), addr],
	  })
  }

  const showTBANK = () => {
  const m = modal.create({
    title: `Поддержать fswiki.ru - Т-Банк`,
    preset: 'card',
    style: {
      width: 'auto',
    },
    content: () =>
      [
        h(NQrCode, {
          value: "https://www.tinkoff.ru/rm/r_UEEpipbOzX.bHLQdjiamD/LzRIp44450",
          style: "box-sizing:initial;margin-bottom:10px;",
          size: 200,
        }),
        h('br'),
        h('a', {
          href: "https://www.tinkoff.ru/rm/r_UEEpipbOzX.bHLQdjiamD/LzRIp44450",
          target: "_blank",
        }, "https://www.tinkoff.ru/rm/r_UEEpipbOzX.bHLQdjiamD/LzRIp44450"),
      ],
  });
};


</script>

<style scoped>
  table {
	display: table;
  }
.vp-doc th, .vp-doc td {
  border: 0;
}
.clear_btn {
	text-decoration: none;
	color: var(--n-text-color);
	font-weight: var(--n-font-weight)
}

</style>