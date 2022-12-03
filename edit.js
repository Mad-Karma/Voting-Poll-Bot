class Values {
    constructor() {

      this.VOTING_TITLE = 'VOTING!';

      this.VOTE_CONTEXT_DESCRIPTION = "We're voting for the next x3 Anime/Shows/Movies/Series for Anime Monday\n\nThe rules are as follows:\n\n- Vote for 3 Anime/Shows/Movies/Series in order for preference\n(1st preference = 3 Points, 2nd preference = 2 Points, 3rd preference = 1 Point)\n- Points will be tallied and the game with the most points wins\n- All choices must be under 100 episodes (no exceptions)\n- You only get to vote once, so think through it carefully as there are no changes after you cast your vote\n- Voting will continue until 1 week has passed or all council members have voted.\n- Write -- '!howtovote' -- and check the bot rules to make sure you don't waste your vote!";

      this.HOW_TO_VOTE_TITLE = 'HOW TO VOTE!';

      this.HOW_TO_VOTE_DESCRIPTION = "How to vote with no mistakes:\n\n- If you want to vote on an anime that no one has voted yet, do it with no worries!\n- If you want to vote on an anime that's already on the list, PLEASE WRITE THE NAME EXACTLY AS IT IS ON THE LIST\nExample:\n";

      this.HOW_TO_VOTE_WRONG = 'https://i.ibb.co/XYt2m1h/Error.jpg'

      this.HOW_TO_VOTE_GOOD = 'https://i.ibb.co/j344X4Z/Nice.jpg'

    }
  
    getEmbed_Message_Title() {
        return this.VOTING_TITLE
    }

    getEmbed_Message_Description() {
        return this.VOTE_CONTEXT_DESCRIPTION
    }

    getEmbed_How_To_Vote_Title() {
        return this.HOW_TO_VOTE_TITLE
      }
  
    getEmbed_How_To_Vote_Title_Description() {
        return this.HOW_TO_VOTE_DESCRIPTION
    }

    getEmbed_How_To_Vote_Wrong() {
        return this.HOW_TO_VOTE_WRONG
      }
  
    getEmbed_How_To_Vote_Good() {
        return this.HOW_TO_VOTE_GOOD
    }
  }

module.exports = Values