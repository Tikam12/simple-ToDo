import React, { Component } from 'react';

class Form extends Component{
    state = {};


    render(){
        return(
            <form className='form' onSubmit={this.props.handleSubmit}>
                <label>Add Task</label><br></br>
                <input type='text' id='task' className='form-control'></input> <br></br>
                <input type='submit' className='btn btn-primary'></input>
            </form>

        );
    }
}

export default Form;