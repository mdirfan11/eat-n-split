import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    const id = crypto.randomUUID();

    function handelFormSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const newfriend = {
            id,
            name,
            image:`${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newfriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handelFormSubmit}>
            <label>👬 Friend Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>

            <label>🖼 Image URL</label>
            <input type="text" value={image} onChange={e => setImage(e.target.value)}/>

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;