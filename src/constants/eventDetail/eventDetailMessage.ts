const MENT_EVENT_DETAIL = Object.freeze({
  DATE_FORMAT: {
    DATE_SELECT: 'YYYY.MM.DD (ddd) HH시 mm분',
  },
  COMMENT: {
    COMMENT_SUCCESS: '댓글을 등록했습니다!',
    COMMENT_REPORT: '댓글을 신고했습니다!',
    COMMENT_INPUT: '댓글을 남겨보세요.',
    CHILD_COMMENT_INPUT: '대댓글을 남겨보세요.',
    SUBMIT: '등록',
    EMPTY_COMMENT: '문의사항이나 댓글을 남겨주세요!',
    POSTING_REPLY: '답글달기',
    /**
     * @param childCount 자식 댓글수
     * @returns 답글 childCount개 더보기
     */
    READ_MORE_REPLIES: (childCount: number) => `- 답글 ${childCount}개 더 보기`,
  },
  MAIN: {
    ADDRESS: '장소',
    LOCATION: '위치보기',
    COST: '비용',
    APPLICATION_DATE: '신청 기간',
    ADMISSION_FEES: '입장료',
    WON: '원',
    PERSONNEL: '인원',
    INTRODUCTION_EVENT: '이벤트 소개',
    DATE: '일시',
    COMMENTS: '문의/댓글',
    SELECT_DATE: '일정을 선택하세요.',
    APPLY_PARTICIPATION: '참여 신청하기',
    NEXT: '다음',
    APPLICATION: '신청하기',
    USER_INFO: '신청자 정보',
    NAME: '이름',
    BIRTH: '생일',
    GENDER: '성별',
    ADDITIONAL_INFORMATION: '추가 정보 입력',
    PERSONAL_INFORMATION: '개인정보 수집 및 이용',
    SUBMIT: '등록',
    HOST: '주최자',
    REPLY: '답글달기',
    REPORT: '신고',
    BE_OPENED: '곧 오픈될 예정입니다.',
    APPLICATION_CLOSES: '신청이 마감된 이벤트입니다.',
    ALREADY_APPLICATION: '이미 신청한 이벤트입니다.',
    ENDED_EVENT: '종료된 이벤트입니다.',
    CLOSED_EVENT: '신청 기간이 아닙니다.',
    INSTRUCTIONS: '유의사항',
    APPLICATION_LOADING: '이벤트 신청중입니다!',
  },
  SUCCESS: {
    APPLICATION: '이벤트 신청이 완료되었습니다!',
    APPLICATION_DETAIL:
      '주최자 승인 이후 QR 티켓이 생성될 예정이며, 티켓은 내가 참여하는 이벤트에서 확인 가능합니다.',
    TO_HOME: '홈으로',
  },
  ERROR: {
    ADDITIONAL_INFORMATION: '추가 정보를 입력해주세요.',
    APPLICATION: '이벤트 신청에 실패했습니다.',
    EMPTY_EVENT: '찾으시는 이벤트 정보가 없습니다.',
    EMPTY_COMMENT: '찾으시는 댓글이 존재하지 않습니다.',
  },
  PLACEHOLDER: {
    COMMENT: '댓글을 남겨보세요.',
    CHILD_COMMENT: '대댓글을 입력하세요.',
  },
});

export default MENT_EVENT_DETAIL;
