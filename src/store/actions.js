export default {
	// 记录选择，判断是否是最后一题
	addNum({state, commit}, id) {
		commit('REMEMBER_ANSWER', id);
		if(state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	// 初始化信息
	initData({commit}) {
		commit('INIT_DATA');
	}
}