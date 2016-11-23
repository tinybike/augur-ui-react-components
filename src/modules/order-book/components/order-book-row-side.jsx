import React from 'react';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

import ValueDenomination from 'modules/common/components/value-denomination';
import NullStateMessage from 'modules/common/components/null-state-message';

import getValue from 'utils/get-value';
import setShareDenomination from 'utils/set-share-denomination';

import { BUY, SELL } from 'modules/outcomes/constants/trade-types';
import { BID, ASK } from 'modules/transactions/constants/types';

const OrderBookRowSide = (p) => {
	const orders = getValue(p, 'orders');
	const nullMessage = 'No Orders';
	const shouldHighlight = (p.type === BID && p.selectedTradeSide === SELL) || (p.type !== BID && p.selectedTradeSide === BUY);

	return (
		<article className={`order-book-row-side ${shouldHighlight ? 'order-book-row-side-trading' : ''}`}>
			{!orders || !orders.length ?
				<NullStateMessage message={nullMessage} /> :
				<div>
					{(p.orders || []).map((order, i) => {
						const shares = setShareDenomination(getValue(order, 'shares.formatted'), p.selectedShareDenomination);
						const price = getValue(order, 'price.formatted');
						const type = p.type || ASK;

						return (
							<div
								key={i}
								className={classNames('order-book-side-row not-selectable', { 'is-of-current-user': order.isOfCurrentUser })}
								data-tip
								data-for={`${type}-${i}-orders`}
								data-event="click mouseenter"
								data-event-off="click mouseleave"
							>
								<ValueDenomination formatted={p.type === BID ? shares : price} />
								<ValueDenomination formatted={p.type === BID ? price : shares} />
								{order.isOfCurrentUser &&
									<ReactTooltip
										id={`${type}-${i}-orders`}
										type="info"
										effect="solid"
										place="top"
									>
										<span className="tooltip-text">
											Your Order
										</span>
									</ReactTooltip>
								}
							</div>
						);
					})}
				</div>
			}
		</article>
	);
};

export default OrderBookRowSide;
