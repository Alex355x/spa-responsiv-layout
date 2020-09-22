//const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const baseUrl = 'https://5eecba9c4cbc34001633096c.mockapi.io/api/v1/form';

const baseUrl2 = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
// const baseUrl3 = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const fetchUsersList = () => {
return fetch(baseUrl)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(usersList => 
      usersList
      //usersList.users
  );
};


export const fetchPositionsList = () => {
  return fetch(baseUrl2)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(positionsList => 
        positionsList
    );
  };

export const createUser = async usersData => {
  // let token; 
  // await fetch(baseUrl3)
  // .then(res => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  // })
  // .then(response => 
  //   token = response.token
  // );

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      //'token': token,
      'Content-Type': 'application/json',
    },
    // body: formData,
    body: JSON.stringify(usersData),
})
  .then(function(response) { 
      return response.json(); 
    }) 
  .then(function(data) { 
      console.log(data); 
      if(data.success) {
        return data;
        } else {
          throw new Error('Failed to create user'); 
          } 
        })
    .catch(function(e) {
      console.log(e);
    });
  }