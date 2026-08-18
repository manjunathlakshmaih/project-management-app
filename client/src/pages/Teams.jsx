import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../redux/teams/TeamThunk";
import TeamStats from "../components/teams/teamStats";

const TeamMenu = () => {
  const dispatch = useDispatch();
  const { teams, count, loading, error } = useSelector(
    (state) => state.teamMember,
  );
  const statsData = teams.count;
  console.log(statsData);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  return (
    <div>
      <div>
        <TeamStats statsSummary={statsData} />
      </div>
    </div>
  );
};

export default TeamMenu;
