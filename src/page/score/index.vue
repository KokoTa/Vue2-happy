<template>
	<div>
		<header>
			<h1 class="score">总得分：{{score}}</h1>
			<h4 class="title">称号：{{tip}}</h4>
		</header>
		<footer>
			<router-link to='item' class='score-btn'>再试一次</router-link>
			<a @click="showHide=!showHide" class='score-btn'>分享</a>
		</footer>
		<div class="mask" 
			v-show="showHide"
			@click="showHide=!showHide">
			<h1>右上角打开浏览器分享</h1>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex' 

	export default {
		name: 'score',
		data() {
			return {
				showHide: false,
				score: 0,
				tip: '',
				tips: ['非洲人！','亚洲人！','欧洲人！','欧皇！']
			}
		},
		computed: {
			...mapState(['answerid'])
		},
		methods: {
			getScore() {
				this.answerid.forEach((item) => {
					if(item == 1) {
						this.score += 20;
					}
				})
			},
			getTip() {
				if(this.score <= 25) return this.tip = this.tips[0];
				if(this.score <= 50) return this.tip = this.tips[1];
				if(this.score <= 75) return this.tip = this.tips[2];
				if(this.score <= 100) return this.tip = this.tips[3];
			}
		},
		created() {
			this.getScore();
			this.getTip();
			document.body.style.background ='#415B90';
		}
	}
</script>

<style lang='scss' scoped>
	.score, .title {
		color: white;
	}
	.score-btn {
		display: inline-block;
		font-size: 1rem;
		background: #FFED8F;
		width: 10rem;
		height: 2rem;
		line-height: 2rem;
		cursor: pointer;
	}
	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .5);
		h1 {
			color: white;
			position: relative;
			top: 50%;
		}
	}
</style>