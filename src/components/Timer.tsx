import { Component, FormEvent } from "react";

class Timer extends Component {
  // Setting states for 'Timer' to work with them :
  state = {
    seconds: "",
    running: false,
    intervalID: undefined,
  };

  onChange = async (e: FormEvent): Promise<void> => {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    const seconds = input.value;
    this.setState({ seconds: seconds });
  };

  onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    // Starting timer with 'seconds' state :
    this.setState({ running: true });
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ seconds: parseInt(this.state.seconds) - 1 });
        if (parseInt(this.state.seconds) === 1) {
          this.setState({ running: false });
          clearInterval(this.state.intervalID);
        }
      }, 1000),
    });
  };

  // Rendering function :
  render() {
    return (
      <>
        <h1>Timer : </h1>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <input
            value={this.state.seconds}
            type="text"
            placeholder="Enter Seconds :"
          />
          <button type="submit">Set Timer</button>
        </form>
      </>
    );
  }
}

export default Timer;
