import React, { Component } from "react";
import PropTypes from 'prop-types';
import HeaderComponent from "../../components/header/index";
import PokemonCard from "../../components/pokemoncard/index";
import styles from './styles';

import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions/pokemonActions';

class Pokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchPokemons();
    }

    render() {
        // console.log('Pokémons: ', this.props.pokemons);
        return(
            <div>
                <HeaderComponent />
                {this.props.pokemons.length > 0 &&
                <div style={styles.pokeDiv}>
                    {this.props.pokemons.map(poke => {
                        return(
                            <PokemonCard key={poke.name} pokemon={poke} />
                        )
                    })}
                </div>}
            </div>
        )
    }
}

Pokemons.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemonState.pokemonList
})

export default connect(mapStateToProps, { fetchPokemons })(Pokemons);
