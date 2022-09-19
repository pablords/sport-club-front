import React, { useState } from "react"
import { Alert, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"



export interface ILoginProps {
    setToken: (token: string) => void
    isAuthenticated: () => Boolean
    getToken: () => string
    logout: () => void
}

export function Login(props: ILoginProps) {

    const navigation = useNavigate()

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSignin = () => {
        const token = "af449452-bb38-4ebb-a12f-d6eaaf5ca43c"
        if(username ==="user" && password ==="123"){
            props.setToken(token)
            setError(false)
            navigation({ pathname: "/partners" })
            return 
        }
        props.logout()
        setError(true)

    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 20, marginTop: 200 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 20, minWidth: 250 }}>

                <TextField
                    fullWidth
                    label="User Name"
                    variant="outlined"
                    value={username}
                    onChange={(e) => {
                        setError(false)
                        setUserName(e.target.value)
                    }
                    }
                />
                <TextField fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                        setError(false)
                        setPassword(e.target.value)
                    }
                    }
                />

                <Button onClick={handleSignin} variant="contained">Entrar</Button>
                {
                    error &&
                    <Alert severity="error">{"Usuario ou Senha invalidos"}</Alert>
                }

            </div>
        </div>
    )

}