import { getDocs } from 'firebase/firestore/lite';

import { connection } from '../database/connection';

export default class SignInController {
  static async signIn(email: string, password: string) {
    const reference = connection('users');

    let response = await getDocs(reference);
    if (response?.docs.length > 0) {
      const users = response.docs.map((doc) => doc.data());
      const filter = users?.filter((user) => user.email === email);

      if (filter && filter?.length > 0) {
        return filter;
      }
    }

    return null;
  }
}
