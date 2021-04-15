import SuperheroesList from '../../views/list/SuperheroesList.vue';
import SuperheroDetails from '../../views/details/SuperheroDetails.vue';
import SuperheroBiography from '../../views/details/categories/SuperheroBiography.vue';
import SuperheroAppearance from '../../views/details/categories/SuperheroAppearance.vue';
import SuperheroWork from '../../views/details/categories/SuperheroWork.vue';
import SuperheroConnections	 from '../../views/details/categories/SuperheroConnections.vue';
import SuperheroPowerstats from '../../views/details/categories/SuperheroPowerstats.vue';

export default [
  {
    path: '/',
    component: SuperheroesList,
  },
  {
    path: '/:id',
    redirect: '/:id/biography',
    component: SuperheroDetails,
    children: [
        {
          path: 'biography',
          component: SuperheroBiography,
        },
        {
          path: 'appearance',
          component: SuperheroAppearance,
        },
        {
          path: 'work',
          component: SuperheroWork,
        },
        {
          path: 'connections',
          component: SuperheroConnections,
        },
        {
          path: 'powerstats',
          component: SuperheroPowerstats,
        },
    ],
  },
];
