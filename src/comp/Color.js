import React from 'react';
import '../css/color.css';

import clMain from '../images/cl-main.jpg';
import clSub from '../images/cl-sub.jpg';



function Color () {
    return (
        <>
            <h1>Color</h1>
            <p>홈페이지 테마 색상을 scss 변수를 사용하여 _color.scss 를 사용합니다.</p>
            <br />

            <ul>
                <li>아틀란티카 ID</li>
            </ul>

            <div id="blacksquad" className="swatch-wrap">
                <div className="main-swatch clearfix">
                    <h3 className="fw-700"> 메인 컬러 </h3>
                    <p> 메인 컬러는 홈페이지 메인 사이트에서 포인트가 되는 테마 색상입니다.</p>
                    <ul>
                        <li>- GNB hover&on / Game Start / download / more 버튼 등에 사용됩니다.</li>
                        <li>- 메인 컬러의 variation은 최대 4가지로 제한합니다.</li>
                        <li>- 2가지 이상 색상이 추가될 수 없습니다.  (11 - o, 12 - o, 13 - x)</li>
                    </ul>
                    <div className="col-1 wrap-box">
                        <h4 className="fw-700">CODE</h4>
                        <div className="col-3 dsp-ib">
                            <div className="main-10">$cl_main_10 : #448cef;</div>
                            <div className="main-20">$cl_main_20 : #3b7fde;</div>
                            <div className="main-30">$cl_main_30 : #326dbf;</div>
                            <div className="cl-null">$cl_main_40 : null</div>
                        </div>
                    </div>
                    <div className="col-1 dsp-ib wrap-box">
                        <h4 className="fw-700">EXAMPLE</h4>
                        <div>
                            <img src={clMain} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="sub-swatch">
                    <h3 className="fw-700"> 서브 컬러 </h3>
                    <p> 서브 컬러는 홈페이지 서브 사이트에서 가장 포인트가 되는 색상입니다.
                        <ul>
                            <li>- 서브 타이틀, 박스의 굵은 선, 버튼 버튼 등에 사용됩니다.</li>
                            <li>- 서브 컬러의 variation은 최대 4가지로 제한합니다.</li>
                        </ul>
                    </p>
                    <div className="col-1  wrap-box">
                        <div className="col-3 dsp-ib">
                            <div className="sub-10">$cl_sub_10 : #3a7b95;</div>
                            <div className="sub-20">$cl_sub_20 : #285668;</div>
                            <div className="sub-30">$cl_sub_30 : #293d45;</div>
                            <div className="cl-null">$cl_sub_40 : null</div>
                        </div>
                    </div>
                    <div className="col-1 dsp-ib wrap-box">
                        <h4 className="fw-700">EXAMPLE</h4>
                        <div>
                            <img src="require('../images/cl-sub.jpg')}" alt=""/>
                        </div>
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

