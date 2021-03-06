import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) =>  (
		<header className='top'>
			<div className='wrap'>
				<div className='header-content'>
					<div className='header-rating'>
						<div className='header-rating_tag'>Rate</div>
						<div className='header-rating_icn'>✭✭✭✭✭</div>
					</div>

					<div className='header-divider'></div>
					<h1 className='font-effect-fire-animation'>{title}</h1>
					<h3>
						<span>
							Fast delivery hot
							<span className='sub-header'>#burgers</span>
						</span>
					</h3>
				</div>
			</div>
		</header>
	); 
Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
