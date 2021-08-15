import { connect } from 'react-redux';
import { addSeatRequest, getRequests } from '../../../redux/seatsRedux';
import OrderTicketForm from './OrderTicketForm';
import { addSeatRequest, getRequests, loadSeatsRequest } from '../../../redux/seatsRedux';

const mapStateToProps = state => ({
  requests: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  addSeat: (seat) => dispatch(addSeatRequest(seat)),
  loadSeats: () => dispatch(loadSeatsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTicketForm);