'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'tailwindcss/tailwind.css';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#1a202c', // Tailwind's gray-900
  },
  title: {
    flexGrow: 1,
  },
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = useStyles();

  return (
    <html lang="en">
            <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My App
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}