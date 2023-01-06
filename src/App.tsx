import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeBlogs from "./pages/blog/HomeBlogs";
import './scss/app.scss';
import HomePosts from "./pages/post/HomePosts";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import BlogPage from "./pages/blog/BlogPage";
import PostPage from "./pages/post/PostPage";
import NewBlog from "./pages/blog/New-blog";


function App() {
    return (
        <div className={'App'}>
            <Header/>
            <div className={"content"}>
                <Navigation/>
                <div className={'main'}>
                    <Routes>
                        <Route path={'/'} element={<HomeBlogs/>}/>
                        <Route path={'/blogs'} element={<HomeBlogs/>}/>
                        <Route path={'/posts'} element={<HomePosts/>}/>
                        <Route path={'/blogs/newBlog'} element={<NewBlog/>}/>
                        <Route path={'blog/:blogId'} element={<BlogPage/>}/>
                        <Route path={'post/:postId'} element={<PostPage/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
