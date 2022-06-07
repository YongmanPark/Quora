import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className='post'>
            <div className='post_info'>
                <Avatar/>
                <h5>유저아이디</h5>
                <small>작성시간</small>
            </div>

            <div className='post_body'>
                <div className='post_question'>
                    <p>질문내용 입니다</p>

                    <button className='post_butnAnswer'>답변하기</button>
                </div>
            </div>

            <div className='post_answer'>
                <p>답변입니다.</p>
            </div>
            <img
                    src="https://image.chosun.com/sitedata/image/202007/13/2020071300343_0.jpg"
                    alt=""/>

            <div className='post_footer'>
                <div className='post_footerAction'>
                    <ArrowUpwardOutlined/>
                    <ArrowDownwardOutlined/>
                </div>
                    <RepeatOneOutlined/>
                    <ChatBubbleOutline/>
                <div className='post_footerRight'>
                    <ShareOutlined/>
                    <MoreHorizOutlined/>
                </div>
            </div>

        </div>
    );
}

export default Post;