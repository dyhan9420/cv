import React, { useState } from 'react';
import '../css/buttons.css';


function Color () {
    let codes_mainButtons = "<a class='btn btn-starter'>GAME START</a>" +
        "\n <a class='btn btn-main'><img src=\"https://file.valofe.com/Valofe_file/web/nage/images/main/icon_gamestart.png\" alt=\"game start\" />GAME START</a> " +
        "\n <a class='btn btn-main'><img src=\"https://file.valofe.com/Valofe_file/web/nage/images/main/icon_download.png\" alt=\"download\"/>DOWNLOAD</a>"



    return (
        <>
            <h1>Buttons</h1>
            <p>홈페이지 테마 색상을 변수 (_color.scss) 로 일괄 변경합니다.</p>
            <br />

            <ul>
                <li>블랙스쿼드</li>
            </ul>

            <div id="blacksquad" className="swatch-wrap">
                <div className="main-buttons">
                    <h3 className="fw-700"> 메인 버튼 </h3>
                    <p className="vd-desc">메인 컬러를 바탕으로 만들어진 버튼입니다.
                        <br/> GNB Game Start / 메인 중앙 Game Start , Download 버튼이 해당 됩니다.
                        <br/> 블랙스쿼드의 경우 메인컬러값과 동일하지 않지만 동일하게 될 수 있도록 디자인 요청드립니다.
                    </p>
                    <a className="bls-btn btn-starter">GAME START</a>
                    <a className="bls-btn btn-main">
                        <img src="https://file.valofe.com/Valofe_file/web/nage/images/main/icon_gamestart.png" alt="" /> GAME START
                    </a>
                    <a className="btn btn-main">
                        <img src="https://file.valofe.com/Valofe_file/web/nage/images/main/icon_download.png" alt=""/> DOWNLOAD
                    </a>

                    <code className="code-box">
                        {codes_mainButtons.split('\n').map(line => {
                            return (<span>{line}<br/></span>)
                        }) }
                    </code>

                </div>

                <div className="board-buttons">
                    <h3 className="fw-700"> 서브 버튼 </h3>
                    <a href="써도되네" className="bls-btn btn-prev btn-black">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                        <span>이전글</span>
                    </a>
                    <a className="bls-btn btn-list btn-gold"> 목록</a>
                    <a className="bls-btn btn-write btn-red">글쓰기</a>
                    <a className="bls-btn btn-send-cmt btn-big btn-gold">등록</a>


                    <a className="bls-btn btn-write btn-mb">
                        글쓰기<img src="https://file.valofe.com/Valofe_file/web/blacksquad/images/sub/community/icon-pen.png" alt="글쓰기 아이콘"/>
                    </a>
                    <a className="bls-btn btn-copy btn-mb">
                        URL 복사 <img src="https://file.valofe.com/Valofe_file/web/blacksquad/images/sub/community/icon-copy.png" alt="복사 아이콘" />
                    </a>
                    <a className="bls-btn btn-edit btn-mb">
                        수정 <img src="https://file.valofe.com/Valofe_file/web/blacksquad/images/sub/community/icon-modify.png" alt="수정 아이콘"/>
                    </a>
                    <a className="bls-btn btn-remove btn-mb">
                        삭제 <img src="https://file.valofe.com/Valofe_file/web/blacksquad/images/sub/community/icon-eraser.png" alt="삭제 아이콘"/>
                    </a>

                </div>

                <div className="etc-buttons">
                    <h3 className="fw-700"> 기타 버튼 </h3>
                    <a href="javascript:void();" className="btn-more btn-red">
                        LOAD MORE <span className="plus">+</span>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Color;

