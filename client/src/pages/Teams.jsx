import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../redux/teams/TeamThunk";
import TeamStats from "../components/teams/teamStats";
import TeamMemberCard from "../components/teams/teamMemberCard";

const TeamMenu = () => {
  const dispatch = useDispatch();
  const { teams, count, loading, error } = useSelector(
    (state) => state.teamMember,
  );

  const statsData = count;
  const teamMemberData = teams;
  console.log("teamMemberData:", teamMemberData);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col">
        <TeamStats statsSummary={statsData} />
        <TeamMemberCard teamData={teamMemberData} />
      </div>
    </div>
  );
};

export default TeamMenu;
