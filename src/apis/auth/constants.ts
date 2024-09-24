export const LOGIN_ERROR_MESSAGE: Record<string, string> = {
  invalid_request: '올바른 이메일 주소를 입력해 주세요.', // 회원가입, 로그인 시 이메일 주소 포맷 유효성 검사 실패
  already_exist_email: '이미 등록된 이메일입니다.', // 회원가입, 이메일 인증 시 이메일 기존재
  invalid_password: '비밀번호를 다시 확인해 주세요.', // 회원가입, 로그인 시 패스워드 포맷 유효성 검사 실패
  incorrect_password: '비밀번호를 다시 확인해 주세요.', // 회원가입
  incorrect_credentials: '이메일 또는 비밀번호를 다시 확인해 주세요.', // 로그인 시 이메일이 존재하지 않거나 패스워드가 다른 경우
};
