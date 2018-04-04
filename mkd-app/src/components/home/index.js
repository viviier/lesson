/**
 * @file home.js
 * @date 2018/4/4
 */

import React from 'react';
import { connect } from 'react-redux';

// component
import ItemList from './listItem';

// action
import { addMkd } from '../../actions';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.updatedState();
    }

    updatedState() {
        this.props.handleAddClick();
        this.setState({
            list: this.props.list
        });
    }

    getListDom(list) {
        let dom = list && list.map((item, key) => {
            return <ItemList data={item} key={key} />
        });

        return dom;
    }

    render() {
        return (
            <div className="home">
                {this.getListDom(this.state.list)}
                <button onClick={() => this.updatedState()}>添加</button>
            </div>
        );
    }
}

let Component = connect(
    state => {
        return {
            list: state.mkds
        }
    },
    dispatch => {
        return {
            handleAddClick: function() {
                dispatch(addMkd());
            }
        }
    }
)(Home);

export default Component;