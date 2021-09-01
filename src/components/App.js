import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleburgers from '../sample-burgers';
import base from '../base';
import PropTypes from 'prop-types';

class App extends React.Component {

	static propTypes = {
		match: PropTypes.object
	};

	state = {
		burgers: {},
		order: {},
	};

	componentDidMount() {
		const {params} = this.props.match;

		const localStorageRef = localStorage.getItem(params.restaurantID);
		if (localStorageRef) {
			this.setState({order: JSON.parse(localStorageRef)});
		}
		
		
		this.ref = base.syncState(`${params.restaurantID}/burgers`, {
			context: this,
			state: 'burgers'
		});
	}

	componentDidUpdate() {
	const {params} = this.props.match;
     
	 localStorage.setItem(params.restaurantID, JSON.stringify(this.state.order));
	}

	componentWillUnmount (){
		base.removeBinding(this.ref);
	}

	addBurger = (burger) => {
		console.log('add burger', burger);
		//1.делаем копию объекта state
		const burgers = { ...this.state.burgers };
		//2.добавляем новый бургер в переменную burgers
		burgers[`burger${Date.now()}`] = burger;
		//3.записатьобновленный burgers в state
		this.setState({ burgers });
	        };
	updateBurger = (key, updateBurger) =>{
		//1.делаем копию объекта state
		const burgers = { ...this.state.burgers };
		//2 обновляем нужный бургер
		burgers[key] = updateBurger;
		//3.записатьобновленный burgers в state
		this.setState({burgers});
	};		
    
	deleteBurger = key => {
		//1.делаем копию объекта state
		const burgers = { ...this.state.burgers };
		//2 удаляем нужный бургер
		burgers[key] = null;
		//3.записатьобновленный burgers в state
		this.setState({burgers});

	}

	deleteFromOrder = (key) => {
		//1.делаем копию объекта state
		const order = { ...this.state.order };
		//2 удаляем нужный бургер из заказа
		delete order[key];
		//3.записатьобновленный burgers в state
		this.setState({order});


	}

	loadSmapleBurgers = () => {
		this.setState({ burgers: sampleburgers });
	};

    addToOrder = key => {
        //1.делаем копию объекта state
		const order = { ...this.state.order };
		//2.добавляем новый бургер в переменную burgers
		order[key] = order[key] + 1 || 1;
		//3.записатьобновленный order в state
		this.setState({ order });
    };

	render() {
		return (
			<div className='burger-paradise'>
				<div className='menu'>
					<Header title='Very Hot Burger' amount={10} hot={true} />
					<ul className='burgers'>
						{Object.keys(this.state.burgers).map(key => {
							return(
                             <Burger
                             key = {key}
                             index = {key} 
                             addToOrder = {this.addToOrder}
                             details = {this.state.burgers[key]}
                              />
                            );
						})}
					</ul>
				</div>
				<Order
				 burgers = {this.state.burgers} 
				 order = {this.state.order}
				 deleteFromOrder = {this.deleteFromOrder}
				 />
				<MenuAdmin
					addBurger={this.addBurger}
					loadSmapleBurgers={this.loadSmapleBurgers}
			        burgers={this.state.burgers}
					updateBurger={this.updateBurger}
					deleteBurger ={this.deleteBurger}
			/>
			</div>
		);
	}
}

export default App;
