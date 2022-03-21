<template>
	<div class="Settings">
		<div class="lg-sao-label">Settings</div>

		<div class="List">
			<div class="Item">
				<div class="m-sao-label">Access token authorization</div>
				<input v-model="accessToken" placeholder="Your token" />

				<button @click="tokenLogin">LOGIN</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Settings",
	data: () => {
		return {
			accessToken: ""
		}
	},
	methods: {
		tokenLogin () {
			this.$socket.emit("tokenAuth", this.accessToken);
		}
	}
}
</script>

<style lang="scss">
.Settings {
	width: 100%;
	height: 100%;
	padding: 0;

	.List {

		.Item {
			input {
				width: 300px;
				height: 25px;
				border: 0;
				border-bottom: solid silver 4px;
				font-weight: 700;
			}

			button {
				width: 300px;
				height: 40px;
				border: 0;
			}
		}
	}
}

@media screen and (min-width: 600px) {
	.List {
		width: 600px;
		margin-left: 110px;
		margin-right: 0;
	}
}
</style>
