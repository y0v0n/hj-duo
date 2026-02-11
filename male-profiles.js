// 남성 프로필 데이터
// 이 파일을 수정하여 남성 후보자 정보를 관리하세요
// 프로필을 추가하려면 아래 배열에 새로운 객체를 추가하면 됩니다

const maleProfiles = [
    {
        id: 'm1',
        name: '남자 1호 (매칭 중)',
        age: '91 년생',
        job: '사업<br>(기술영업 매니저로 가업승계 중,임대사업 및 태양광 발전업 병행)',
        location: '안양',
        hobby: '요리, 운동, 여행, 드라이브, 느좋맛집탐방,게임',
        // 상세 정보
        height: '171cm',
        religion: '무교',
        smoking: '금연3년차',
        personality: '종합 소득 9천이상 피부좋고 편안한 인상/목소리 좋고 노래잘함/ 재미있고 다정한 성격/확신의 ENFP',
        intro: '',
        // 이상형 정보
        idealAge: '90~96',
        idealSmoking: '상관없음',
        idealType: '티키타카+리액션 잘 해주는 사람/ 아담하고 마른체형/ 웃상/ 여러가지 체험 해보는걸 좋아하는 사람(여행, 체험활동)',
        contact: '주선자: 혜정'
    },
    {
        id: 'm2',
        name: '남자 2호',
        age: '95 년생',
        job: '게임사 사업 PM',
        location: '종로',
        hobby: '헬스, 팝업, 전시회, 이쁜 카페 가기, 사진찍기',
        // 상세 정보
        height: '172cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '스몰토크 머신, 말 재미있게 잘 하는 편<br>ESTJ/FJ 반반 게임업계에서 일하다보니 게임, 엔터테인먼트, 콘텐츠 좋아함',
        intro: '',
        // 이상형 정보
        idealAge: '94-99',
        idealSmoking: '전담까지 가능',
        idealType: '귀여운 상 선호, 취미나 관심사가 맞는 사람',
        contact: '주선자: 혜정'
    },
			{
        id: 'm3',
        name: '남자 3호',
        age: '86 년생',
        job: '그룹계열 IT회사 전략기획직 수석',
        location: '방배동',
        hobby: '맛집 탐방(자극적 음식), 국내외 여행, 스릴러 등 도파민 위주 콘텐츠 시청, 사진찍어주고 찍힘 당하기',
        // 상세 정보
        height: '172cm',
        religion: '내 자신을 믿음',
        smoking: '입에 댄 적도 없음',
        personality: '주선자가 보증해주는 동안, 밝은 피부, 마르지도 뚱뚱하지도 않은 체격, 편안한 목소리<br>외향적, 즉흥적, 기본예의/배려 중시<br>고려대학교 경영학 전공<br>고물가 시대를 견뎌낼 수 있는 연봉, 소소한 보금자리 하나 정돈 마련할 정도 시드 축적',
        intro: '',
        // 이상형 정보
        idealAge: '연하',
        idealSmoking: '비흡연',
        idealType: '머리가 작고 비율 좋은, 여성스런 옷차림',
        contact: '주선자: 형기'
    },
			{
        id: 'm4',
        name: '남자 4호',
        age: '94 년생',
        job: '제약회사 근무',
        location: '양평 거주 / 이천 근무',
        hobby: '러닝, 헬스, 유도, 홈카페, 카페 탐방, 반려견과 드라이브',
        // 상세 정보
        height: '173cm',
        religion: '무교',
        smoking: 'X',
        personality: 'ESTJ 입니다 but 퇴근하면 F<br>무던하고 다정한 성격으로 긍정적인 편<br>퇴근 후 거의 운동으로 마무리 하는 루틴으로 뭐 하고 있을지 예측 가능한 일상<br>하지만 일상이 다이나믹한 썰 제조기로 같이 다니면 생각못한 경험들 많이 할지도요?',
        intro: '',
        // 이상형 정보
        idealAge: '93~99',
        idealSmoking: '전담까지 가능',
        idealType: '아담하고 티키타카 잘 되는 긍정적인 사람',
        contact: '주선자: 혜정'
    },
			{
        id: 'm5',
        name: '남자 5호',
        age: '92 년생',
        job: '경찰',
        location: '수원',
        hobby: '요리(같이 해서 같이 먹기), 레고, 드라마·영화 보기, 달리기, 카페·맛집 다니기, 게임(롤)',
        // 상세 정보
        height: '171cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '외모: 인생 사는 데 지장 없음<br>성격: 조용하고 차분한 편인데, 친해지면 재밌다고 하네요 <br>MBTI: ISTJ (요즘 F 능력 증가함)<br>장점: 안정적, 감정 기복 x, 불안하게 하지 않음 등등등<br>연애 스타일: 편하게 일상 공유하면서 소소하게 데이트하는 걸 좋아해요',
        intro: '',
        // 이상형 정보
        idealAge: '91-97',
        idealSmoking: '비흡연',
        idealType: '대화나 취미가 잘 통하고, 부정적이지 않고 저보다 조금 더 활발한 분',
        contact: '주선자: 용석'
    },
			{
        id: 'm6',
        name: '남자 6호',
        age: '95 년생',
        job: '나노물질 연구원',
        location: '수원 망포',
        hobby: '요리 및 여행, 카페',
        // 상세 정보
        height: '171cm',
        religion: '불교',
        smoking: '비흡연',
        personality: 'MBTI: ENFJ지만, 소문자e라서 완전 외향적인 느낌은 X<br>외모: 전형적인 두부상 느낌, 최근에 유행하는 흑백요리사에 안성재 셰프 닮았다는 소리도 들어봤습니다~<br>성격: 긍정적, 다정함, 예의가 바른<br>장점: 연락 잘함, 공감능력, 욕설X<br>친한 지인들은 오래보면 귀엽다고 말해주는데 저는 물음표!',
        intro: '',
        // 이상형 정보
        idealAge: '90-99',
        idealSmoking: '상관없음',
        idealType: '적극적인 사람, 성격 잘 맞는 사람, 안경 잘 어울리는 여자',
        contact: '주선자: 은정'
    },
			{
        id: 'm7',
        name: '남자 7호',
        age: '96 년생',
        job: '개발자',
        location: '관악구',
        hobby: '맛집탐방, 드라이브, 뮤지컬, 보드게임등등 다양한걸 좋아해요',
        // 상세 정보
        height: '176cm',
        religion: 'X',
        smoking: 'X',
        personality: 'Mbti : esfp / isfp<br>성격 : 조용한 분위기를 선호하지만 시끌벅적한 곳에서도 즐길수있음<br>장점 : 잘웃고 잘받아주는 공감괴물, 새로운것에 도전하는걸 좋아함',
        intro: '',
        // 이상형 정보
        idealAge: '92년생아래로',
        idealSmoking: '무관',
        idealType: '친구처럼 편한 사람, 애교많은사람',
        contact: '주선자: 혜정'
    }
];
