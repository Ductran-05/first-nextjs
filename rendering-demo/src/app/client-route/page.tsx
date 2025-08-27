"use client";
import { useTheme } from '@/component/theme-provider';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoute() {
    const theme = useTheme();
    const settings = {
        dots: true,
    };
    return (
        <h1 style={{ color: theme.colors.secondary }}>
            Client Route
        </h1>
    );

}