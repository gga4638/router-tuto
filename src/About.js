import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보느 ㄴ예제 프로젝트</p>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="about">About</Link>
            </nav>
        </div>
    );
};

export default About;