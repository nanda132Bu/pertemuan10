import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAuthStore } from '../auth';

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    global.localStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('default isLoggedIn adalah false', () => {
    const authStore = useAuthStore();
    expect(authStore.isLoggedIn).toBe(false);
  });

  it('login() mengubah isLoggedIn menjadi true', () => {
    const authStore = useAuthStore();
    const dummyCredentials = { email: 'admin@gmail.com', password: 'admin123' };

    authStore.login(dummyCredentials);

    expect(authStore.isLoggedIn).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true');
    expect(localStorage.setItem).toHaveBeenCalledWith('userEmail', 'admin@gmail.com');
    expect(localStorage.setItem).toHaveBeenCalledWith('userPassword', 'admin123');
  });

  it('logout() mengubah isLoggedIn menjadi false', () => {
    const authStore = useAuthStore();
    const dummyCredentials = { email: 'admin@gmail.com', password: 'admin123' };

    authStore.login(dummyCredentials);
    authStore.logout();

    expect(authStore.isLoggedIn).toBe(false);
    expect(localStorage.removeItem).toHaveBeenCalledWith('isLoggedIn');
    expect(localStorage.removeItem).toHaveBeenCalledWith('userEmail');
    expect(localStorage.removeItem).toHaveBeenCalledWith('userPassword');
  });

  it('checkLoginStatus() memeriksa status login dari localStorage', () => {
    const authStore = useAuthStore();

    localStorage.getItem.mockReturnValue('true');
    authStore.checkLoginStatus();
    expect(authStore.isLoggedIn).toBe(true);

    localStorage.getItem.mockReturnValue('false');
    authStore.checkLoginStatus();
    expect(authStore.isLoggedIn).toBe(false);
  });
});
