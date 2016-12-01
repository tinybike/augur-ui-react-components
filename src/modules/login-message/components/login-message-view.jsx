import React, { PropTypes } from 'react';
import Link from 'modules/link/components/link';

const LoginMessagePage = p => (
	<section id="login_message_view" >
		<div className="page-content">
			<h1>{`Welcome to the Augur beta test!`}</h1>
			<p>{`This is a beta test in advance of Augur's live release. There are bugs. There are features being
				added, improved, and re-designed. There are a few hundred enhancements scheduled to be added in the next few
				months. Your thoughtful feedback now is essential. Please use the feedback button at the bottom left of
				every page to submit your feedback, or feel free to send an email to `}
				<a
					className="link"
					href="mailto:hugs@augur.net?subject=Beta Testing feedback"
				>
					{'hugs@augur.net'}
				</a>
				{`. From your submissions, the development team will coordinate fixes and new features. Changes and fixes will be
				displayed when you log in again.`}
			</p>
			<h2>Important information:</h2>
			<ol>
				<li>
					Because Augur is a <b>completely decentralized</b> system, if you lose your login credentials it
					is impossible to recover them. Please <a className="link" href="http://blog.augur.net/faq/how-do-i-savebackup-my-wallet/" target="_blank" rel="noopener noreferrer">take
					appropriate measures</a> to protect the safety of your password, and create a way to
					recover your credentials if you forget them.
				</li>
				<li>
					Do not send real Ether (ETH) to your Augur account while we are testing! Each account will be given
					10,000 testnet ETH tokens for beta testing. Please note that testnet ETH has no value except for testing:
					it is merely an on-contract IOU (a token) for testnet Ether.
				</li>
				<li>
					{`Reputation (REP) is a unique and important part of the Augur trading platform. If you own REP tokens, you must visit
					the site periodically to fulfill your reporting obligations. During beta testing, each new account will
					receive 47 testnet REP (they have no value except for testing). Each reporting cycle will last 2 days. Every
					two-day cycle will consist of a commit phase, a reveal phase, and a challenge phase. Because the test
					cycle is dramatically compressed (the main net cycle will be 60 days long) it is recommended that
					users visit the site at least every 2 days to maintain your REP and simulate “real money” trading,
					resolution, and reporting conditions. Learn `}
					<a
						className="link"
						href="https://www.youtube.com/watch?v=sCms-snzHk4"
						target="_blank"
						rel="noopener noreferrer"
					>
						{`how Augur's Reputation tokens work`}
					</a>.
				</li>
				<li>
					{`A note on price/time priority on the blockchain.  The site is only as fast as Ethereum blocks are mined.  Augur's matching engine sorts order books by price, then by block number, then by transaction index. Within a single block, transactions are ordered by the miner who mines the block.  When constructing a block, miners typically order transactions first by gasprice (highest to lowest), and then by the order received (oldest to newest).  So, Augur's "price/blocknumber/transaction index priority" ordering is generally equivalent to price/time priority, if there are differing gasprices within the block, the transaction index is not guaranteed to be time-ordered.  (Presently, Augur does not attempt to adjust gasprices in response to other pending transactions, although, if desired, gasprice can be adjusted manually using the API, by changing the "gasPrice" field attached to every sendTransaction payload.)`}
				</li>
			</ol>
			<h2>Technical updates:</h2>
			<h3>November 30, 2016</h3>
			<ol>
				<li>
					Added more thorough unit tests for the trading UI.
				</li>
				<li>
					Uploaded Augur contracts to the new Ethereum public test network (&quot;Ropsten&quot;).  Also moved the Augur faucet and public geth node (eth3.augur.net) to Ropsten.  app.augur.net and augur-dev.firebaseapp.com are now configured to use the new Ropsten contracts.  local.augur.net will also use Ropsten if you are not running a local Ethereum node.  For users that prefer to remain on our private chain (network 9000), we are planning to maintain private.augur.net for the remainder of the beta test.  Users of private.augur.net should be aware that the network 9000 blockchain is reset on a semi-regular basis, often without any public announcement/warning, and when this happens, all your private chain Ether, Reputation, and trading shares are also reset.
				</li>
				<li>
					Fixed market description display and links back to the trade page on the transactions page.
				</li>
				<li>
					Fixed bug causing cancel order transactions to appear twice in the transactions display.
				</li>
				<li>
					Significantly extended timeout in augur.js requests module to avoid ETIMEDOUT errors when attempting to request ETH from the faucet.  The timeout is now set to a large value (999999) which should not be reached unless the user is experiencing a connection problem.
				</li>
				<li>
					Significantly extended nginx timeouts for eth1.augur.net.  It turns out that the CORS errors occasionally generated by the faucet are not true CORS errors; it is actually an nginx timeout which is (mis-)identified as a CORS error.  The timeout is now set to a large value (999999) which should not be reached unless the user is experiencing a connection problem.
				</li>
				<li>
					Fixed starting report period assigned by reputation faucet.
				</li>
			</ol>
			{p.marketsLink &&
				<Link className="lets-do-this-button" {...p.marketsLink} >{`Let's do this!`}</Link>
			}
		</div>
	</section>
);

LoginMessagePage.propTypes = {
	marketsLink: PropTypes.object // TODO
};

export default LoginMessagePage;
