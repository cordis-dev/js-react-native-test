const styles = StyleSheet.create({
  text: {}
});

const Hello = React.createClass({
  render: function() {
    return <Text>Hello {this.props.name}</Text>;
  }
});
