/**
 *
 */

export default class API {
  constructor() {
    this.host = 'http://glacial-fjord-12809.herokuapp.com'
  }

  fetchTimeSeriesData() {
    return new Promise((resolve, reject) => {
      fetch(`${this.host}/api/forms/department`)
        .then(res => res.json())
        .then(data => {
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  submitReport() {
    return new Promise((resolve, reject) => {
      return resolve();
      fetch(`${this.host}/report`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}
