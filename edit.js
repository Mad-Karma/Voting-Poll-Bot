class Values {
    constructor() {
      this.EMBED_MESSAGE_TITLE = 'Poll';
      this.EMBED_MESSAGE_DESCRIPTION = "We're voting for the next x3 Anime/Shows/Movies/Series for Anime Monday\n\nThe rules are as follows:\n\n- Vote for 3 Anime/Shows/Movies/Series in order for preference\n(1st preference = 3 Points, 2nd preference = 2 Points, 3rd preference = 1 Point)\n- Points will be tallied and the game with the most points wins\n- All choices must be under 100 episodes (no exceptions)\n- You only get to vote once, so think through it carefully as there are no changes after you cast your vote\n- Voting will continue until 1 week has passed or all council members have voted.";
    }
  
    getEmbed_Message_Title() {
      return this.EMBED_MESSAGE_TITLE
    }

    getEmbed_Message_Description() {
        return this.EMBED_MESSAGE_DESCRIPTION
      }
  }

module.exports = Values