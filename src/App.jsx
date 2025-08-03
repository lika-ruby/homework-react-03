import "./App.css";
import user from "./data/user.json";
import { Profile } from "./components/Profile/Profile";
import data from "./data/data.json";
import { Statistics } from "./components/Statistics/Statistics";
import friendsList from "./data/friends.json";
import { FriendList } from "./components/FriendList/FriendList";
import transactions from "./data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList stats={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
