import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          안녕하세요! 현재 영남이공대학교 사이버보안학과에 재학중인
          양수연입니다. 제 전공은 사이버보안학과이지만, 웹 개발에 관심과 흥미가
          생겨 개발에 대해 공부한지 2년이 되었습니다. 웹 개발자 중에서도 백엔드
          API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자
          인터페이스에 대한 작업을 수행하는 프론트엔드 개발자가 되고싶습니다.
        </p>

        <br />

        <p className="text-xl">
          개발자가 되기 위해 다양하고 많은 내용들을 공부할 때 마다 어려움도
          존재하지만 흥미로운점이 더 많아 즐겁게 공부하고 있습니다. 아직 부족한
          점이 많지만 부족함을 채워나가며 하루 하루 성장할 수 있는 개발자가 될
          수 있도록 노력하겠습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
