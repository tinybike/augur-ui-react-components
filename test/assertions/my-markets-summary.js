import { assert } from 'chai';
import assertFormattedNumber from './common/formatted-number';

export default function (myMarketsSummary){
	describe(`augur-ui-react-components myMarketsSummary's shape`, () => {
		assert.isDefined(myMarketsSummary);
		assert.isObject(myMarketsSummary);

		assertMyMarketsSummary(myMarketsSummary);
	});
};

export function assertMyMarketsSummary(summary){
	describe(`summary's shape`, () => {
		assert.isDefined(summary);
		assert.isObject(summary);

		it('numMarkets', () => {
			assert.isDefined(summary.numMarkets);
			assertFormattedNumber(summary.numMarkets);
		});

		it('totalValue', () => {
			assert.isDefined(summary.totalValue);
			assertFormattedNumber(summary.totalValue);
		});
	});
};
