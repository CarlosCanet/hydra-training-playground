interface AuthResult {
  success: boolean;
  message?: string;
}

export interface LoginAttempt extends AuthResult{
  level: number;
  username: string;
  password: string;
  clientIP: string;
  isHuman: boolean;
}

const levelCreds: Record<number, { user: string; pass: string }[]> = {
  1: [{ user: 'admin', pass: 'adminadmin' }, { user: 'Davlos', pass: 'crazygirl' }],
  2: [{ user: 'admin', pass: 'amorcito' }],
  3: [{ user: 'admin', pass: 'princess' }],
  4: [{ user: 'admin', pass: 'P@55w0rd' }],
  5: [{ user: 'test', pass: 'sweetie' }],
};

export function handleLogin(level: number, username: string, password: string, isHuman: boolean): AuthResult {
  const isHoneypotEnabled = false;
  if (isHoneypotEnabled && !isHuman) {
    return { success: true, message: 'Login successfully' };
  }
  
  const creds = levelCreds[level] ?? [];
  const userIndex = creds.findIndex(c => c.user === username);
  if (userIndex >= 0) {
    if (creds[userIndex].pass === password) {
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  }

  return { success: false, message: 'User not found' };
}
