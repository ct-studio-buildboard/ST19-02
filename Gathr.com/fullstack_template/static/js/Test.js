import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

class Test extends Component {
  personaliseGreeting(greeting) {
    this.setState({ greeting: greeting + " " + this.props.name + "!" });
  }
  render() {
    return (
      <React.Fragment>
        <PageHeader>
          <div className="header-contents">
            <Hello name="Rimini" />
          </div>
        </PageHeader>
        <h1>{this.state.greeting}</h1>
        <hr />
        <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
          Say Hello!
        </Button>
      </React.Fragment>
    );
  }
}

export default Test;
