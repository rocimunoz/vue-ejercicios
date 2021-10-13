const app = new Vue({
	el: "#app",
	data: { message: "hola mundo" },
	computed: {},
	methods: {
		evento: function (event) {
			alert("hola mundo");
		},
		evento2: function (event) {
			alert("hola mundo solo 1 vez");
		},
		evento3: function (event) {
			alert("evento de teclas enter");
		},
	},
	watch: {},
});
