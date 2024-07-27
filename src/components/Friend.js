import Button from "./Button";

function Friend({ friend, onSelectFriend, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    function handelSelect() {
        onSelectFriend(friend);
    }
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">You owe {friend.name} {Math.abs(friend.balance)}$</p>
            )}

            {friend.balance > 0 && (
                <p className="green">{friend.name} owe you {Math.abs(friend.balance)}$</p>
            )}

            {friend.balance === 0 && (
                <p>You and {friend.name} are even</p>
            )}

            <Button onClick={handelSelect}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    );
}

export default Friend;