package app.boardgames.bgdashboard.domain.badges;

public class VotedMVPBadge implements Badge {

    @Override
    public String getBadgeName() {
        return BadgeNames.VOTED_MVP.toString();
    }
}
