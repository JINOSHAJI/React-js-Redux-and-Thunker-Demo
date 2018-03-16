import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/index';

class Movies extends Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.key}>
                    {item.title},
                    {item.releaseYear}
                    </li>
                ))}
            </ul>
        );
    }
}

// ItemList.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     items: PropTypes.array.isRequired,
//     hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

const mapStateToProps = (state) => {
    console.log('state');
    console.log(state);
    return {
        items: state.movies,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(counterActions.getMovies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
