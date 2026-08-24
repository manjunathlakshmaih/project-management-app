import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../redux/teams/TeamThunk";
import TeamStats from "../components/teams/teamStats";
import TeamMemberCard from "../components/teams/teamMemberCard";
import SearchTeamMember from "../components/teams/searchTeamMember";

const TeamMenu = () => {
  const dispatch = useDispatch();
  const { teams, count, loading, error } = useSelector(
    (state) => state.teamMember,
  );
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    status: "",
    sortBy: "name-asc",
  });

  const statsData = count;
  const teamMemberData = teams;

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredTeamMembers = useMemo(() => {
    const searchTerm = filters.search ? filters.search.trim().toLowerCase() : "";

    const members = Array.isArray(teamMemberData) ? teamMemberData : [];

    const filtered = members.filter((member) => {
      const matchesSearch =
        !searchTerm ||
        [member.fullName, member.email, member.role, member.designation, member.status]
          .filter(Boolean)
          .some((field) => field.toString().toLowerCase().includes(searchTerm));

      const matchesRole = !filters.role || filters.role === "" || member.role === filters.role;
      const matchesStatus = !filters.status || filters.status === "" || member.status === filters.status;

      return matchesSearch && matchesRole && matchesStatus;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (filters.sortBy === "name-desc") return b.fullName.localeCompare(a.fullName);
      if (filters.sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (filters.sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      return a.fullName.localeCompare(b.fullName);
    });

    return sorted;
  }, [teamMemberData, filters]);

  useEffect(() => {
    console.log("filters:", filters);
    console.log("teams from store:", teamMemberData);
  }, [filters]);

  return (
    <div>
      <div className="flex flex-col">
        <TeamStats statsSummary={statsData} />
        <SearchTeamMember
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        {loading && <p className="text-slate-400">Loading team members...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}
        {!loading && !error && filteredTeamMembers.length === 0 && (
          <p className="text-slate-400">No team members found.</p>
        )}
        {!loading && !error && filteredTeamMembers.length > 0 && (
          <TeamMemberCard teamData={filteredTeamMembers} />
        )}
      </div>
    </div>
  );
};

export default TeamMenu;
