import React, { createContext, useState } from "react"

export const AuthContext = createContext(
	{} as {
		user: object | null
		setUser: (user: object) => void
		error: string | null
		setError: (error: string | null) => void
	}
)

const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState<object | null>(
		JSON.parse(localStorage.getItem("@user") as string) ?? null
	)
	const [error, setError] = useState<string | null>(null)

	return (
		<AuthContext.Provider value={{ user, setUser, error, setError }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
