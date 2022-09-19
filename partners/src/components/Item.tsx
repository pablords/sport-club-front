import React from "react"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Typography } from "@mui/material";

export interface IPrtnersItemProps{
    id: string
    name: string
    birthDate: string
}

export function PrtnersItem(props: IPrtnersItemProps) {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                    <Typography>{props.name.substring(0, 1)}</Typography>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.name} secondary={props.birthDate} />
        </ListItem>
    )
}