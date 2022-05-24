import React, { useState, useRef } from 'react';
import Modal from './Modal';
import './Modal.css';
import './ModalForm.css';

function ModalForm(props) {
  const ClubData = [
    {
      id: 1,
      tags: ['모집중', '중동', '예술', '봉사'],
      img: '/clubImg.png',
      title: 'Club Name1',
      description: '동아리 설명1',
      description_detail: '동아리 설명1',
    },
    {
      id: 2,
      tags: ['모집중', '학술', '어학'],
      img: '/clubImg.png',
      title: 'Club Name2',
      description: '동아리 설명2',
      description_detail: '동아리 설명2',
    },
    {
      id: 3,
      tags: ['모집마감', '학과', '체육'],
      img: '/clubImg.png',
      title: 'Club Name3',
      description: '동아리 설명3',
      description_detail: '동아리 설명3',
    },
  ];
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  // const outSection = useRef(); // 영역 밖 클릭 제어

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='App'>
      {/*
      <React.Fragment>
        <button onClick={openModal}>Club Button</button>
        <Modal open={modalOpen} close={closeModal} header='CLUB NAME'>
          
          <span className='blog-page__filter__item'>#모집중</span>
          <span className='blog-page__filter__item'>#중동</span>
          <span className='blog-page__filter__item'>#예술</span>
          <span className='blog-page__filter__item'>#봉사</span>

          <div className='Club-Main'>
            <div className='Club-Img'>
              <img src='/clubImg.png' className='Club-logo' alt='logo' />
            </div>
            <div className='Club-script'>
              설명_______________<br></br>
              ·소개<br></br>
              <br></br>
              ·활동내용<br></br>
              <br></br>
              ·지원방법<br></br>
              <br></br>
              ·조건<br></br>
              <br></br>
            </div>
          </div>
          <div className='Club-script-detail'>
            로직 자체는 생각보다 단순합니다. 리액트의 컴포넌트와, props, state를
            이용하면 되는 간단한 문제였는데... 약~간 헤맸던 이유는 저는 여러가지
            요소를 map으로 나열했는데, 모달 열고 닫기 state가 하나로
            통일되어있기 때문에, 클릭했을 때 전부 열려버리거나 전부 닫혀버리는
            상황이 펼쳐졌기 때문입니다.
          </div>
        </Modal>
      </React.Fragment>
        
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
      {/* 
      <button onClick={openModal}>Club Button</button>*/}
      <a onClick={openModal}>Modal</a>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={ClubData[props.ClubId].title}
      >
        {/* 태그*/}
        <span className='club-page__filter__item'>
          #{ClubData[props.ClubId].tags[0]}
        </span>
        <span className='club-page__filter__item'>
          #{ClubData[props.ClubId].tags[2]}
        </span>
        <span className='club-page__filter__item'>#중동</span>
        <span className='club-page__filter__item'>#예술</span>
        <div className='Club-Main'>
          <div className='Club-Img'>
            <img
              src={ClubData[props.ClubId].img}
              className='Club-logo'
              alt='logo'
            />
          </div>
          <div className='Club-script'>
            <div className='FontHeader'>
              {ClubData[props.ClubId].description}
            </div>

            <div className='Font'>ㆍ소개</div>
            <div className='ClubInform'>
              보드게임을 좋아하고 즐길 사람 모여라~!
            </div>
            <div className='Font'>ㆍ활동내용</div>
            <div className='ClubInform'>
              각 요일끼리 팀을 맺어 팀 대항전을 진행합니다.
            </div>
            <div className='Font'>ㆍ지원방법</div>
            <div className='ClubInform'>
              <a href='/'>신청링크</a>
            </div>
            <div className='Font'>ㆍ조건</div>
            <div className='ClubInform'>
              보드게임에 관심이 많은 순천향대학교 재학생
            </div>
          </div>
        </div>
        <div className='Club-script-detail'>
          <div>+Add Club Inform.</div>
          <div>
            3월 에타에 올라왔던 보드게임 동아리 모집 공고 기억 하시나요? 그
            이후에도 정말 많은 분들이 "추가모집 안하나요?" 라는 문의를 정말 많이
            주셨습니다!! 그래서 동아리 내에 더 활기차고 즐거운 분위기와 다양한
            사람과 즐기며 게임하자는 동아리의 취지에 맞게 추가모집을 하기로
            결정했습니다! 선착순이 아니므로 편안하게 신청해주셔도 됩니다!!
            신청하신 폼을 참고하여 동아리 내부사항과 맞는 분을 신규 멤버로
            선발할 예정입니다!
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalForm;
