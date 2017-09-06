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
			<button v-if='itemNum < itemDetail.length' class="start-item">开始</button>
			<button v-else class="next-item">下一题</button>
			<p class="timer">{{allTime}}</p>
		</footer>
	</section>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	
	export default {
		name: 'item',
		data: () => {
			return {
				itemId: null, // 题目ID
				chooseNum: null, // 选择答案的索引
				chooseId: null // 选择答案的ID
			}
		},
		props: ['fatherComponent'],
		computed: mapState([
			'itemNum',
			'level',
			'itemDetail',
			'timer',
			'allTime'
		]),
		methods: {
			...mapActions([
				'addNum',
				'initData'
			]),
			nextItem() {
				if(this.chooseNum !== null) {
					this.chooseNum = null;
					// 保存答案，索引加一，下一题
					this.addNum(this.chooseId);
				} else {
					alert('请选择答案才能进入下一题噢！');
				}
			},
			chooseType(type) {
				switch(type) {
					case 0: return 'A';
					case 1: return 'B';
					case 2: return 'C';
					case 3: return 'D';
				}
			},
			getChoose(num, id) {
				this.chooseNum = num;
				this.chooseId = id; // 答案正确与否以0/1表示
			},
			submit() {
				if(this.chooseNum !== null) {
					this.addNum(this.chooseId);
					clearInterval(this.timer);
					this.$router.push('score');
				} else {
					alert('请选择答案才能提交噢！');
				}
			},
			created() {
				this.initData();
			}
		}
	}
</script>

<style lang='scss' scoped>
	
</style>