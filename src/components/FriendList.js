import Friend from './Friend';

function FriendList({ friends, onSelectFriend, selectedFriend }) {
    return(
        <ul>
            {friends.map((friend) => <Friend friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} key={friend.id}/>)}
        </ul>
    );
}

export default FriendList;