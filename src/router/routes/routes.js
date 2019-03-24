import SuperheroesList from '../../views/list/SuperheroesList.vue';
import SuperheroesDetails from '../../views/details/SuperheroesDetails.vue';
import SuperheroesBiography from '../../views/details/categories/SuperheroesBiography.vue';
import SuperheroesAppearance from '../../views/details/categories/SuperheroesAppearance.vue';
import SuperheroesWork from '../../views/details/categories/SuperheroesWork.vue';
import SuperheroesConnections from '../../views/details/categories/SuperheroesConnections.vue';

export default [
    {
        path: '/',
        component: SuperheroesList,
    },
    {
        path: '/:id',
        redirect: '/:id/biography',
        component: SuperheroesDetails,
        children: [
            {
                path: 'biography',
                component: SuperheroesBiography,
            },
            {
                path: 'appearance',
                component: SuperheroesAppearance,
            },
            {
                path: 'work',
                component: SuperheroesWork,
            },
            {
                path: 'connections',
                component: SuperheroesConnections,    
            },
        ],
    },
];