// 静态名
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMEMBER_ANSWER = 'REMEMBER_ANSWER';
const REMEMBER_TIME = 'REMEMBER_TIME';
const INIT_DATA = 'INIT_DATA';

export default {
	// 点击增加item值进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	},
	// 记录答案
	[REMEMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	// 记录答题时间
	[REMEMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	// 初始化信息
	[INIT_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
}
