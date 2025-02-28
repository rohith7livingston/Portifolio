import { useEffect, useState } from "react";
import ActivityCalendar from "react-github-calendar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getUser } from "../../services/apiGithub";
import { useLoaderData } from "react-router";

// Dynamic Profile Section
function ProfileSection({ avatar, name, bio, stats, profileLink, calendar, theme }) {
  return (
    <div className="space-y-4 bg-articleBg p-4 rounded-lg shadow-lg">
      {/* Profile Info */}
      <div className="flex items-center gap-x-4">
        <img width={60} height={60} className="rounded-full" src={avatar} alt="profile" />
        <div>
          <h2 className="text-lg font-medium text-textColor">
            <a href={profileLink} target="_blank" rel="noopener noreferrer">{name}</a>
          </h2>
          <p className="text-sm text-gray-400">{bio}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-textColor">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contribution Calendar */}
      {calendar && (
        <div className="h-full w-full text-textColor">
          <ActivityCalendar username={calendar} fontSize={14} theme={theme} hideColorLegend hideMonthLabels />
        </div>
      )}
    </div>
  );
}

function Github() {
  const [user, repos] = useLoaderData();
  const [leetcodeData, setLeetcodeData] = useState(null);

  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  // Fetch LeetCode data (You can replace with static values here)
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/livingstondasi") // Replace with correct API if necessary
      .then((res) => res.json())
      .then((data) => setLeetcodeData(data))
      .catch((err) => {
        console.error("Error fetching LeetCode data: ", err);
        setLeetcodeData({
          totalSolved: "N/A",
          streak: "N/A",
          contestRating: "N/A",
        });
      });
  }, []);

  // Fallback data for GitHub if user data not found
  const fallbackUser = {
    avatar_url: "https://via.placeholder.com/150",
    login: "rohith7livingston",
    public_repos: 20,
  };

  // Static LeetCode Data
  const staticLeetcode = {
    totalSolved: "130",
    streak: "12 days",
    contestRating: "1400",
  };

  // Filter starred GitHub repositories
  const repoInfo = repos.filter((r) => r.stargazers_count > 0);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Livingston | Coding Profiles</title>
      </Helmet>
      <div className="space-y-8 bg-mainBg p-4 md:p-8">
        {/* GitHub Section */}
        <ProfileSection
          avatar={user?.avatar_url || fallbackUser.avatar_url}
          name={user?.login || fallbackUser.login}
          bio="I LOVE BUILDING SOLUTIONS."
          stats={[{ label: "Repos", value: user?.public_repos || fallbackUser.public_repos }]}
          profileLink={`https://github.com/${user?.login || fallbackUser.login}`}
          calendar="rohith7livingston"
          theme={theme}
        />

        {/* LeetCode Section */}
        <ProfileSection
          avatar="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          name="livingstondasi"
          bio="Competitive Programmer"
          stats={[
            { label: "Problems Solved", value: staticLeetcode.totalSolved },
            { label: "Streak", value: staticLeetcode.streak },
            { label: "Rating", value: staticLeetcode.contestRating },
          ]}
          profileLink="https://leetcode.com/livingstondasi/"
          calendar={null} // LeetCode API doesn’t provide calendar data
        />
      </div>
    </HelmetProvider>
  );
}

// Loader for GitHub data
export async function loader() {
  const github = await getUser();
  return github;
}

export default Github;
