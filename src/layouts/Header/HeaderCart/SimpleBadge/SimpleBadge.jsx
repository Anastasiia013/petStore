import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

import { selectTotalCartItems } from '../../../../redux/cart/cart_selectors'

import HeaderCart from '../HeaderCart';

export default function ShowZeroBadge() {
    const totalItems = useSelector(selectTotalCartItems);

    return (
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            {totalItems >= 0 ? (
                <Badge
                    color="primary"
                    badgeContent={totalItems}
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: '#0D50FF',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            lineHeight: '90%',
                            width: '26px',
                            height: '26px',
                            minWidth: '0',
                            borderRadius: '50%',
                        },
                    }}
                >
                    <HeaderCart />
                </Badge>
            ) : (
                <HeaderCart />
            )}
        </Stack>
    );
}