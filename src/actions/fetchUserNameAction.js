export const fetchUserNameAction = value => {
    console.log(value,"val in action")
  return ({
    type: 'FETCH_NAME',
    value: value
  })
}
