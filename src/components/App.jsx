import Profile from './Profile/Profile';
import userProfile from './Profile/user.json';
import statistics from './Statistics/data.json';
import StatisticsList from './Statistics/StatisticsList';
import StatisticsSection from './Statistics/StatisticsSection';

export const App = () => {
  
  return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      useravatar={userProfile.avatar}
        username={userProfile.username}
        usertag={userProfile.tag}
        userlocation={userProfile.location}
        userStats={userProfile.stats}
      />
      <StatisticsSection title="Upload stats">
        <StatisticsList  stats={statistics} />
      </StatisticsSection>
      


      
   
      
      

    </div>
    
  );
  
  
};
