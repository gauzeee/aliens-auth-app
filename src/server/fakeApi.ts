import initDb from "@/server/idbConnector";
import { tokenService } from "@/api";
import { User } from "@/api/types";

const apiMethods = {
  "/users/create": <T>(body: string): Promise<T> =>
    new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readwrite");
      const store = transaction.objectStore("users");
      const data = JSON.parse(body);
      const request = store.add(data);

      request.onsuccess = () => {
        delete data.password;
        resolve(data);
        alert("Successfully signed up");
      };

      request.onerror = (event) => {
        if ((event.target as IDBRequest).error?.message.includes("email")) {
          reject(`{"email": "This email is already taken"}`);
        } else {
          reject(event);
        }
      };
    }),
  "/authorization": <T>(body: string): Promise<T> =>
    new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readonly");
      const store = transaction.objectStore("users");
      const data = JSON.parse(body);
      const emailIndex = store.index("email_idx");
      const userRequest: IDBRequest<User> = emailIndex.get(data.email);

      userRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;

        if (!result) {
          reject(`{"email": "User not found"}`);
          return;
        }

        if (data.password !== result.password) {
          reject(`{"password": "Wrong password"}`);
          return;
        }

        delete result.password;
        resolve(result);
      };

      userRequest.onerror = (event) => {
        reject(event);
      };
    }),
  "/show_password": <T>(body: string): Promise<T> =>
    new Promise((resolve, reject) => {
      const transaction = db.transaction("users", "readonly");
      const store = transaction.objectStore("users");
      const data: { email: string } = JSON.parse(body);
      const emailIndex = store.index("email_idx");
      const userRequest: IDBRequest<User> = emailIndex.get(data.email);

      userRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;

        if (!result) {
          reject(`{"email": "User not found"}`);
          return;
        }
        localStorage.setItem("tempStoredPass", JSON.stringify(result.password));
        resolve(result);
      };

      userRequest.onerror = (event) => {
        reject(event);
      };
    }),
};

let db: IDBDatabase;

(async () => {
  db = await initDb();
})();

const fetch = async <T>(url: keyof typeof apiMethods, body: string) => {
  return apiMethods[url]<T>(body);
};

class FakeApi {
  async createUser(
    userData: User & { password?: string; password_confirmation?: string }
  ): Promise<User> {
    delete userData.password_confirmation;
    return await fetch<User>("/users/create", JSON.stringify(userData));
  }
  async authorize(authData: { email: string; password: string }) {
    const res = await fetch<User>("/authorization", JSON.stringify(authData));
    if (res) {
      tokenService.set(res);
    }
    return res;
  }
  async showPassword(email: string) {
    return await fetch<{ password: string }>(
      "/show_password",
      JSON.stringify(email)
    );
  }
}

export default new FakeApi();
