import React, { Component } from 'react'
import {CustomInput} from './style'

export default class editForm extends Component {
    state={
        email:'',
        name:''
    }
    nameChange = (e)=>{
        this.props.updatedName(e.target.value)                    
    }
   
    getValue =(data)=>{
        console.log(data,"data in editform")
        this.setState({name:data})
    }


    render() {
        const {editName} = this.props
        console.log(this.props.editName,"editName in form")
        return (
            <>
                <CustomInput  onChange={this.nameChange} defaultValue={editName}/>
                
            </>
        )
    }
}
