export const deletedArrayAction = value => {
    console.log(value,"val in action")
  return ({
    type: 'DELETED_ARRAY',
    value: value
  })
}