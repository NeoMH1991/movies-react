import * as Sentry from '@sentry/react';

function init() {
// Sentry.init({ 
// dsn: "https://8d905753f188446eb008e4bd59b559f2@o573644.ingest.sentry.io/5724228" });
}

function log(error) {
    // Sentry.captureException(error);
}

//Interface of logging service
export default {
    init,
    log
}