<template>
	<div class="Notates">
		<div class="lg-sao-label">Notates</div>

		<div class="List">
			<div class="Item" v-for="note in getNotes()" :key="note.index"  @dblclick="dblClickItem(note.index)" @click="showInputPanel(note.index)" v-bind:class="{ activeItem: note.active }">
				<div class="Title">{{note.title}}</div>

				<div class="Description">{{note.description}}</div>

				<SvgSprite class="Context-button" symbol="icon-config" size="60" v-bind:class="{ hidden: note.context }" @click="changeContext(note.index, true, false)" />

				<!-- <div class="Date">{{note.date.toLocaleDateString()}}</div> -->
				<div class="Date">{{note.date}}</div>

				<div class="Context-menu" v-bind:class="{ hidden: !note.context }">
					<div class="Context-menu__Item" @click="removeItem(note.index)">
						Remove
					</div>
					<div class="Context-menu__Item" @click="cloneItem(note.index)">
						Clone
					</div>
				</div>
			</div>
		</div>

		<SvgSprite class="addNoteButton" symbol="icon-plus" size="60" v-bind:class="{ hidden: !showInputPanel }" @click="addNote" /> 

		<InputPanel ref="inppanel" />
	</div>
</template>

<script>
import InputPanel from "@/components/InputPanel"
import { SvgSprite } from 'vue-svg-sprite'

export default {
	name: "Notates",
	data: () => {
		return {
			notes: [],
			removeAttemption: false,
			title: '',
			description: '',
			changeIndex: -1
		}
	},
	mounted () {
		// this.$socket.emit("changeNote", { notes: this.notes, passwd: localStorage.getItem })
		this.$socket.emit("getNotes", {password: localStorage.getItem("password")});
	},
	methods: {
		addNote () {
			const noteIndex = Math.round(Math.random() * 100000000);
			this.$socket.emit("addNote", {password: localStorage.getItem("password"), note: { index: noteIndex }})

			this.showInputPanel(noteIndex);
		},
		getNotes () {
			return this.$store.state.notes;
		},
		hideInputPanel () {
			this.changeIndex = -1;
			this.$refs.inppanel.hide();
		},
		showInputPanel (noteIndex) {
			this.$refs.inppanel.show(noteIndex);
			this.changeIndex = noteIndex;
		},
		itemFocus (noteIndex) {
			this.changeIndex = noteIndex;
		},
		changeTitle () {
			for (let noteIndex in this.notes) {
				if (this.notes[noteIndex].index == this.changeIndex) {
					this.notes[noteIndex].title = this.title;
				}
			}
		},
		changeContext (noteIndex, show, all) {
			for (let note of this.notes) {
				if (all !== undefined)
					note.context = all;

				if (note.index == noteIndex) {
					note.context = show;
				}
			}
		},
		removeItem (noteIndex) {
			for (let _noteIndex in this.notes) {
				if (this.notes[_noteIndex].index == noteIndex) {
					this.notes.splice(_noteIndex, 1);
				}
			}

			this.changeContext(noteIndex, false, false);
		},
		cloneItem (noteIndex) {
			for (let _noteIndex in this.notes) {
				if (this.notes[_noteIndex].index == noteIndex) {
					const newNote = this.notes[_noteIndex];

					this.notes.push({...newNote, context: false, index: this.randomIndex(), date: new Date()});
				}
			}

			this.changeContext(noteIndex, false, false);
		},
		dblClickItem (noteIndex) {
			console.log("DBL CLICK")
			this.$socket.emit("activeNote", { password: localStorage.getItem("password"), index: noteIndex, value: -1 })
		},
		randomIndex () {
			return Math.floor(Math.random() * 100000);
		}
	},
	components: {
		SvgSprite,
		InputPanel
	}
}
</script>

<style lang="scss" scoped>
.Notates {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;

	.addNoteButton {
		position: fixed;
		background: #EBA601;
		border-radius: 100%;
		fill: white;
	}

	.Overlay {
		position: fixed;
		display: block;
    top: 0;
    left: 0;
    z-index: 50;
		width: -webkit-fill-available;
    height: -webkit-fill-available;
    opacity: 0.3;
    background: black;
	}

	.List {

		.Item {
			height: 60px;
			/* outline: solid 5px white; */
			/* background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)); */
			background: rgba(255, 255, 255, 0.9);
			position: relative;
			z-index: 0;
			margin-bottom: 5px;

			.Title {
				text-align: left;
				margin-left: 10px;
				font-size: 20px;
				font-family: Druk;
				font-weight: 400;
			}
			
			.Description {
				text-align: left;
				margin-left: 10px;
				font-size: 18px;
				font-weight: 100;
				font-family: Druk;
				color: rgb(190, 188, 187);
			}

			.Date {
				position: absolute;
				bottom: 0;
				right: 120px;
				font-size: 12px;
				color: rgb(170, 178, 177);
			}

			.Context-button {
				position: absolute;
				top: 0;
				right: 0;
				fill: rgb(190, 188, 187);
			}
		}

		.Context-menu {
			position: absolute;
			right: 0;
			width: 100px;
			border: solid 0px gray;
			top: 0;
			z-index: 3;
			height: 100%;
			cursor: pointer;

			&__Item {
				background: rgb(0, 0, 0, 0.2);
				height: 30px;
				font-size: 16px;
				font-family: SAOUI-Bold;
			}
		}

		.activeItem {
			background: orange;
		}
	}
}

@media screen and (min-width: 600px) {
	.List {
		width: 600px;
		margin-left: 110px;
		margin-right: 0;
	}

	.addNoteButton {
		bottom: 30px;
		left: 650px;
	}
}

@media screen and (max-width: 600px) {
	.addNoteButton {
		right: 30px;
		bottom: 30px;
	}
}
</style>
