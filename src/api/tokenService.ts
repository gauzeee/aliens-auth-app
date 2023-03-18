import { User } from "@/api/types";

enum STORAGE_KEYS {
  profileData = "profileData",
}

export const tokenService = {
  get() {
    const dataString = localStorage.getItem(STORAGE_KEYS.profileData);
    return dataString ? JSON.parse(dataString) : undefined;
  },
  set(userData: User) {
    localStorage.setItem(STORAGE_KEYS.profileData, JSON.stringify(userData));
  },
  remove() {
    localStorage.removeItem(STORAGE_KEYS.profileData);
  },
};
