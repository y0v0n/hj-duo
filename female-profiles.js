// 여성 프로필 데이터
// 이 파일을 수정하여 여성 후보자 정보를 관리하세요
// 프로필을 추가하려면 아래 배열에 새로운 객체를 추가하면 됩니다

const femaleProfiles = [
    {
        id: 'f1',
        name: '여자 1호(매칭중)',
        age: '93 년생',
        job: '검안사',
        location: '광진구',
        hobby: '맛집탐방,커피마시기,영화관람,산책,게임(요즘 롤체에 빠져있음)',
        // 상세 정보
        height: '169cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '낯 가리는데 친해지면 말 많음, 집안 화목, <br>남사친 없음, 목소리에 애교 한 스푼',
        intro: '',
        // 이상형 정보
        idealAge: '89-98',
        idealSmoking: '전담까지는 가능',
        idealType: '덩치있고 대화가 잘 통하는 다정한 사람<br>같이 있으면 마음이 편한 사람',
        contact: '주선자: 혜정'
    },
    {
        id: 'f2',
        name: '여자 2호',
        age: '92 년생',
        job: 'IT',
        location: '노원구',
        hobby: '필라테스',
        // 상세 정보
        height: '165cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '여성스러운 외모 털털한 성격',
        intro: '',
        // 이상형 정보
        idealAge: '',
        idealSmoking: '비흡연',
        idealType: '',
        contact: '주선자: 송이'
    },
			{
        id: 'f3',
        name: '여자 3호',
        age: '95 년생',
        job: '사업(경영)관리',
        location: '광진구',
        hobby: '새로운 취미는 골프',
        // 상세 정보
        height: '168cm',
        religion: '천주교',
        smoking: '비흡연',
        personality: 'ESFP, 활발한 성격, 뭐든지 해보는걸 좋아함(여행 포함)<br>집안화목 (형제: 오빠1명) 부모님 노후 안정적인 편',
        intro: '',
        // 이상형 정보
        idealAge: '97-92',
        idealSmoking: '비흡연',
        idealType: '자상하고 섬세한 사람, 똑똑하지만 허세 없는 사람 :)',
        contact: '주선자: 현서'
    },
			{
        id: 'f4',
        name: '여자 4호',
        age: '92 년생',
        job: '대기업 엔지니어',
        location: '관악구',
        hobby: '산책',
        // 상세 정보
        height: '165cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '밝은 성격. 약속이 많지 않은 집순이, 동성 친구들하고 집에서 노는 것을 선호함.<br>대학교 졸업 후 성실하게(^^) 회사를 다녔으며, 현재는 학술파견으로 공대 대학원 과정 중.<br>(p.s. 느린 92년생이라 93년생이나 진배없음)',
        intro: '',
        // 이상형 정보
        idealAge: '88-96',
        idealSmoking: '비흡연',
        idealType: '대화가 잘 통하고 내가 보기에 잘생긴 사람',
        contact: '주선자: 은정'
    },
			{
        id: 'f5',
        name: '여자 5호',
        age: '95 년생',
        job: '교사',
        location: '경기 고양',
        hobby: '운동(이것저것 도전하는것 좋아함)',
        // 상세 정보
        height: '168cm',
        religion: '무교',
        smoking: 'x',
        personality: '활발한 성격 enfp<br>발레6개월차 여행다니는것, 활동적인것 좋아함, 통통튀는 매력이 귀여움 처음보는 사람도 편하게 만들어주는 성격',
        intro: '',
        // 이상형 정보
        idealAge: '97-92',
        idealSmoking: '비흡연',
        idealType: '다정 다감한 성격, 성실하고 묵묵히 자기할일 하는 사람 키큰사람(174이상)',
        contact: '주선자: 현서'
    },
			{
        id: 'f6',
        name: '여자 6호',
        age: '99 년생',
        job: '대학병원 상근직 간호사 (정규직)',
        location: '성북구',
        hobby: '뜨개질을 2년째 해오고 있고 운동 유목민으로 현재 발레 3개월&스쿼시 9개월을 하고 있어요',
        // 상세 정보
        height: '155cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '밝고 긍정적인 성격이에요 K 장녀이지만 애교가 아주아주 많은 편!! 주선자가 보장하는 애교쟁이입니다.  <br>ESFJ이지만 소문자 e 여서 집에서 쉬는 쿨링타임이 필요해요.. <br>하지만 활동적인걸 좋아해서 산책, 여행등등 밖에나가는걸 좋아하는 편입니다',
        intro: '',
        // 이상형 정보
        idealAge: '94-99',
        idealSmoking: '비흡연',
        idealType: '추구하는 이상형은 제가 편안하고 친구같은 연애를 추구하는 편이여서 같은 의견을 가지신 분이면 좋을것 같아요<br> 외적으론 두부상에 키크신분을 선호하는 편이며<br> 성격은 대화가 잘 통하고 다정하신 분이였으면 좋겠습니다 :)',
        contact: '주선자: 현서'
    },
			{
        id: 'f7',
        name: '여자 7호',
        age: '91 년생',
        job: '캐릭터 IP 사업부 상품기획 MD',
        location: '동작구',
        hobby: '러닝(풀마라톤), 보드게임, 장난감 콜렉팅',
        // 상세 정보
        height: '163cm',
        religion: '무교',
        smoking: '비흡연',
        personality: '"동안이라는 소리 자주 듣고, 외적&내적으로 감다뒤 되지 않도록 노력하는 편<br>캐주얼을 선호하지만, 페미닌한 스타일도 가끔 입는 편<br>낯 안 가리고 활동적이지만, 집에서 뒹굴거리는 것만 진짜 쉬는 것이다 파<br>E 52% I 48%의 ENTJ<br>영화/예능 콘텐츠는 추리, 범죄, 스릴러 등을 좋아합니다."',
        intro: '',
        // 이상형 정보
        idealAge: '92~99',
        idealSmoking: '상관X',
        idealType: '"낭만진창스럽게 사는 분(거지여도 OK), 주기적으로 운동하시는 분, 자기 고집이 있지만 타협하고 양보할 줄 아는 분<br>(비혼은 아니지만 결혼에 조금 회의적인 편이라 연애 희망하시는 분)"',
        contact: '주선자: 혜정'
    }
];

