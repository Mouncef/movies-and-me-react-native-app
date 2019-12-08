/**
 * Created by Mouncef on 08/12/2019.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FilmDetail extends React.Component {

    render() {
        return(
            <View style={styles.main_container}>
                <Text>Détail du film {this.props.navigation.state.params.idFilm}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});


export default FilmDetail;