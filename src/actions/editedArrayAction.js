export const editedArrayAction = value => {
    console.log(value,"val in action")
  return ({
    type: 'EDITED_ARRAY',
    value: value
  })
}