<template>
	<div>
		<item-container father-component='home'></item-container>
	</div>
</template>

<script>
	import itemContainer from '@/components/item'

	export default {
		name: 'home',
		components: {
			itemContainer
		},
		created() {
			// 开始计时
			this.$store.commit('REMEMBER_TIME');
		}
	}
</script>

<style lang='scss' scoped>
	
</style>