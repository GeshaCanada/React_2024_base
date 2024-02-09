import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useinput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <section>
      <h3>Effects</h3>
      <Button style={{ marginBottom: "1rem" }} onClick={() => setModal(true)}>
        Get info
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal "smile"</h3>
        <p>
          There is a high demand for frontend developers in the industry due to
          the increasing importance of web and mobile applications. Companies of
          all sizes require websites and apps to interact with their customers,
          and frontend developers are essential for building these interfaces.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
