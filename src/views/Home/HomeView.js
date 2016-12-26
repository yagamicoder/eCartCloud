import React, {Component} from 'react';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import { ProductView } from '~/components';

export default class HomeView extends Component {
  render() {
      return (
        <div className={css(styles.outerWrap)}>
          <Container>
            <Row>
              <div className={css(styles.wrapper)}>
                <ProductView />
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
  },
  outerWrap: {
    paddingBottom: '80px'
  }
});
