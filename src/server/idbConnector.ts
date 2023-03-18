const dbVersion = 3;
const initDb = () =>
  new Promise(
    (resolve: (db: IDBDatabase) => void, reject: (error: Event) => void) => {
      const openRequest = indexedDB.open("aliens", dbVersion);

      openRequest.onupgradeneeded = (e) => {
        const db = openRequest.result;
        const upgradeTransaction = (e.target as IDBOpenDBRequest).transaction;
        let users;
        if (!db.objectStoreNames.contains("users")) {
          users = db.createObjectStore("users", {
            keyPath: "id",
            autoIncrement: true,
          });
        } else {
          if (upgradeTransaction) {
            users = upgradeTransaction.objectStore("users");
          }
        }
        if (users && !users.indexNames.contains("email_idx")) {
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
