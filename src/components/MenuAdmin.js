import React from 'react';
import PropTypes from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends React.Component {
    static propTypes = {
        burgers: PropTypes.object,
        deleteBurger: PropTypes.func,
        updateBurger: PropTypes.func,
        loadSmapleBurgers: PropTypes.func
    }
    render(){
        return (
            <div className = 'menu-admin'>
                <h2>Managment menu</h2>
                {Object.keys(this.props.burgers).map(key =>{
                    return   <EditBurgerForm 
                    key = {key}
                    index={key}
                    deleteBurger={this.props.deleteBurger}
                    burger={this.props.burgers[key]}
                    updateBurger={this.props.updateBurger}
                    />;
                })} 
                <AddBurgerForm addBurger={this.props.AddBurger}/>
                <button onClick = {this.props.loadSmapleBurgers}>Download Burgers</button>
            </div>
            
        )

    }

}

export default MenuAdmin;   