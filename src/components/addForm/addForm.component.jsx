import React from 'react';
import axios  from 'axios';


// const style = 

class Form extends React.Component {


    constructor() {
        super();
        this.state = {
            dptName: '',
            objective: '',
            action: '',
            timeline: '',
           
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        const data = {
            description: this.state.dptName,
            actions: [
                {
                    name: this.state.action,
                    timeline: new Date(this.state.timeline)
                }
            ]
        }
        axios.post('http://127.0.0.1:4000/api/hr/dpt/', data)
        .then(res => {
            console.log(res.data)
        })
        
    }

   

    render(){
        return (
            <div className="table">
            <form onSubmit={this.handleSubmit}>
    
                <input type="text" name="dptName" placeholder="Name of Department"  onChange={this.handleChange}/>
                <input type="text" name="objective" placeholder="objective" onChange={this.handleChange} />
    
                <table >
                    <thead>
                        <tr>
                            <th>strategy action</th>
                           
                            <th>timeline</th>
                            <th>KPI</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        <tr>
                            <td><input type="text" name="action" onChange={this.handleChange} /></td>
                            <td><input type="date" name="timeline"  onChange={this.handleChange} /></td>
                            {/* <td> <input type="text" name="kpi"   onChange={this.handleChange} /></td> */}
                        </tr>
                     
    
                    </tbody>
    
    
                </table>
    
                <button type="submit">Save</button>
                
            </form>
            
        </div>
        )
        

    }

   



    
};


export default Form