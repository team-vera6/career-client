export const nicknameFromEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern) return '';

  const [nickname] = email.split('@');
  return nickname;
};
