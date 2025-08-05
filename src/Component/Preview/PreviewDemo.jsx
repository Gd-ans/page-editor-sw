import React from 'react';
import Preview from './Preview.jsx';
import { useSelector } from 'react-redux';

export default function PreviewDemo() {
    const pageBuilder = useSelector((state) => state.pageBuilder);

    return (
        <Preview data={pageBuilder} />
    );
} 