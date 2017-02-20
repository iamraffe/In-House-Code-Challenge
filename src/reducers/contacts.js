const contact = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        id: action.id,
        name: action.name,
        phone: action.phone,
        email: action.email,
        favorite: false,
      };

    case 'EDIT_CONTACT':
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign({}, state, {
          name: action.name,
          phone: action.phone,
          email: action.email,
          favorite: action.favorite
        });

    case 'TOGGLE_FAVORITE':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        favorite: !state.favorite
      });

    default:
      return state;
  }
};

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        contact(undefined, action)
      ];
    case 'EDIT_CONTACT':
      return state.map(t =>
        contact(t, action)
    );
    case 'TOGGLE_FAVORITE':
      return state.map(t =>
        contact(t, action)
      );

    default:
      return state;
  }
};

export default contacts;
