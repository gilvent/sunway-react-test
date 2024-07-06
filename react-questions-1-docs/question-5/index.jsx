/** Can you explain the problem with the following code, and how to fix it. **/

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
    /**
     * Initial code
     */

    // this.setState({ count: this.state + 1})
    // this.setState({ count: this.state + 1})
    // this.setState({ count: this.state + 1})

    /**
     * Answer: 
     * 1. Replace this.state with this.state.count because this.state returns an object { count: 0 }.
     * 2. Multiple this.setState() does not work because the value of this.state.count is the same for
     * the three executions. 
     * If we want to increment count by 3, we can directly use this.state.count + 3
     */
    
    this.setState({ count: this.state.count + 3})
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("root"));
