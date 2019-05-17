import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import { connect } from 'react-redux';
import { addPokemonToComparision, addPokemonToBagpack } from '../../actions/pokemonActions';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: props.pokemon
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({pokemon: nextProps.pokemon})
  }
  
  render() {
    const { classes } = this.props;
    // console.log("Card props", this.props)
    return (
      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="https://www.garrisoninstitute.org/wp-content/uploads/2018/05/john-cobb-14128-unsplash-e1526486464740-1112x630.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.pokemon.name}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {this.state.pokemon.bagpack
            ?<label>Added to bagpack</label>
            :<Button size="small" color="primary" onClick={(e) => this.props.addPokemonToBagpack(this.props.pokemon)}>
              Add to bagpack
            </Button>}
          <Button size="small" color="primary" onClick={(e) => this.props.addPokemonToComparision(this.props.pokemon)}>
            Compare
          </Button>
        </CardActions>
      </Card>
    );
  }
}

PokemonCard.propTypes = {
  addPokemonToComparision: PropTypes.func.isRequired,
  addPokemonToBagpack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { addPokemonToComparision, addPokemonToBagpack })(withStyles(styles)(PokemonCard));
