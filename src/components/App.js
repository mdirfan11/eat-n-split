import FriendList from "./FriendList";
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import Button from "./Button";
import { useState } from "react";

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const[showAddFriend, setShowAddFriend] = useState(false);
  const[selectedFriend, setSelectedFriend] = useState(null);

  function handelShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handelAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handelSelectFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend(current => current?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend => friend.id === selectedFriend.id 
        ? {...friend, balance: friend.balance + value} : friend
        ) 
      );

      setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelectFriend={handelSelectFriend}/>
        {showAddFriend && <FormAddFriend onAddFriend={handelAddFriend}/>}
        <Button onClick={handelShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}


export default App;

