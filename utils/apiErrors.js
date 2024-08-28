class ApiErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    if (this.StatusCode >= 400 && this.StatusCode < 500) {
      this.statusText = "Fail";
    }
    if (this.StatusCode >= 500 && this.StatusCode < 600) {
      this.statusText = "Error";
    }
    this.isOperational = true;
  }
}
module.exports = ApiErrors;
