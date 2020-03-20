import React from 'react';
import './homepage.Componentstyles.scss';
import axios from 'axios';

import CardContainer from '../cardContainer/cardContainer.component'




class CardRow extends React.Component {

    constructor(){
        super();
        this.state = {
            deparments: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:4000/api/hr/dpt/')
        .then(res => {
            console.log(res.data.response)
            this.setState({
                deparments: res.data.response 
            })
        });
    }


    render() {
        return (
            <div>

                <h3>Departments</h3>
                <div className="row">
                    {/* <CardContainer /> */}
                    
                    {
                        this.state.deparments.map(dpt => (
                            <CardContainer key={dpt._id} name={dpt.description} />
                        ))
                    }

                </div>
            </div>
        )
    }

}





export default CardRow;

