import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {StyleSheet, css} from 'aphrodite';
import { selectProduct } from '~/reducers/products';
import { fetchReviews } from '~/reducers/reviews';
import { deleteHistoryItem } from '~/reducers/history';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import { DisplayHistory, HistoryFooter } from '~/components/History';

export class HistoryView extends Component {
  static propTypes = {
    history: PropTypes.object,
    selectProduct: PropTypes.func,
    fetchReviews: PropTypes.func,
    deleteHistoryItem: PropTypes.func,
    firstName: PropTypes.string
  };

  render() {
    const { history, selectProduct, fetchReviews, deleteHistoryItem, firstName } = this.props;

    return (
      <div className={css(styles.outerWrap)}>
        <div className={css(styles.wrapper)}>
          <h1 className={css(styles.heading)}>
            History
            <FontIcon
              className={classNames("material-icons", css(styles.iconStyle))}
              color={colors.primary1Color}>history
              </FontIcon>
            </h1>
          <p className={css(styles.intro)}>{firstName}, here is your history.</p>
          <DisplayHistory
            history={history}
            selectProduct={selectProduct}
            fetchReviews={fetchReviews}
            deleteHistoryItem={deleteHistoryItem} />
          <HistoryFooter />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    color: colors.primary1Color,
    textAlign: 'center',
    fontSize: '1.5em',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    color: colors.primary2Color
  },
  iconStyle: {
    margin: '0 15px',
    verticalAlign: 'middle'
  }
});

const actions = {
  selectProduct,
  fetchReviews,
  deleteHistoryItem
};

const mapStateToProps = (state) => {
  const history = fromJS(state).getIn(['history', 'entities'], fromJS([]));
  const user = fromJS(state).getIn(['user', 'entities'], fromJS([]));
  const firstName = user.get('first_name');
  return {
    history: history,
    firstName: firstName
  };
};


export default connect(mapStateToProps, actions)(HistoryView);
