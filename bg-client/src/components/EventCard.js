import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../styles/EventCard.css';

class EventCard extends React.Component {
    handleReadMore = () => {
        this.props.handleReadMore(this.props.event.title);
    }
    render() {
        return (
            <div className="col-sm-4 py-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.event.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.event.location}</h6>
                        <p className="card-text">{this.props.event.description}</p>
                        <p><HomeIcon/> {this.props.event.fullAddress}</p>
                        <p>
                            <AccessTimeIcon/> {new Date(this.props.event.startDate).toLocaleString() + ' - ' + new Date(this.props.event.endDate).toLocaleString()}
                        </p>
                        <p className="card-link access-event" onClick={this.handleReadMore}>Read More</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCard;