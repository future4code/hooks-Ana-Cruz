export const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-cruz-hooks';

export const headers = {
    headers: {
      auth: localStorage.getItem('tokenLabeX')
    }
  }