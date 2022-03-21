<template>
	<div>
		<div class="SwipeLayout"  v-touch:swipe.bottom="swipeHandlerBottom" 
		v-touch:swipe.top="swipeHandlerTop"
		:class="{ ColorLayout: isMobile()&&showNav }"></div>

		<div :class="{ showNavAnim: showAnim, hideNavAnim: hideAnim, hidden: !showNav }" v-touch:swipe.top="swipeHandlerTop" class="Nav">

			<div class="item">
				<router-link to="/today-list">
					<SvgSprite class="logo-icon" symbol="icon-planing" size="90" />
				</router-link>
			</div>

			<div class="item">
				<router-link to="/notates">
					<SvgSprite class="logo-icon" symbol="icon-list" size="90" />
				</router-link>
			</div>

			<div class="item">
				<router-link to="/settings">
					<SvgSprite class="logo-icon" symbol="icon-config" size="90" />
				</router-link>
			</div>
			
			<div class="item">
				<router-link to="/create-schedule">
					<SvgSprite class="logo-icon" symbol="icon-list" size="90" />
				</router-link>
			</div>

			<div class="item">
				<router-link to="/">
					<SvgSprite class="logo-icon" symbol="icon-config" size="90" />
				</router-link>
				
				<div class="ContextMenu">
					<div class="item">Options</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { SvgSprite } from 'vue-svg-sprite'


export default {
	name: "Nav",
	components: {
      SvgSprite,
  },
	data: () => {
		return {
			showNav: true,
			showAnim: false,
			hideAnim: false,
			context: [
				{ pos: 5, items: [ 'Test', 'Test2' ] }
			]
		}
	},
	methods: {
		play () {
			
		},
		swipeHandlerBottom () {
			this.showNav = true;
			this.showAnim = true;

			setTimeout(() => {
				this.showAnim = false;
			}, 500)
		},
		swipeHandlerTop () {
			this.hideAnim = true;

			setTimeout(() => {
				this.showNav = false;
				this.hideAnim = false;
			}, 400)
		},
		isMobile() {
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true
			} else {
				return false
			}
		}
	},
	mounted () {
		if (this.isMobile() == true) {
			this.showNav = false;
		}
	}
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px) {
	.Nav {
		/* visibility: hidden; */
		width: 100%;
	}
}

@media screen and (min-width: 600px) {
	.Nav {
		visibility: visible;
	}
	.SwipeLayout {
		visibility: hidden;
	}
}

.SwipeLayout {
	position: fixed;
	width: 150px;
	height: 100%;
	top: 0;
	left: 0;
	touch-action: none;
}

.ColorLayout {
	background: rgba(255, 255, 255, 0.5);
	width: 100%
}

.hidden {
	visibility: hidden;
}

.Nav {
	position: absolute;
	touch-action: none;
	/* top: 50px; */
	bottom: 30%;
	width: auto;

	.router-link-active {
		.item {
			background: #EBA601;
			outline: 4px double #EBA601;

			svg {
				fill: white;
			}
		}
	}

	.item {
		display: flex;
		//align-items: left;
		justify-content: left;
    margin: 10px 10px 10px 10px;
    padding: 3px;
    /* border: solid 7px silver; */
    width: auto;
    animation-duration: 3s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    .ContextMenu {
      width: 200px;
      background: white;
      height: 200px;
    }
	}

	.logo-icon:hover {
		background: #EBA601;
		animation-duration: 3s;
		animation-name: hoverItem_anim;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	.logo-icon {
		fill: #C9C9C9;
		width: 70px;
		height: 70px;
		border-radius: 100%;
		/* fill: #000000; */
	}

	.logo-icon:hover {
		fill: white;
	}
}

.showNavAnim {
	animation-duration: 0.5s;
  animation-name: showNavANIM;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

.hideNavAnim {
	animation-duration: 0.5s;
  animation-name: hideNavANIM;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

@keyframes showNavANIM {
	from {
		bottom: 100%;
	}

  to {
		bottom: 30%;
		/* background: black; */
  }
}

@keyframes hideNavANIM {
	from {
		bottom: 30%;
	}

  to {
		bottom: 100%;
		/* background: black; */
  }
}
</style>	