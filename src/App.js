import React, { Component } from 'react';
import Form from './form';
import Activeitem from './activeitem';
import Completeitem from './completeditem';

class App extends Component{
    state = {
        tasks:[]
    };

    handleCross = (e,id)=> {
        let allTasks = this.state.tasks;

        allTasks.forEach(function(eachTask,index){
            if(eachTask.id===id){
                allTasks.splice(index,1);
            }
        })

        this.setState({tasks:allTasks});
        e.preventDefault();
    }

    handleChecks = (id) =>{
        let allTasks = this.state.tasks;

        allTasks.forEach(function(eachTask,index){
            if(eachTask.id===id){
                eachTask.status=1;
            }
        })

        this.setState({tasks:allTasks});
    }

    handleSubmit = (e) => {
        let title = document.querySelector('#task').value;
        document.querySelector('#task').value = '';

        let allTasks = this.state.tasks;
        allTasks.push({id:Date.now(),title:title,status:0});
        this.setState({tasks:allTasks});

        console.log(this.state.tasks);
        e.preventDefault();
    }


    render(){
        return(
            <div>
                <nav className='navbar bg-primary'>
                    <h4 className='navbar-brand text-white'>Todo App</h4>
                </nav>

                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <Form handleSubmit = {this.handleSubmit}/>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-6'>
                            <h3>Active Task</h3>
                            <Activeitem items={this.state.tasks} handleChecks = {this.handleChecks}/>
                        </div>

                        <div className='col-6'>
                            <h3>Complete Task</h3>
                            <Completeitem items={this.state.tasks} handleCross={this.handleCross}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default App;