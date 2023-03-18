const initDb = () =>
  new Promise(
    (resolve: (db: IDBDatabase) => void, reject: (error: Event) => void) => {
      const openRequest = indexedDB.open("aliens");

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        if (!db.objectStoreNames.contains("users")) {
          const users = db.createObjectStore("users", {
            keyPath: "id",
            autoIncrement: true,
          });
          users.createIndex("email_idx", "email", { unique: true });
        }
        resolve(db);
      };

      openRequest.onerror = (e) => {
        reject(e);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        resolve(db);
      };
    }
  );

export default initDb;
