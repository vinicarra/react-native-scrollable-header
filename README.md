[![npm version](https://badge.fury.io/js/survey-monkey-streams.svg)](//npmjs.com/package/react-native-scrollable-header)

# Scrollable Header

Simple but useful. I've always wanted to use this kind of header in my projects and I've tried many solutions available but most of them had issues with the core feature: the header. Based on that, I've created this EXTREME basic header that JUST scrolls the header: that's all. It's simple so anyone can read this code and make changes if needed (hopefully you don't need).

## Instalation

> npm install react-native-scrollable-header --save

## Demo

![Demo](https://i.giphy.com/media/w7waGojMm5ggjYxccv/giphy.webp)

## Example

~~~~
import RNScrollable from 'react-native-scrollable-header';

export default class App extends Component {

  renderExpanded = () => (
    <View style={{ flex: 1, backgroundColor: 'pink', padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>
        Expanded Header
      </Text>
    </View>
  );

  renderCollapsed = () => (
    <View style={{ flex: 1, backgroundColor: 'red', padding: 10, justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 14, alignSelf: 'center' }}>
        Collapsed Header
      </Text>
    </View>
  );


  render() {
    return (
      <RNScrollable 
        content={() => <Text>{content}</Text>}
        collapsedHeader={this.renderCollapsed}
        expandedHeader={this.renderExpanded}
        collapsedHeight={60}
        expandedHeight={200}
      />
    );
  }
}
~~~~

## Documentation

| Props                | Description                                      | Example                    | Required |
|----------------------|--------------------------------------------------|----------------------------|----------|
| content              | Renders the content of the page                  | <Text>Content</Text>       | Yes      |
| collapsedHeader      | Renders the collapsed header                     | <View style={{flex: 1}} /> | Yes      |
| expandedHeader       | Renders the expanded header (full)               | <View style={{flex: 1}} /> | Yes      |
| collapsedHeight      | Collapsed header height                          | 60                         | Yes      |
| expandedHeight       | Expanded header height                           | 200                        | Yes      |
| containerStyle       | The style for the whole screen                   |                            | No       |
| scrollContainerStyle | The style for ScrollView's contentContainerStyle |                            | No       |
| headerContainerStyle | The style for the top most header view           |                            | No       |
