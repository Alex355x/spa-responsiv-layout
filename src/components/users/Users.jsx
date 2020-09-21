import React from "react";
import "./users.scss";
import { fetchUsersList, fetchPositionsList } from '../Gateway';
import User from "./User";
import Registration from "../registration/Registration";

class Users extends React.Component {
  state = {
    users: [],
    itemsPerPage: 3,
    itemsPerPage2: 6,
    buttonToShow: true,
    positions: [],
  }
  
  fetchUsers = () => {
    fetchUsersList().then(usersList => 
        this.setState({
         users: usersList.sort((a, b) => (b.registration_timestamp -a.registration_timestamp)),
        }),
    );
  };
  
  fetchPositions = () => {
      fetchPositionsList().then(positionsList => 
        this.setState({
        positions: positionsList.positions
      }),
      );
    };

  componentDidMount() {
    this.fetchUsers();
    this.fetchPositions();
  }
  
  handleClick = () => {
    this.state.users.length > 3 
    &&  this.state.users.length > this.state.users.length + 3
    ? this.setState({
      itemsPerPage: this.state.itemsPerPage + 3
    })
    : this.setState({
      itemsPerPage: this.state.itemsPerPage + (this.state.users.length - this.state.itemsPerPage),
      buttonToShow: false, 
    })
  }

  render () {
    const { users } = this.state;
    const button =  <button onClick={this.handleClick} className='users__btn'>Show more</button>;
    const endIndex = 0 + this.state.itemsPerPage;
    const usersToShow = users.slice(0, endIndex);
    const endIndex2 = 0 + this.state.itemsPerPage2;
    const usersToShow2 = users.slice(0, endIndex2);
   
    const result = usersToShow.map(user => 
              <div key={user.id} className='users__data_360-item'>
                <User 
                  photo={user.photo}
                  name={user.name}
                  position={user.position}
                  email={user.email}
                  phone={user.phone}
                />
              </div>)

    const result2 = usersToShow2.map(user => 
      <div key={user.id} className='users__data_768-item'>
        <User 
          photo={user.photo}
          name={user.name}
          position={user.position}
          email={user.email}
          phone={user.phone}
        />
      </div>)
             
    return (
      <>
        <section className='users'>
          <h1 className='users__title'>Our cheerful users</h1>
          <p className='users__attention'>Attention! Sorting users by registration date</p>
          <div className='users__data_360'>
            {result}
            {this.state.buttonToShow && button}
          </div>
          <div className='users__data_container'>
            <div className='users__data_768'>
              {result2}
            </div>
              {this.state.buttonToShow && button}
          </div>
        </section>
        <Registration 
          fetchUsers={this.fetchUsers}
          positions={this.state.positions}  
        />
      </>
   )
  }
}

export default Users;