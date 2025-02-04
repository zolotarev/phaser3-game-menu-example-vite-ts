import Phaser from 'phaser'
import { Plugin } from 'phaser3-nineslice'

export default {
	type: Phaser.AUTO,
	parent: 'app',
	backgroundColor: '#33A5E7',
	scale: {
		width: 540,
		height: 960,
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
	plugins: {
		global: [Plugin.DefaultCfg],
	},
}
