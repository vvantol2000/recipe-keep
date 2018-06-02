import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h2>{this.props.title}</h2>
                    <h4 className="title-bar__subtitle">{this.props.subtitle}</h4>
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string.isRequired
};

export default TitleBar;
