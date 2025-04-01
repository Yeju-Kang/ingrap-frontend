export const isValidName = (value) => {
    const maxLength = 10;
    const regex = /^[\uAC00-\uD7A3\u3131-\u318Ea-zA-Z0-9!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?~` ]*$/;
  
    return value.length > 0 && value.length <= maxLength && regex.test(value);
  };
  