<template>
	<div>
		<item-container father-component="item"></item-container>
	</div>
</template>

<script>
	import itemContainer from '@/components/item'

	export default {
		name: 'item',
		components: {
			itemContainer
		},
		created() {
			document.body.style.background ='#2CA4BF';
		}
	}
</script>

<style>
	
</style>