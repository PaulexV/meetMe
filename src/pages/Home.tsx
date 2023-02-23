import React from "react";
import app from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import{ Fragment, useContext } from 'react'
import { signOut } from 'firebase/auth'



const Home = () => {
  const navigate = useNavigate()
  const { user }  = useContext(AuthContext)

  const logout = async () => {
      await signOut(auth)
          .then(() => {
              localStorage.removeItem('@user')
              navigate('/login')
          })
  }

  return (
      <div>
          {user && (
              <Fragment>
                  <button onClick={() => logout()}>Logout</button>
              </Fragment>
          )}
      </div>
  )
}

export default Home