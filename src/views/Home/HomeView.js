import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import {fromJS} from 'immutable';

export class HomeView extends Component {
  static propTypes = {
  }
  render() {
      return (
        <div>
          <Container>
            <Row>
              <div className={css(styles.wrapper)}>
                fdfsdfsd
              </div>
            </Row>
          </Container>
        </div>
      );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: '210px'
  }
});

const actions = {

};

const mapStateToProps = (state) => {
  const login = fromJS(state).get('login');
  return {
  };
};


export default connect(mapStateToProps, actions)(HomeView);