import React, { useState } from "react";
import App from '../App';
import Color from './Color';
import Buttons from './Buttons';
import '../css/header.css';

function Header() {

    const [comp, goLink] = useState(App);

    return (
        <>
            <header>
                <ul>
                    {/*<li>HTML(이미지) CSS JS </li>
                    홈페이지
                        테마

                    랜딩

                    테마

                    components
                        - 배너
                        - 카드
                        - 팝업
                        - 헤더

                    element
                        - 폼 form, filedset, legend,
                            - input
                            - select
                            - label
                            - textarea
                            - button
                        - 테이블
                            - table , caption, colgroup, coll, thead, tfoot, th, tbody,

                        - 버튼
*/}
                    <li>Layout
                        <ul>
                            <li>Break Points</li>{/* 320 480 576 768 1024 1280 1336 1440 1660 */}
                            <li>container</li>{/* .row-w */}
                        </ul>
                    </li>
                    <li>Template
                        <ul>
                            <li onClick={ () => goLink(Color) }>Color</li>
                            <li>Image</li>
                            <li>Icon</li>
                        </ul>
                    </li>
                    <li>Components
                        <ul>
                            <li onClick={ () => goLink(Buttons) }>Buttons</li>
                            <li>Card</li>
                            <li>comment</li>
                        </ul>
                    </li>
                </ul>
            </header>

            {/* router */}
            <div id="content" className="ml-300" children={comp} />
        </>
    )
}

export default Header;
