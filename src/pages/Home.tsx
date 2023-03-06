import React, { Fragment, useContext } from "react"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider"
import { signOut } from "firebase/auth"

const Home = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const logout = async () => {
    await signOut(auth).then(() => {
      localStorage.removeItem("@user")
      navigate("/login")
    })
  }
  return (
    <div>
      {user != null && (
        <Fragment>
          <button
            onClick={async () => {
              await logout()
            }}
          >
            Logout
          </button>
        </Fragment>
      )}
    </div>
  )
}

export default Home
