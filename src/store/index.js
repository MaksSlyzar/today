import { createStore } from 'vuex'

export default createStore({
  state: {
		notes: []
  },
  mutations: {
		
  },
  actions: {
		SOCKET_authData (self, data) {
			console.log(data);
			localStorage.setItem("auth", true);
			localStorage.setItem("accessToken", data.accessToken)
			localStorage.setItem("password", data.password)
		},
		SOCKET_successAlert(self, data) {
			console.log(data);
		},
		SOCKET_errorAlert(self, data) {
			console.log(data);
		},
		SOCKET_getNotes(self, data) {
			self.state.notes = data;
			console.log(self.state.notes)
		},
		SOCKET_showInput(self, data) {
			console.log("SHOW INPUT", data)
			// this.show (data.index)
			console.log(self)
		}
  },
  modules: {
  }
})
