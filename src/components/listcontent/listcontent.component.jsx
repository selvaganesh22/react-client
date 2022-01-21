import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { fetchContentStartAsync } from '../../redux/content/content.actions'

export const ListContent = () => {
    const listContent = useSelector((state) => state.content.data)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(fetchContentStartAsync())}>Fetch Content</button> <br />
            List Content Component<br />
            {
                listContent && listContent.map((content) => {
                    return <li key={content.id}> {content.id} and {content.title} </li>
                })
            }
        </div>
    )
};





export default connect(
    null, null
)(ListContent);

