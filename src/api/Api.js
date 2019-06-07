import axios from 'axios';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
  uploadImages: '/api/upload/images',
  latestProducts: '/api/products/latest',
  products: '/api/products',
  users: '/api/users',
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
      this._storeTokenToAxios();
    } catch (err) {
      console.error(err);
    }
  },

  setToken(token) {
    this._token = token;
    this._storeToken();
    this._storeTokenToAxios();
  },

  _storeToken() {
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token));
    } catch (err) {
      console.error(err);
    }
  },

  _storeTokenToAxios() {
    axios.defaults.headers.common.Authorization = `Bearer ${this._token}`;
  },
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  },
};

export const Products = {
  getLatest() {
    return axios.get(urls.latestProducts);
  },

  addProduct(body) {
    return axios.post(urls.products, body);
  },

  get(id) {
    return axios.get(`${urls.products}/${id}`);
  },

  getSellerProducts(id) {
    return axios.get(`${urls.users}/${id}/products`);
  },

  getSeller(id) {
    return axios.get(`${urls.users}/${id}`);
  },
};

export const Images = {
  upload(body) {
    return axios.post(urls.uploadImages, body, {
      headers: { ContentType: 'multipart/form-data' },
    });
  },
};

export function init() {
  Auth.init();
}
