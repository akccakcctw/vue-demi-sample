import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export const VueDemiSample = {
	install(app, options) {
		console.log('options:', options);
		app.component(ComponentA.name, ComponentA);
		app.component(ComponentB.name, ComponentB);
	},
};
