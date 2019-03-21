// PREP: Parameters, Returns, Examples, Pseudocode
/**
 * 
 */
class LeaderBoard {

    constructor() {
        // players on the Leaderboard
        // instantiate players using HashMap data structure, player_id will be the keys 
        // and the value will be an array of values including the average score
        this.players = new Map();
        /**
         * MAP:
         * {
         *  02: [ [10, 40, 70, 30], 'Muigai', 0605 ] 
         * }
         */
    }
    /**
     * Add a new score to the player's average. If a player doesn't exist in the LeaderBoard, they will be automatically added.
     * 
     * Parameters: (Integer) player_id, (Integer) player_score
     * Returns: (Integer) player average score
     */
    add_score(player_id, player_score) {
        try {

            // if player_score is less than 0 or greater than 100, throw an error with a message
            if (player_score < 0 || player_score > 100) {
                throw new Error('Whoa, your score is unacceptably high or low. Are you hacking the game?')
            }
            // if player_id is not in this.players, add it to Map with their score
            if (!this.players.has(player_id)) {

                this.players.set(player_id, [[player_score]]);
                console.log("new player added", player_score);
                return player_score;
            }
            // if they already exist, add the score to the average of the specified player_id's score
            else {
                let playerScores = this.players.get(player_id)[0];
                playerScores.push(player_score);
                // average it out then return it
                let average = this.averagePlayerScores(playerScores);
                console.log("previous player's avg", average);
                return average;
            }
        /** POSSIBLE REFACTOR:
        conditional ? helper_method_throw_error :
            conditional ? helper_method_new_player : helper_method_previous_player
         */


        }
        catch(e) {
            if (player_score < 0 || player_score > 100) {
            
                console.log(`Error: ${e}`);
            }
        }        
    }
    /**
     * Get the top player_ids on the leaderboard ordered by their average scores from highest to lowest
     * 
     * Parameters: num_players (Integer)
     * Returns: List<Integer>: a list of player_ids
     */
    top(num_players) {
        let players = {};
        // iterate through the Map, average the scores of each player_id
        this.players.forEach((val, key, map) => {
            players[key] = this.averagePlayerScores(val[0]);                                    
        });

        // populate an array with the player_ids that have the highest average scores
        let sorted = Object.keys(players).sort(function (a, b) {
            return players[b] - players[a];
        });
        
        let topAvgScores = sorted.splice(0, num_players).map(id => Number(id));
        console.log( topAvgScores );
        return topAvgScores;
    }
    /**
     * Removes any scoring information for a player, effectively resetting them to 0
     * 
     * Parameters: (Integer)player_id
     * Returns: void
     */
    reset(player_id) {
        try {
            
            //take current value, reset score in two dimensional array
            let currentValue = this.players.get(player_id);
            // mutation of currentValue array of scores
            currentValue[0] = [0];                
            this.players.set(player_id, currentValue);
        }
        catch (e) {

            if(!this.players.has(player_id)) {
                console.log(`Error: ${e}`);
            }
        }
    }
    // helper methods
    averagePlayerScores(playerScores) {
        let scores = playerScores.reduce( (a,b) => {
            return a + b;
        });
        let average = scores / playerScores.length;
        return average;
    }
}

// instantiate a instance of leaderboard
// mutate the leaderboard instance
// test each method of the leaderboard instance with a few different inputs

 // Create a new LeaderBoard Instance
 let leader_board = new LeaderBoard();

 // Add scores for players to the LeaderBoard
 leader_board.add_score(1, 50); // 50.0
 leader_board.add_score(2, 80); // 80.0
 leader_board.add_score(2, 70); // 75.0
 leader_board.add_score(2, 60); // 70.0
 leader_board.add_score(3, 90); // 90.0
 leader_board.add_score(3, 85); // 87.5
 leader_board.add_score(7, 100); // 100
 leader_board.add_score(7, 98); // 99
 leader_board.add_score(7, 96); // 98
 leader_board.add_score(13, 5); // 5
 leader_board.add_score(13, 10); // 7.5

 // Get top positions for the leaderboard
 leader_board.top(3); // [3, 2, 1]
 leader_board.top(2); // [3, 2]
 leader_board.top(1); // [3]

 // Reset a player 3's scores
 leader_board.reset(3); // void

 // Player 3 is now at the bottom of the leaderboard
 leader_board.top(3); // [2, 1, 3]

 // extra examples:
 leader_board.top(0);
 leader_board.reset(104);
 leader_board.add_score(19, 101);
 leader_board.add_score(19, -1);
