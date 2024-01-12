<template>
	<main>
		<span>{{ vueVersion }}</span>

		<ComponentA text="component a props" />
		<ComponentB text="component b props" />
	</main>
</template>

<script setup>
import { isVue2, isVue3, ref } from 'vue-demi';

console.table('Vue Env', { Vue3: isVue3, Vue2: isVue2 });
const vueVersion = ref(isVue2 ? 'Vue2' : 'Vue3');
</script>
