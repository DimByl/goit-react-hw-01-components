import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Container from "./components/Container/Container";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./components/friendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import styles from "./App.scss";

const App = () => (
  <>
    <Container>
      <div className={styles.App}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </Container>
  </>
);

export default App;
