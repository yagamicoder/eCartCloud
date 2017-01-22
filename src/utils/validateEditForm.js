const validate = (formData) => {
  const first = formData.get('first_name');
  const last = formData.get('last_name');
  const email = formData.get('email');

  if(!first || !last || !email) {
    return false;
  } else {
    return true;
  }
};

const validateEditForm = (formData) => {
  return validate(formData);
};

export default validateEditForm;
