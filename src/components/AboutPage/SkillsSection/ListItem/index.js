import React from 'react'
import { ListItemLine } from '../../../../style/shared'

const ProfileListItem = ({ name, url }) =>
    <ListItemLine>
        {url
            ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
            : name}
    </ListItemLine>

export default ProfileListItem
