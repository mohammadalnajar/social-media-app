const getFullDateAndTime = (date) => {
  const editedAt = new Date(date);
  const editedAtConverted = `${editedAt.getDate()}/${editedAt.getMonth()}/${editedAt.getFullYear()}  ${editedAt.getHours()}:${editedAt.getMinutes()}:${`${editedAt.getSeconds()}`.padStart(
    2,
    '0'
  )}`;

  return editedAtConverted;
};

export default getFullDateAndTime;
