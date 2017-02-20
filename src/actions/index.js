let nextContactId=0;
if (typeof(localStorage.reduxState) !== 'undefined'){
  let contacts = JSON.parse(localStorage.reduxState).contacts;
  if (contacts.length > 0) {
    nextContactId = contacts.pop().id + 1;
  }
}

export const addContact = (name, phone, email ) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    name,
    phone,
    email
  };
};


export const editContact = (id, name, phone, email, favorite) => ({
  type: 'EDIT_CONTACT',
  id,
  name,
  phone,
  email,
  favorite
});

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
});
