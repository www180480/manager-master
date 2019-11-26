// 引入核心库
import Vue from 'vue'
// vux
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        editableTabsValue: 0,
        editableTabs: [
            {
                title: "欢迎页",
                name: '0',
            }
        ],
        tabIndex: 0
    },
    mutations: {
        tabclick(state,tab) {
            state.editableTabsValue = tab;
        },
        adddata(state,obj) {
            Vue.set(state.editableTabs, state.editableTabs.length, obj)
            state.editableTabsValue = obj.name;
            state.tabIndex = obj.name;
        }
    },
    actions: {
        tabclick(context){
            context.commit('tabclick')
        }
    }
})
export default store;