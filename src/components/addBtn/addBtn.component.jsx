import React from 'react';
import './addBtn.styles.scss';



// const toogleForm = () => {

// }


const AddButton = ({handleClick}) => {
    // const [state, setState] = useState({
    //     toogle: false
    // });

    

    return (
        <div className="add-btn">
            <button onClick={ handleClick  }> <i className="material-icons">add</i></button>
        </div>
    )


};




export default AddButton;


