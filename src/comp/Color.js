import React from 'react';
import '../css/color.css';



function Color () {
    return (
        <>
            <h1>Color</h1>
            <p>홈페이지 테마 색상을 scss 변수를 사용하여 _color.scss 를 사용합니다.</p>
            <br />

            <ul>
                <li>블랙스쿼드</li>
            </ul>

            <div id="blacksquad" className="swatch-wrap">
                <div className="main-swatch">
                    <h3 className="fw-700"> 메인 컬러 </h3>
                    <p> 메인 컬러는 홈페이지 메인 사이트에서 포인트가 되는 테마 색상입니다.
                        <br/>GNB hover&on / Game Start / download / more 버튼 등에 사용됩니다.
                        <br/>메인 컬러의 variation은 최대 4가지로 제한합니다.
                        <br/> 2가지 이상 색상이 추가될 수 없습니다.  (11 - o, 12 - o, 13 - x)
                    </p>

                    <div className="col-3 dsp-ib">
                        <div className="swatch main-900">$cl_main #a93939</div>
                        <div className="main-300">$cl_main_10</div>
                        <div className="main-400">$cl_main_20</div>
                        <div className="main-700">$cl_main_30</div>
                        <div className="main-900">$cl_main_40</div>
                    </div>
                </div>
                <div className="sub-swatch">
                    <h3 className="fw-700"> 서브 컬러 </h3>
                    <p> 서브 컬러는 홈페이지 서브 사이트에서 가장 포인트가 되는 색상입니다.
                        <br/>서브 타이틀, 박스의 굵은 선, 버튼 버튼 등에 사용됩니다.
                        <br/>서브 컬러의 variation은 최대 4가지로 제한합니다. </p>
                    <div className="col-3 dsp-ib">
                        <div className="swatch sub-300">$cl_sub #dd9e74</div>
                        <div className="sub-300">$cl_sub_10</div>
                        <div className="sub-400">$cl_sub_20</div>
                        <div className="sub-700">$cl_sub_30</div>
                        <div className="sub-900">$cl_sub_40</div>
                    </div>
                </div>
                <div className="grey-swatch">
                    <h3 className="fw-700"> 회색 컬러 </h3>
                    <p> 회색 컬러는 흰색과 검은색을 제외한 모든 회색을 칭합니다.
                        <br/>텍스트, 보더, 구분선, 배경, 아이콘 색에 주로 사용됩니다.
                        <br/>회색 컬러의 variation은 최대 7가지로 제한합니다.
                    </p>
                    <div className="col-3 dsp-ib">
                        <div className="swatch grey-600">$cl_sub #464646</div>
                        <div className="grey-100">$cl_grey_100</div>
                        <div className="grey-200">$cl_grey_200</div>
                        <div className="grey-300">$cl_grey_300</div>
                        <div className="grey-400">$cl_grey_400</div>
                        <div className="grey-500">$cl_grey_500</div>
                        <div className="grey-600">$cl_grey_600</div>
                        <div className="grey-700">$cl_grey_700</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Color;

