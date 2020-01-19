import React, { Component } from 'react'
import { ButtonComponent } from '../../../../CommonComponents/Button/button'
import { Popup } from '../../../../CommonComponents/Modal/Modal'
import Form from '../../Components/ModalForm/form'
import Table from '../Table/table'
import { connect } from 'react-redux'
import { fetchUserNameAction } from '../../../../actions/fetchUserNameAction'

class UserTab extends Component {
  state = {
    showPopup: false,
    name: '',
    value: null,
    count:0
  }

  showModal = () => {
    this.setState({
      showPopup: true
    })
  }

  handleCancel = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  fetchName = value => {
    this.setState({ name: value })
  }

  handelAdd = () => {
      const createName = {
        data: this.state.name,
        key: this.state.count + 1
      }
    this.props.fetchUserNameAction(createName)
    this.setState({
      showPopup: !this.state.showPopup,
      name:'',
      count:createName.key
    })
  }

  render () {
    const { showPopup } = this.state
    return (
      <div>
        <ButtonComponent title='Create Users' onClick={this.showModal} />
        <Popup
          show={showPopup}
          title='Add the User'
          add={this.handelAdd}
          cancel={this.handleCancel}
        >
          <Form fetchName={this.fetchName} />
        </Popup>
        <Table />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserNameAction: data => dispatch(fetchUserNameAction(data))
})

export default connect(null, mapDispatchToProps)(UserTab)
