/**
 * Created by Mouncef on 08/12/2019.
 */

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'

export default createStore(toggleFavorite)