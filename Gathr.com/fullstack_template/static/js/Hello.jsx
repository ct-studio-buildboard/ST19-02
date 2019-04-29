export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello " + this.props.name };
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
  }

  getPythonHello() {
    $.get(window.location.href + "hello", data => {
      console.log(data);
      this.personaliseGreeting(data);
    });
  }
}
