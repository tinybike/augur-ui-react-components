import { assert } from 'chai';
import assertFormattedNumber from '../../test/assertions/common/formatted-number';

export default function(loginAccount) {

	if (!loginAccount.id)
		return;

	describe(`augur-ui-react-components loginAccount state`, () => {
		it('loginAccount', () => {
			assert.isDefined(loginAccount, `loginAccount isn't defined`);
			assert.isObject(loginAccount, `loginAccount isn't an object`);
		});

		it(`loginAccount.id`, () => {
			assert.isDefined(loginAccount.id, `loginAccount.id isn't defined`);
			assert.isString(loginAccount.id, `loginAccount.id isn't a string`);
		});

		it(`loginAccount.name`, () => {
			assert.isDefined(loginAccount.name, `loginAccount.name isn't defined`);
			assert.isString(loginAccount.name, `loginAccount.name isn't a string`);
		});

		it(`loginAccount.linkText`, () => {
			assert.isDefined(loginAccount.linkText, `loginAccount.linkText isn't defined`);
			assert.isString(loginAccount.linkText, `loginAccount.linkText isn't a string`);
		});

		it(`loginAccount.secureLoginID`, () => {
			assert.isDefined(loginAccount.secureLoginID, `loginAccount.secureLoginID isn't defined`);
			assert.isString(loginAccount.secureLoginID, `loginAccount.secureLoginID isn't a string`);
		});

		it(`loginAccount.prettySecureLoginID`, () => {
			assert.isDefined(loginAccount.prettySecureLoginID, `loginAccount.prettySecureLoginID isn't defined`);
			assert.isString(loginAccount.prettySecureLoginID, `loginAccount.prettySecureLoginID isn't a string`);
		});

		it(`loginAccount.prettyAddress`, () => {
			assert.isDefined(loginAccount.prettyAddress, `loginAccount.prettyAddress isn't defined`);
			assert.isString(loginAccount.prettyAddress, `loginAccount.prettyAddress isn't a string`);
		});

		it(`loginAccount.localNode`, () => {
			assert.isDefined(loginAccount.localNode, `loginAccount.localNode isn't defined`);
			assert.isBoolean(loginAccount.localNode, `loginAccount.localNode isn't a boolean`);
		});

		it(`loginAccount.editName`, () => {
			assert.isDefined(loginAccount.editName, `loginAccount.editName isn't defined`);
			assert.isFunction(loginAccount.editName, `loginAccount.editName isn't a function`);
		});

		it(`loginAccount.transferFunds`, () => {
			assert.isDefined(loginAccount.transferFunds, `loginAccount.transferFunds isn't defined`);
			assert.isFunction(loginAccount.transferFunds, `loginAccount.transferFunds isn't a function`);
		});

		it(`loginAccount.downloadAccountDataString`, () => {
			assert.isDefined(loginAccount.downloadAccountDataString, `loginAccount.downloadAccountDataString isn't defined`);
			assert.isString(loginAccount.downloadAccountDataString, `loginAccount.downloadAccountDataString isn't a string`);
		});

		it(`loginAccount.downloadAccountFileName`, () => {
			assert.isDefined(loginAccount.downloadAccountFileName, `loginAccount.downloadAccountFileName isn't defined`);
			assert.isString(loginAccount.downloadAccountFileName, `loginAccount.downloadAccountFileName isn't a string`);
		});

		it(`loginAccount.rep`, () => {
			assertFormattedNumber(loginAccount.rep, 'loginAccount.rep');
		});

		it(`loginAccount.ether`, () => {
			assertFormattedNumber(loginAccount.ether, 'loginAccount.ether');
		});

		it(`loginAccount.realEther`, () => {
			assertFormattedNumber(loginAccount.realEther, 'loginAccount.realEther');
		});
	});
}
