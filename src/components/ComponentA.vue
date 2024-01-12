<template>
	<div :class="$style.a">
		ComponentA {{ label }}
	</div>
</template>

<script setup>
// note: 須安裝 unplugin-vue-define-options 讓 vue2.7 支援 defineOptions
defineOptions({
	name: 'ComponentA',
})
defineProps({
	text: {
		type: String,
		default: '',
	},
})
</script>

<style module>
.a {
	color: yellow;
	font-size: 40px;
	background: red;
	border-radius: 8px;
	padding: 10px;
	margin: 10px
}
</style>
