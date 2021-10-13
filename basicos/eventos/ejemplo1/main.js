const app = new Vue({
	el: "#app",
	data: {
		counter: 0,
	},
	computed: {},
	methods: {
		contar: function (event) {
			return (this.counter += 1);
		},
		descontar: function (event) {
			return (this.counter -= 1);
		},
	},
	watch: {},
});
