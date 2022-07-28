// Counts the number of row collisions
const rowCollisions = (a) => {
  let collision = 0;
  for (let i in a) {
    for (let j in a) {
      if (j != i) {
        collision = a[i] == a[j] ? collision + 1 : collision;
      }
    }
  }
  return collision;
};

// Counts the number of column collisions
const colCollisions = (a) => {
  let collision = 0;
  for (let i in a) {
    for (let j in a) {
      if (i != j) {
        dp = Math.abs(i - j);
        collision = a[i] == a[j] + dp ? collision + 1 : collision;
        collision = a[i] == a[j] - dp ? collision + 1 : collision;
      }
    }
  }
  return collision / 2;
};

// Heuristic Evaluation Function for N Queens
// We will want to minimize collisions -- also referred to as min-conflicts in general
const evaluate = (s) => {
  return colCollisions(s) + rowCollisions(s);
};

// Generate a set of candidates.
const generateCandidates = (current) => {
  let candidates = [];
  for (let i = 0; i < current.length; i++) {
    let start = current.slice(0, i);
    let end = current.slice(i + 1, current.length);
    for (let j = 1; j <= current.length; j++) {
      let c = start.concat(
        [Math.floor(Math.random() * current.length + 1)].concat(end)
      );
      candidates.push(c);
    }
  }
  return candidates;
};

// Generate a random new state for the N Queens problem of size n
const generateState = (n) => {
  state = [];
  for (let i = 0; i < n; i++) {
    state[i] = Math.floor(Math.random() * n + 1);
  }
  return state;
};

// Helper Function to tell us if our configuration is a solution.
const isSolution = (config) => {
  return evaluate(config) === 0;
};

// Workhorse function that solves our puzzle.
const nQueensBestFirstHillClimbing = (start) => {
  let best = start;
  let current;
  let currentEval = evaluate(start);

  while (true) {
    current = best;
    let candidates = generateCandidates(current);
    for (let i in candidates) {
      let candidateEval = evaluate(candidates[i]);
      // Lower evaluation number is better for our implementation
      if (candidateEval < currentEval) {
        current = candidates[i];
        currentEval = candidateEval;
      }
    }

    // If current & best are STILL the same, then we reached a peak.
    if (best == current) return best;

    best = current;
  }
};

// Solve the N Queens problem using Random Restart Hill Climbing.
const solveNQueens = (state) => {
  count = 1;
  state = nQueensBestFirstHillClimbing(state);

  while (!isSolution(state)) {
    // Random Restart If not a Solution.
    state = generateState(state.length);
    count++;
    state = nQueensBestFirstHillClimbing(state);
  }

  // Return the Number of Hill Climbing Random Restarts & the Solution.
  return [count, state];
};

// Running the Solver for: N Queens
console.log(solveNQueens(generateState(14)));
// or pass in a state to start from.
 console.log(solveNQueens([1,2,3,4]));