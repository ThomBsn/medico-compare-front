'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import localFont from "next/font/local";
import Logo from "@/components/ui/logo.png";
import "./globals.css";
import 'tailwindcss/tailwind.css';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#1a202c',
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
            <Image src={Logo} alt="Logo" width={160} height={160} className="absolute"/>
          </Toolbar>
        </AppBar>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}