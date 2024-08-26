export const nicknameFromEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return '';

  const [nickname] = email.split('@');
  return nickname;
};
