import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        props.onAddUser(username, age)
        setUsername('');
        setAge('');
    }

    const UsernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const AgeChangeHandler = (event) => {
        setAge(event.target.value);
    }


    return (
        <div>

            <ErrorModal title="An error occured" message="Something went wrong" />
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={UsernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={AgeChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;