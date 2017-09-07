<!-- 根据传入的参数进行判断渲染 -->
<template>
	<section>
		<header class="header">
			<p v-if="fatherComponent == 'home'" class="tip">{{level}}</p>
		</header>
		<article>
			<div v-if="fatherComponent == 'home'">
				<router-link to='item' class='start'>开始</router-link>
			</div>
			<div v-if="fatherComponent == 'item'">
				<div class="item-container">
					<header class="item-title">
						{{itemDetail[itemNum-1].topic_name}}
					</header>
					<ul class="item-list">
						<li v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
							@click="getChoose(index, item.is_standard_answer)" 
							class="item-one" 
						>
							<span class="item-h" :class="{'item-active': chooseNum==index}">
								{{chooseType(index)}}
							</span>
							<span class="item-answer">
								{{item.answer_name}}
							</span>
						</li>
					</ul>
				</div>
				<div>
					<button v-if='itemNum < itemDetail.length' 
						@click='nextItem'
						class='item-btn'>
						下一题
					</button>
					<button v-else 
						@click='submit'
						class='item-btn'>
						提交
					</button>
				</div>
			</div>
		</article>
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
			'timer'
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
			}
		},
		created() {
			this.initData();
		}
	}
</script>

<style lang='scss' scoped>
	.tip {
		font-size: 4rem;
	}
	.item-title {
		font-size: 3rem;
		font-weight: bolder;
	}
	.item-list {
		margin-top: 1rem;
		.item-one {
			margin-bottom: .5rem;
			cursor: pointer;
			.item-h {
				text-align: center;
				display: inline-block;
				border: 1px solid black;
				width: 2.8rem;
				border-radius: 50%;
			}
		}
	}
	.item-active {
		background: #F9F9F9;
	}
	.item-btn {
		width: 6rem;
		height: 3rem;
		font-size: 1.5rem;
		background: #F8ED86;
		color: #8787A3;
		border-radius: 10px;
		margin-top: 1rem;
	}
</style>