const MENT_PARTICIPANT = Object.freeze({
  MAIN: {
    ALL: '전체',
    RESERVATION_NUMBER: '예매번호',
    DATE_TIME: '일시',
    EVENT_DETAIL: '이벤트 상세보기',
    EMPTY: '사용 가능한 티켓이 없습니다.',

    WAITING: '승인 대기 중',
    QR: 'QR보기',
    DENIED: '승인 거부',
    CANCELED: '신청 취소',
    CANCEL_BTN: '예매취소',

    NOT_APPROVE: '아직 승인되지 않은 이벤트입니다.',
    ATTENDED_INFO: '이미 사용한 티켓입니다.',
    ENDED_INFO: '이미 종료된 이벤트입니다.',
    ADMISSION_INFO:
      '*입장 지연에 따른 불편을 최소화하기 위해\n이벤트 장소에 10분 전 도착해주세요.',
  },

  TICKET: {
    CANCEL: '예매를 취소하시겠습니까?',
    CANCEL_PROGRESS: '예매를 취소중입니다.',
    CANCEL_SUCCESS: '예매가 성공적으로 취소되었습니다.',
    BACK_TO_HOME: '홈으로',
  },

  SUCCESS: {
    //
  },

  ERROR: {
    //
  },

  PLACEHOLDER: {
    //
  },
});

export default MENT_PARTICIPANT;
