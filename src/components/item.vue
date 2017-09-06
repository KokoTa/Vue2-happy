<!-- 根据传入的参数进行判断渲染 -->

<template>
	<section>
		<header class="header">
			<span v-if="fatherComponent == 'home'" class="tip"></span>
			<span v-if="fatherComponent == 'item'" class="tip"></span>
		</header>
		<article>
			<div v-if="fatherComponent == 'home'">
				<router-link to='item'></router-link>
			</div>
			<div v-if="fatherComponent == 'item'">
				<div class="item-container">
					<header class="item-title">

					</header>
					<ul class="item-list">
						
					</ul>
				</div>
			</div>
		</article>
		<footer>
			<button v-if='start' class="start-item">开始</button>
			<button v-else class="next-item">下一题</button>
		</footer>
	</section>
</template>

<script>
	export default {
		name: 'item',
		data: () => {
			return {
				start: true
			}
		},
		props: ['fatherComponent']
	}
</script>

<style lang='scss' scoped>
	
</style>