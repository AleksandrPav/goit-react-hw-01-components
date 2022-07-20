import Profile from './Profile/Profile';
import userProfile from './Profile/user.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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


      
   
      
      

    </div>
  );
};
