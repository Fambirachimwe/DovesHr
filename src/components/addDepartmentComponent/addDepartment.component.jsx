import React, {useState} from 'react';
// import CustomButton from '../CustomBtn/custombtn.component';

import AddButton from '../addBtn/addBtn.component';
import Form from '../addForm/addForm.component';



const AddDepartment = () => {

    const [state, setState] = useState({
        toogle: false
    });

    return(
        <div className="add-department">
        <h3>Add Deparment</h3>

       
        <AddButton handleClick={() => {setState({toogle: !false})}}  />

        <div className="form-container">
            {
                state.toogle === true ? ( <Form/> ) : (null)
            }
            
        </div>
        

    </div>
    )
    
};



export default AddDepartment;








