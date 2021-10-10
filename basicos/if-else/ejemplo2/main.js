const app = new Vue({
	el: "#app",
	data: { items: 40 },
	computed: {},
	methods: {
		moreThanFive: function () {
			return this.items > 5;
		},
	},
	watch: {},
});
