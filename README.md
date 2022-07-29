<h1>N Queens problem</h1>

This code provides a solution to the N-queens problem using Random Restart Hill Climbing Local Search Algorithm.

<h5>Formulation.</h5>

The N-Queens problem is well known and well-solved one in computer science. The rules are simple, given a chess board of size N×N and N queens, find a placement for all N queens such that no queen attacks any other queen.

<h5>Algorithm </h5>

The algorithm repeatedly explores the problem space. That is, it conducts a hill-climbing search algorithm on the matrix. When unable to find an optimal solution, it again restarts with a randomly generated matrix and tries to find an optimal solution. Hill Climbing with random restart thus conducts a series of repeated hill-climbing algorithms to find an optimal solution.

<h5>Functions</h5>

**rowCollisions** - runs through the matrix and counts the number of row collisions

**colCollisions** - Same for columns

**evaluate** - Is the sum of rowCollisions and colCollisions

**generateCandidates** - Given the current state, generate a set of candidates

**generateState** - Generate a random new state for the N Queens problem size n

**isSolution** - Helper Function to tell us if our configuration is a solution. By checking whether evaluation (using evaluate function) is equal to 0.

**nQueensBestFirstHillClimbing** The primary function that solves the puzzle by combining all above mention functions.

**solveNQueens** - Solve the N Queens problem using Random Restart Hill Climbing. This function does the random restart if there is no solution. It returns the Number of Hill Climbing Random Restarts and the Solution.

<h5>How to use</h5>

in console.log() either run it giving N Queens number, or you can also pass in a state to start from

