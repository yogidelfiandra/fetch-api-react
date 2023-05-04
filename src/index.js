import './index.css';
import { getRestaurants } from './api';
import { displayRestaurants } from './dom-manipulation';

(async () => {
  const restaurant = await getRestaurants();
  displayRestaurants(restaurant);
})();
