import React from 'react';
import classnames from 'classnames';

import MarketsHeader from './markets-header';
import Filters from './filters';
import MarketItem from './market-item';
import Input from '../../common/components/input';


module.exports = React.createClass({
    propTypes: {
        className: React.PropTypes.string,

		markets: React.PropTypes.array,
		keywords: React.PropTypes.string,
		filtersProps: React.PropTypes.object,
		marketsHeader: React.PropTypes.object,

		onChangeKeywords: React.PropTypes.func
    },

    render: function() {
        var p = this.props;
        return (
            <section className={ p.className }>
                <div className="search-sort-bar">
                    <Input className="search-bar" value={ p.keywords } placeholder="Search" onChange={ p.onChangeKeywords } />
                    <select className="sort-control" />
                </div>

                <MarketsHeader { ...p.marketsHeader } />

                <Filters { ...p.filtersProps } />

                <div className="markets-list">
                    { (p.markets || []).slice(0, 50).map(market =>
                        <MarketItem
                            key={ market.id }
                            { ...market } />
                    )}
                </div>
            </section>
        );
    }
});