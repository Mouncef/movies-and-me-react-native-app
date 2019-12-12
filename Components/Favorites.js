/**
 * Created by Mouncef on 10/12/2019.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import FilmList from './FilmList';
import { connect } from 'react-redux';

class Favorites extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            favoritesFilm: []
        }
    }

    render() {
        return(
            <FilmList
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
                favoriteList={true}
            />
        );
    }

}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
};

export default connect(mapStateToProps)(Favorites);