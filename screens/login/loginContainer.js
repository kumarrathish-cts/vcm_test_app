import { connect } from "react-redux";
import loginComponent from './loginComponent';
import { getLogin } from "../../reducers";
import { loginActions } from "../../actions";


const mapStateToProps = (state /* , props */) => (
    {
      loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(loginComponent);