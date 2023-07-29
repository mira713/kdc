import React, { useEffect, useState } from 'react'
import Search from './search'
import { useSelector, useDispatch } from 'react-redux';
import { updateAuth, AllUser } from '../redux/auth/auth.action';
import { getAllPost } from '../redux/post/post.action';
import { AiTwotoneLike, AiTwotoneDislike,AiFillWechat } from "react-icons/ai"

const AllPosts = () => {
    let data = useSelector(store => store.AuthReducer.data);
    let dispatch = useDispatch()
    let count = useSelector(store=>store.PostReducer.allCount)
    let posts = useSelector(store => store.PostReducer.allData);
    let [page, setPage] = useState(1);

    let totalPage = Math.ceil(count/10)
    
    let updateFolower = (item) => {
        console.log(item.follow)
        dispatch(updateAuth(item))
    }
    useEffect(() => {
        dispatch(getAllPost(page))
        dispatch(AllUser())
    },[page])
   
    let updateLikes = (num) => {

    }
    return (
        <div>
            <Search /><hr />
            <div>
                {data[0] ? <div className="dash">
                    {data?.map((el) => {
                        return (
                            <div key={el._id} className="usersDetail">
                                <p>name : {el.name}</p>
                                <p>email : {el.email}</p>
                                <p>followers : {el.follow}</p>
                                <button onClick={() => updateFolower(el)}>follow</button>
                                <br />
                            </div>
                        )
                    })}
                </div>
                    : ""}
            </div>
            <hr />
            <div>
                {posts[0] ? <div className="dash">
                    {posts?.map((el, i) => {
                        return (
                            <div className="postsCard" key={i}>
                                {data[0] ? <div>
                                    {data?.map((e, k) => {
                                        if (e._id === el.user) {
                                            return <h5 key={k}>{e.username}</h5>
                                        }
                                    })}
                                </div> : ""}
                                <p>{el.title}</p>
                                <p>{el.msg}</p>
                                <div className="chat">
                                    <div>
                                    <AiFillWechat size={30}/>
                                    </div>
                                    {/* <div>
                                     <p>Start Chat</p>
                                     </div> */}
                                </div>
                                <div className="editDelete">
                                    <button onClick={() => updateLikes(1)}>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <AiTwotoneLike />
                                            {el.likes}
                                        </div>
                                    </button>
                                    <button onClick={() => updateLikes(-1)}><div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <AiTwotoneDislike />
                                        {el.dislikes}
                                    </div></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    : <img src="https://fptraffic.com/wp-content/uploads/2020/04/Create-Post-Schedule.png" alt="data not exist" style={{ width: "80%" }} />}
            </div>
            <div className="pagination" style={{ display: "flex", width: "12%", margin: 'auto', gap: "10px" }}>
                <button disabled={page<=1?true:false} onClick={()=>setPage(page-1)}>prev</button>
                <button>{page}</button>
                <button disabled={page>=totalPage?true:false} onClick={()=>setPage(page+1)}>next</button>
            </div>
        </div>
    )
}

export default AllPosts