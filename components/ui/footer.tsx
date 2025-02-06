import { APP_COPYRIGHT } from '@/lib/constants';
import React from 'react';

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <p dangerouslySetInnerHTML={{ __html: APP_COPYRIGHT }}></p>
        </footer>
    );
};
