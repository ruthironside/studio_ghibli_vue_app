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
//   expect(wrapper.find('description')).toBe(true);
// })

it('should be able to add a favourite', () => {
  wrapper.setData({selectedFilm: filmsData[0]}); 
  wrapper.vm.addtoFavourites(); 
  expect(wrapper.vm.favouriteFilms).toHaveLength(1); 

})


})


