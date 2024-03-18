<script setup lang="ts">
import { createStore } from "mipd";
import { UAParser } from "ua-parser-js";

declare global {
  interface Window {
    ethereum: any;
  }
}

async function getWalletAccounts(rdns: string) {
  console.log({ rdns });
  const store = createStore();
  const walletProvider = store.findProvider({ rdns })?.provider;
  console.log({ walletProvider });
  let accounts;
  try {
    accounts = await walletProvider!.request({
      method: "eth_requestAccounts",
    });
  } catch (e) {
    console.error("Error", { e });
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  }
  console.log({ accounts });
  alert(JSON.stringify(accounts));
}

const providers = ref();
const browserInfo = ref();
onMounted(() => {
  const store = createStore();
  providers.value = store.getProviders();

  let parser = new UAParser(navigator.userAgent);
  browserInfo.value = parser.getResult();
});
</script>

<template>
  <div>
    <h1>EIP-6963 Test</h1>
    <div class="flex flex-col space-y-10">
      <button @click="getWalletAccounts('io.metamask')">Metamask</button>
      <button @click="getWalletAccounts('com.coinbase.wallet')">
        Coinbase
      </button>
      <button @click="getWalletAccounts('com.okex.wallet')">OKX</button>
    </div>

    <ClientOnly>
      <h1 class="font-bold text-lg">Installed Providers</h1>
      <div v-for="provider in providers" :key="provider.info.uuid">
        <pre>{{ provider.info }}</pre>
      </div>

      <h1 class="font-bold text-lg">Browser Info</h1>
      <pre>{{ browserInfo }}</pre>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
