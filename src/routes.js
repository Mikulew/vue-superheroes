import SuperheroesList from './views/list/SuperheroesList.vue';
import SuperheroesBio from './views/bio/SuperheroesBio.vue';

const routes = [
    {
        path: '/',
        component: SuperheroesList,
    },
    {
        path: '/1/general',
        component: SuperheroesBio,
    },
    {
        path: '/2/general',
        component: SuperheroesBio,
    },
    {
        path: '/3/general',
        component: SuperheroesBio,
    },
];

export default routes;