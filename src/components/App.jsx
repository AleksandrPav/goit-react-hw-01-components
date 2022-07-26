import Profile from './Profile/Profile';
import userProfile from './Profile/user.json';
import statistics from './Statistics/data.json';
import StatisticsList from './Statistics/StatisticsList';
import StatisticsSection from './Statistics/StatisticsSection';
import FriendsList from './FriendList/FriendsList';
import friends from './FriendList/friend.json';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  
  return (
    
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      
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

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
      
        
    </div>
    
  );
  
  
};
