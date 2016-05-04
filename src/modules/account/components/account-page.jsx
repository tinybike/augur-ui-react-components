import React from 'react';

import Link from '../../link/components/link';

import SiteHeader from '../../site/components/site-header';
import SiteFooter from '../../site/components/site-footer';

module.exports = React.createClass({
    propTypes: {
    },

    render: function() {
        var p = this.props;
        return (
            <main className="page account">
                <SiteHeader { ...p.siteHeader } />

                <header className="page-header">
                    <div className="l-container">
                        <span className="big-line">Augur is a completely decentralized system</span> including user accounts.
                        Your credentials never leave the browser, and you are responsible for keeping them safe.
                        <br />
                        <b><i className="negative">It is impossible to recover your account if your credentials get lost!</i></b>
                    </div>
                </header>
                <div className="page-content">
                    <div className="l-container">
                        <div>
                            <h3>Export account</h3>
                            <p>
                                Following button will export your account to JSON file, save it.
                            </p>
                            <button className="button primary" onClick={ p.loginAccount.exportAccount }>
                                Export your account
                            </button>
                        </div>

                        <div>
                            <h3>Sign Out</h3>
                            <Link className="button primary" { ...p.authLink }>
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>

                <SiteFooter />
            </main>
        );
    }
});