import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {useState} from "react";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function SignUpForm() {


    const [signUpForm , setSignUpForm] = useState({})

    const [isPasswordVisible , setPasswordVisibleStatus] = useState(false)

    const onChangeSignUpForm=(event)=>{
        let oldSignUpForm = {...signUpForm}
        oldSignUpForm[event.target.name]=event.target.value

        setSignUpForm(oldSignUpForm)
    }

    return (
        <div className="mt-5" style={{ display : "flex" , justifyContent : "center"}}>
            <Card style={{width : "fit-content"}} sx={{ minWidth: 275 }}>
                <CardContent style={{display : "flex" , flexDirection : "column"}}>

                    <TextField onChange={onChangeSignUpForm} name="first-name" defaultValue={"John"}  className="mt-2" label="First Name" variant="outlined" />
                    <TextField onChange={onChangeSignUpForm} name="last-name"  className="mt-2"  label="Last Name" variant="outlined" />
                    <TextField  onChange={onChangeSignUpForm} name="email" type="email" className="mt-2"  label="Email" variant="outlined" />

                    {/*<TextField  onChange={onChangeSignUpForm} name="password" type="password" className="mt-2"  label="Password" variant="outlined" />*/}
                    <FormControl className="mt-2"  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            name={"password"}
                            onChange={onChangeSignUpForm}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(event)=>{ setPasswordVisibleStatus(!isPasswordVisible)}}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        { isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </CardContent>
                <CardActions style={{display : "flex" , justifyContent : "end"}}>
                    <Button className="me-2" style={{backgroundColor : "purple"}} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
}
