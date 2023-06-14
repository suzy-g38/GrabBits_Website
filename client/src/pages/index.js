import { lazy } from 'react'

const Homepage=lazy(()=>import('./Homepage'))
const Login=lazy(()=>import('./Login/Login'))
const Signup=lazy(()=>import('./Signup/Signup'))

export {Homepage,Login,Signup}