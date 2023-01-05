import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeBlogs from "./pages/HomeBlogs";
import './scss/app.scss';
import HomePosts from "./pages/HomePosts";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";


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
                        <Route path={'blog/:blogId'} element={<BlogPage/>}/>
                        <Route path={'post/:postId'} element={<PostPage/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
