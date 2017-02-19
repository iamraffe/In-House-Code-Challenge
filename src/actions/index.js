let nextContactId = 0
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

export const saveLastId = () => ({
  type: 'INCREMENT_ID',
});
