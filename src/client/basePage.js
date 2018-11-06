import React from 'react';
import { renderToString } from 'react-dom/server';

const BasePage = ({ title }) => (
    <html>
        <head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel='stylesheet' href='/assets/index.css' />
            <script src='/assets/index.js' async></script>
            <title>{title}</title>
        </head>
        <body>
            <main id='app'></main>
        </body>
    </html>    
);

export const render = title => renderToString(<BasePage title={title} />);
