import React, { Component, createContext } from 'react';

class Activeitem extends Component {
    state = {};

    render() {

        let tasks = this.props.items;

        return (

            tasks.map((item, index) => {
                if(item.status===0){
                    return <div key={index} className='mt-3'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5><input onChange={()=> this.props.handleChecks(item.id)} type='checkbox'></input> <span className='pl-3'>{item.title}</span></h5>
                                </div>
                            </div>
                        </div>
                }
            })

        );
    }
}

export default Activeitem;
