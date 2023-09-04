import React, { memo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';
import CanBeSeen from './CanBeSeen';

export const Admin = memo(() => {
    return <CanBeSeen />;
});
