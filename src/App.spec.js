import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import App from "./App.vue";
import VueRouter from "vue-router";
import SuperheroAppearance from "./view/details/categories/SuperheroAppearance.vue";
import SuperheroBiography from "./view/details/categories/SuperheroBiography.vue";
import SuperheroConnections from "./view/details/categories/SuperheroConnections.vue";
import SuperheroWork from "./view/details/categories/SuperheroWork.vue";
import SuperherPowerstats from "./view/details/categories/SuperherPowerstats.vue";
import routes from "./router/routes.js";

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders a child component via routing", () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, { localVue, router })

	router.push('/1/biography');
	router.push('/1/appearance');
	router.push('/1/work');
	router.push('/1/connections');
	router.push('/1/powerstats');

	expect(wrapper.find(SuperheroAppearance).exists()).toBe(true);
	expect(wrapper.find(SuperheroBiography).exists()).toBe(true);
	expect(wrapper.find(SuperheroConnections).exists()).toBe(true);
	expect(wrapper.find(SuperheroWork).exists()).toBe(true);
	expect(wrapper.find(SuperherPowerstats).exists()).toBe(true);
  })
})
