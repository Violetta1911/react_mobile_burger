import { object } from 'prop-types';
import React from 'react';
import Shipment from './Shipment';

class Order extends React.Component {
	renderOrder = (key) => {
		const burger = this.props.burgers[key];
		const count = this.props.order[key];

		const isAvailable = burger && burger.status === 'available';
		if (!isAvailable) {
			return (
				<li key={key}>
					{' '}
					Sorry, burger {burger ? burger.name : 'burger'} is unavailable
				</li>
			);
		}
		return (
			<li key={key}>
				<span>
					<span>{count}</span>
					pc. {burger.name}
					<span> {count * burger.price} ₽</span>
					<button
						className='cancelItem'
						onClick={() => this.props.deleteFromOrder(key)}>
						&times;
					</button>
				</span>
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const burger = this.props.burgers[key];
			const count = this.props.order[key];

			const isAvailable = burger && burger.status === 'available';

			if (!burger) return null;

			if (isAvailable) {
				return prevTotal + burger.price * count;
			}
			return prevTotal;
		}, 0);

		return (
			<div className='order-wrap'>
				<h2>Your order</h2>
				<ul className='order'>{orderIds.map(this.renderOrder)}</ul>
				{total > 0 ? (
					<Shipment total={total} />
				) : (
					<div className='nothingSelected'>Please choose and add to order</div>
				)}
			</div>
		);
	}
}

export default Order;
