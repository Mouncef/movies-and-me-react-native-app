/**
 * Created by Mouncef on 07/12/2019.
 */
import React from 'react';
import {FlatList, StyleSheet, Button,TextInput, View, Text, ActivityIndicator} from 'react-native';
import FilmItem from "./FilmItem";
import FilmList from "./FilmList";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';


class Search extends React.Component {

    constructor(props){
        super(props);
        this.searchText = "";
        this.page = 0;
        this.totalPages = 0;
        this._loadFilms = this._loadFilms.bind(this);
        this.state = {
            films: [],
            isLoading: false
        };
    }

    _searchTextInputChanged(text) {
        this.searchText= text;
    }

    _loadFilms() {
        if (this.searchText.length > 0) {
            this.setState({ isLoading: true });
            getFilmsFromApiWithSearchedText(this.searchText, this.page+1).then( data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })
        }

    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
    }

    _searchFilms() {
        this.page = 0;
        this.totalPages = 0;
        this.setState({
            films: []
        }, () => {
            //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms();
        });
    }

    _displayDetailForFilm = (idfilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: idfilm });
    };

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={ () => this._searchFilms() }
                />
                <Button title='Rechercher' onPress={() => this._searchFilms() }/>
                {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages}
                    favoriteList={false}
                />
                {this._displayLoading()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    main_container: {
        flex: 1
    },
    loading_container : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Search;