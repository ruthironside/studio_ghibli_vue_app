import App from '@/App.vue';
import {countriesFilm, filmsData} from './films.js';
import { shallowMount } from '@vue/test-utils';
import fetch from 'fetch-mock';

describe('App', () => {

let wrapper;

beforeEach(async () => {
  fetch.once('https://ghibliapi.herokuapp.com/films', JSON.stringify(filmsData));
  wrapper = shallowMount(App);
  await wrapper.vm.$nextTick();
  fetch.reset();
});

it('should have 2 films', () => {
  expect(wrapper.vm.films).toHaveLength(2);
})

// it('should have a description', () => {
//   expect(wrapper.vm.films).('Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.');
// })

it('should be able to add a favourite', () => {
  wrapper.setData({selectedFilm: filmsData[0]}); 
  wrapper.vm.addToFavourites(); 
  expect(wrapper.vm.favouriteFilms).toHaveLength(1); 
  expect(wrapper.vm.favouriteFilms[0].name).toMatch('Porco Rosso');
})


})


