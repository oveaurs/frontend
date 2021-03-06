module.exports = {
    onCreate(input) {
        var player = input.player;
        this.state = {
            player: player,
            name: input.name,
            isCurrentPlayer: player.is_current_player,
            currentScore: player.current_score,
            wins: player.wins ? player.wins : 0
        }
    },
    setScored(scored) {
        this.state.currentScore -= scored;
    }
};