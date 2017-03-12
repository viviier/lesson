import {connect} from 'react-redux'
import HomePage from '../../components/ResultPage/HomePage'

import {
    getGithub,
    changeUserId
} from '../../actions'

export default connect(
    (state) => ({
        userId: state.getIn(['github', 'userId'])
    }),
    (dispatch) => ({
        onChangeUserId: (event) => (
            dispatch(onChangeUserId(event.target.value))
        ),
        onSubmitUserId: (userId) => () => {
            dispatch(getGithub(userId))
        }
    }),
    (stateProps, dispatchProps, ownProps) => {
        const {userId} = stateProps
        const {onSubmitUserId} = dispatchProps
        return Object.assign({},             stateProps,
            dispatchProps,
            ownProps, {
                onSubmitUserId: onSubmitUserId(userId)
            })
    }
)(HomePage)