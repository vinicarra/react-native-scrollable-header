import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const { width: SCREEN_WIDTH } = Dimensions.get('screen')

export default class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  render() {

    const {
      content,
      collapsedHeader,
      expandedHeader,
      collapsedHeight,
      expandedHeight,
      scrollContainerStyle,
    } = this.props;

    const HEADER_EXPANDED_HEIGHT = expandedHeight;
    const HEADER_COLLAPSED_HEIGHT = collapsedHeight;

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp',
    });

    const collapsedHeaderOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    });

    const expandedHeaderOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const headerTitle = "Title";

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, headerContainerStyle, { height: headerHeight }]}>
          <Animated.View style={{
              position: 'absolute',
              width: SCREEN_WIDTH,
              height: HEADER_COLLAPSED_HEIGHT,
              opacity: collapsedHeaderOpacity,
              transform: [{
                translateY: this.state.scrollY.interpolate({
                  inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
                  outputRange: [-HEADER_COLLAPSED_HEIGHT, 0],
                  extrapolate: 'clamp',
                })
              }]
            }}
            >
            {collapsedHeader()}
          </Animated.View>
          <Animated.View style={{ height: headerHeight, opacity: expandedHeaderOpacity}}>
            {expandedHeader()}
          </Animated.View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={[styles.scrollContainer, scrollContainerStyle, { paddingTop: HEADER_EXPANDED_HEIGHT + 10, zIndex: 1 }]}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                y: this.state.scrollY,
              }
            }
          }])}
          scrollEventThrottle={16}
        >
          {content()}
        </ScrollView>
      </View>
    );
  }
}

Collapsable.props = {
  containerStyle: PropTypes.style,
  scrollContainerStyle: PropTypes.style,
  headerContainerStyle: PropTypes.style,
  content: PropTypes.any.isRequired,
  collapsedHeader: PropTypes.any.isRequired,
  expandedHeader: PropTypes.any.isRequired,
  collapsedHeight: PropTypes.number.isRequired,
  expandedHeight: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaeaea',
    },
    scrollContainer: {
      padding: 16,
    },
    header: {
      position: 'absolute',
      width: SCREEN_WIDTH,
      left: 0,
      zIndex: 9999
    },
});
  