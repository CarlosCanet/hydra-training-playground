export interface LoginAttempt {
  id: string;
  timestamp: number;
  sourceIP: string;
  username: string;
  password: string;
  success: boolean;
  level: number;
  honeypotTriggered: boolean;
  userAgent: string;
  commandInjectionAttempt?: string;
  lfiAttempt?: string;
}
