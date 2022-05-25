import { createStore } from 'vuex'
import { Note } from './note'

export default createStore({
	state: {
		notes: [],
		javaData: 'Null'
	},
	getters: {
		getNote: (self) => noteIndex => {
			return self.notes.find(note => note.index === noteIndex);
		}
	},
	mutations: {
		getNotes(self) {
			return self.notes;
		},
		newNote(self, obj) {
			const note = new Note(obj);
			self.notes.push(note);
			return note;
		},
		saveLocalStorage (self) {
			localStorage.setItem("notes-data", JSON.stringify(self.notes));
		},
		loadLocalStorage (self) {
			// this.loadAndroidStorage();

			if (localStorage.getItem("notes-data") == null)
				return;

			const notes = JSON.parse(localStorage.getItem(("notes-data")));
			self.notes = notes.map(note => new Note(note));
		},
		loadAndroidStorage () {
			// if (!window.Android)
			// 	return console.log("Android does not exist.");

			window.doLoadAndroidStorage = self.doLoadAndroidStorage;
			// window.Android.loadStorage();
		},
		doLoadAndroidStorage (self, data) {
			self.javaData = data;
		},
		saveAndroidStorage () {

		}
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
