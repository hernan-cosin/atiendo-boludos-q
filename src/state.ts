type Score = 1 | 0 | -1;
const state = {
  data: {
    wins: [],
    looses: [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState: object) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  pushToPersonAnswers(answer) {
    this.data.personAnswers.push(answer);
  },
  addScore(score: Score) {
    const currentState = this.getState();
    if (score == 1) {
      currentState.wins.push(score);
    }
    if (score == -1) {
      currentState.looses.push(score);
    }
    this.setState(currentState);
  },
  reset() {
    const currentState = this.getState();
    currentState.wins = [];
    currentState.looses = [];
    console.log("reset");

    this.setState(currentState);
  },
  subscribe(callback) {
    this.listeners.push(callback);
  },
};

export { state };
