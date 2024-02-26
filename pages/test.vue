<script setup lang="ts">
import { createStore } from "mipd";

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
  </div>
</template>

<style scoped></style>
