<template>
	<div class="InputPanel" 
			v-bind:class="{ hidden: !showPanel, InputPanelShowAnim: showPanelAnim, InputPanelHideAnim: hidePanelAnim  }"
			> 

		<input placeholder="Title" v-model="title" @change="changeTitle" />

		<textarea v-model="description" class="HiddenInput" placeholder="Description"></textarea>

		<div class="TopBorder">
			<SvgSprite class="Context-button" symbol="icon-minus" size="30" @click="hide" />
		</div>
	</div>
</template>

<script>
export default {
	name: "InputPanel",
	data: () => {
		return {
			showPanel: false,
			showPanelAnim: false,
			hidePanelAnim: false,
			editNoteIndex: -1,
			note: null
		}
	},
	methods: {
		show (noteIndex) {
      console.log(noteIndex, 'asds')
      this.note = this.$store.getters.getNote(noteIndex);
			this.editNoteIndex = noteIndex;

      console.log(noteIndex, this.note)

			let foundNote = false;

			for (let note of this.$store.state.notes) {
				if (note.index == noteIndex) {
					this.title = note.title;
					this.description = note.description;

					foundNote = true;
				}
			}

			if (foundNote == false) {
				this.title = "";
				this.description = "";
			}

			if (this.showPanel)
				return;
			
			this.showPanel = true;
			this.showPanelAnim = true;

			setTimeout(() => {
				this.showPanelAnim = false;
			}, 500);
		},
		hide () {
			this.showPanelAnim = false;
			this.hidePanelAnim = true;

			// const emitObj = {
			// 	password: localStorage.getItem("password"),
			// 	note: {...note, title: this.title, description: this.description}
			// }

      console.log('note', this.note)
      this.note.edit({ title: this.title, description: this.description });

      this.$store.commit("saveLocalStorage");
			setTimeout(() => {
				this.hidePanelAnim = false;
				this.showPanel = false;
			}, 500);
		}
	},
	mounted () {
		// this.$on("showInputPanel", this.show);
		console.log("Mounted inputpanel")
	
	}
}
</script>

<style lang="scss">
.InputPanel {
	position: fixed;
	z-index: 100;
	left: 0;
	bottom: 0;
	background: white;
	/* border-top: solid #f5c75b 30px; */
	border-radius: 0%;

	.TopBorder {
		width: 100%;
		height: 30px;
		background: #f5c75b;

		svg {
			float: left;
			margin: 0;
		}
	}

	input {
		width: 100%;
		height: 50px;
		border: 0;
		margin: 0;
		padding: 0;
	}

	.HiddenInput {
		width: 100%;
		height: calc(100% - 80px);
		display: block;
		border: 0;
		padding: 0;
		margin: 0;
	}
}

@media screen and (max-width: 600px) {
	.InputPanel {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		right: 0;
		left: 0;
	}
}

@media screen and (min-width: 600px) {
	.InputPanel {
		width: 600px;
		height: 500px;
    margin-left: 110px;
    margin-right: 0;
	}
}


.InputPanelShowAnim {
	animation-duration: 0.5s;
  animation-name: InputPanelShowANIM;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

.InputPanelHideAnim {
	animation-duration: 0.5s;
  animation-name: InputPanelHideANIM;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

@keyframes InputPanelShowANIM {
	from {
		bottom: -100%;
	}

	to {
		bottom: 0;
	}
}

@keyframes InputPanelHideANIM {
	from {
		bottom: 0;
	}

	to {
		bottom: -100%;
	}
}
</style>