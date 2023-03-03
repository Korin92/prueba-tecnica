import Head from 'next/head'
import React from 'react'
import { Login } from '../../features/login/Login'

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>Driverevel - Login</title>
				<meta name="description" content="driverevel kata" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Login />
		</>
	)
}
