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

                <div className="page-content">
                    <div className="l-container">
                        <div>
                            <h3>Backup account</h3>
                            <p>
                                Since Augur is a completely decentralized system (including account credentials) your
                                credentials are stored in your browser only and we <b>strongly</b> suggest you to save
                                them at secure place (such as external disk).
                            </p>
                            <p>
                                It is impossible to recover your account if your credentials get lost!
                            </p>
                            <p>
                                Following button will start downloading your credentials
                            </p>
                            <button className="button primary" onClick={ p.loginAccount.exportAccount }>
                                Download your credentials
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