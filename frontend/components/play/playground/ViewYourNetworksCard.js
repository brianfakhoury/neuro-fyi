import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class ViewYourNetworksCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="card-content-container">
                <IconButton className="close-button" onTouchTap={()=>this.props.closeCard()} ><NavigationClose /></IconButton>
                <div className="card-content create-simple-net">
                    <h1>View!</h1>
                    <hr />
                </div>
            </div>
        );
    }
}

ViewYourNetworksCard.propTypes = {
    closeCard: PropTypes.func
};

export default ViewYourNetworksCard;
