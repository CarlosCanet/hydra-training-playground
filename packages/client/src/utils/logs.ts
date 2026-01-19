import type { LoginAttempt } from "../types";

const STORAGE_KEY = "htp_attempts";

function readAttempts(): LoginAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as LoginAttempt[];
  } catch {
    // ignore parse errors
    return [];
  }
}

function writeAttempts(attempts: LoginAttempt[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
  } catch {
    // ignore storage errors in demo
  }
}

export function addAttempt(partial: Partial<LoginAttempt> & { level: number; username?: string; password?: string; success?: boolean; honeypotTriggered?: boolean; sourceIP?: string; userAgent?: string }) {
  const attempt: LoginAttempt = {
    id: String(Date.now()) + Math.floor(Math.random() * 100000).toString(),
    timestamp: Date.now(),
    sourceIP: partial.sourceIP ?? "unknown",
    username: partial.username ?? "",
    password: partial.password ?? "",
    success: partial.success ?? false,
    level: partial.level,
    honeypotTriggered: partial.honeypotTriggered ?? false,
    userAgent: partial.userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "unknown"),
    commandInjectionAttempt: partial.commandInjectionAttempt,
    lfiAttempt: partial.lfiAttempt,
  };
  const attempts = readAttempts();
  attempts.unshift(attempt);
  writeAttempts(attempts);
  return attempt;
}

export function getAttempts(): LoginAttempt[] {
  return readAttempts();
}

export function clearAttempts() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage errors in demo
  }
}

export function exportAttemptsJSON(): string {
  return JSON.stringify(readAttempts(), null, 2);
}
