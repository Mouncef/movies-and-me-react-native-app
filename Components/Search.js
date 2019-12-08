/**
 * Created by Mouncef on 07/12/2019.
 */
import React from 'react';
import {FlatList, StyleSheet, Button,TextInput, View, Text} from 'react-native';
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props);
        this.searchText= "";
        this.state = {
            films: []
        };
    }

    _searchTextInputChanged(text) {
        this.searchText= text;
    }

    _loadFilms() {
        console.log(this.searchText);
        if (this.searchText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchText).then( data => {
                this.setState({ films: data.results })
            })
        }

    }

    render() {
        console.log("RENDER");
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms() }/>
                {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} />}
                />
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
        marginTop: 20,
        flex: 1
    }
});

export default Search;