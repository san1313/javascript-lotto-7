const LOTTERY = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  WINNING_NUMBER_SIZE: 6,
  WINNING_NUMBER_SPLITTER: ',',
});

const IO_MESSAGE = Object.freeze({
  INPUT_USER_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY_STRING: '[ERROR] 입력이 비었습니다.',
  NOT_A_NUMBER: '[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.',
  CAN_NOT_DIVIDE_BY_PRICE: `[ERROR] ${LOTTERY.PRICE}의 배수로 입력해 주십시오.`,
  NOT_POSITIVE_INTEGER: '[ERROR] 양의 정수로 입력해주십시오.',
  NOT_ALLOWED_WINNING_NUMBER: '[ERROR] 당첨 번호는 숫자와 쉼표만 입력 가능합니다.',
  NOT_ALLOWED_LOTTERY_NUMBER_RANGE: `[ERROR] 번호가 범위를 벗어났습니다. (${LOTTERY.MIN_NUMBER} ~ ${LOTTERY.MAX_NUMBER})`,
  INVALID_WINNING_NUMBER_SIZE: `[ERROR] 당첨 번호는 중복이 아닌 ${LOTTERY.WINNING_NUMBER_SIZE}개여야 합니다.`,
  DUPLICATED_BONUS_NUMBER: '[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.',
});

export { LOTTERY, IO_MESSAGE, ERROR_MESSAGE };