<template>
	<div>
		<header>
			<h1>总得分：{{score}}</h1>
			<h4>{{tip}}</h4>
		</header>
		<footer>
			<router-link to='item'>再试一次</router-link>
		</footer>
		<div class="mask" v-show="showHide"></div>
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
		}
	}
</script>

<style>
	
</style>