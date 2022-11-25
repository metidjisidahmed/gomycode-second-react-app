import axios from "axios";
import {useEffect, useState} from "react";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import React from "react"

const PostList =(props)=>{
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {props.lastPosts.map(post=>{
                return(
                    <>
                        <PostItem postDetails={post}/>
                        <Divider variant="inset" component="li" />
                    </>
                )
            })}

        </List>
    );
}


const PostItem=(props)=>{
    return(
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar>{props.postDetails.userId}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.postDetails.title}
                secondary={
                    <React.Fragment>
                        {props.postDetails.body}
                    </React.Fragment>
                }
            />
        </ListItem>

    )
}

export default function LastPosts(){

    const [posts , setPosts]= useState([])

    useEffect(()=>{
        console.log("Last Posts is mounted on ", Date())
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( (response) =>{
                console.log(`RESPONSE gathered on ${Date()} ,  response =` , response.data)
                setPosts(response.data)
            } )
            .catch(err=>{
                console.log("ERROR = ", err)
            })

    }, [])

    return(
        <>
            <div>Test</div>
            <div style={{display: "flex" , justifyContent : "center" }}>
                <PostList lastPosts={posts}/>

            </div>

        </>


    )
}
