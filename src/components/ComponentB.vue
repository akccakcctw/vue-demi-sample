<template>
	<div :class="$style.b">
		ComponentB {{ label }}
	</div>
</template>

<script setup>
defineOptions({
	name: 'ComponentB',
});
defineProps({
	text: {
		type: String,
		default: '',
	},
});
</script>

<style module>
.b {
	color: yellow;
	font-size: 40px;
	background: blue;
	border-radius: 8px;
	padding: 10px;
	margin: 10px;
}
</style>
