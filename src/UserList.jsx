import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

const UserName = styled.span`
  font-weight: bold;
  color: #712e1e;
`;

const UserEmail = styled.span`
  font-size: 14px;
  color: #666;
`;

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <Wrapper>
      <Title>User List</Title>
      <List>
        {listOfUser.map((user) => (
          <ListItem key={user.id}>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default UserList;
