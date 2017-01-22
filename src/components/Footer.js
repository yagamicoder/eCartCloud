import React from 'react';
import { Container, Row } from 'react-grid-system';
import { StyleSheet, css } from 'aphrodite';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';

const Footer = () => {
  return (
    <footer className={css(styles.footerStyles)}>
      <Container fluid={true}>
        <Row className={css(styles.textStyles)}>
          <div className={css(styles.bottomNavStyles)}>
            <span className={css(styles.footerItem)}><FontIcon className="material-icons" color={colors.white}>shopping_cart</FontIcon></span>
            <span className={css(styles.footerItem)}>Copyright 2016</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

const styles = StyleSheet.create({
    textStyles: {
      textAlign: 'center'
    },
    footerStyles: {
      bottom: '0px',
      position: 'fixed',
      width: '100vw',
      left: '0px',
      textAlign: 'center',
      color: colors.white,
      zIndex: '2000'
    },
    bottomNavStyles: {
      backgroundColor: colors.primary1Color,
      padding: '15px'
    },
    footerItem: {
      verticalAlign: 'middle',
      display: 'inline-block'
    }
});

export default Footer;
