import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchContentStart } from '../../redux/content/content.actions'
import { selectContentList } from '../../redux/content/content.selectors'

export const ListContent = ({ fetchContentStart, listContent }) => {

    return (
        <div>
            <button onClick={fetchContentStart}>Fetch Content</button> <br />
            List Content Component<br />
            {
                listContent && listContent.map((content) => {
                    return <li key={content.id}> {content.id} and {content.title} </li>
                })
            }
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    listContent: selectContentList
});

const mapDispatchToProps = dispatch => ({
    fetchContentStart: () => dispatch(fetchContentStart())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContent);

