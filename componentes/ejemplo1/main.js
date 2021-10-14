Vue.component("header-card", {
	props: ["title"],
	template: `
	  <div>
		<h2>{{ title }}</h2>  
	  </div>
	`,
});

const app = new Vue({
	el: "#app",
	data: {},
	computed: {},
	methods: {},
	watch: {},
});
