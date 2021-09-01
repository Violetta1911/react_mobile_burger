///import { directive } from '@babel/types';
import React, { useState } from 'react';
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';

const Landing = (props) => {
//	state = {
//	display: false,
//	title: '',
//	url: '',};
    const[display, toggleDisplay] = useState(false);
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');


	const displayList = () => {
	     toggleDisplay(!display);
	};

	const getTitle = (restaurant) => {
		const { title, url } = restaurant;
		
		setTitle(title);
		setUrl(url);
		toggleDisplay(false);
	};

    const goToRestaurant = () => {
        console.log('goto restaurant!')
		props.history.push(`/restaurant/${url}`);
    };

	return (
		<div className='restaurant_select'>
			<div className='restaurant_select_top'>
				<div
					onClick={displayList}
					className='restaurant_select_top-header font-effect-outline'>
					{title ? title : 'Choose restaurant'}
				</div>

				<div className='arrow_picker'>
					<div className='arrow_picker-up'></div>
					<div className='arrow_picker-down'></div>
				</div>
			</div>

			{display ? (
				<div className='restaurant_select_bottom'>
					<ul>
						{restaurants.map((restaurant) => {
							return (
								<li
									onClick={() => getTitle(restaurant)}
									key={restaurant.id}>
									{restaurant.title}
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
			{title && !display ? (
				<button onClick={goToRestaurant}>Go to restaurant</button>
			) : null}
		</div>
	);
};

Landing.propTypes = {
	history: PropTypes.object
};

export default Landing;
