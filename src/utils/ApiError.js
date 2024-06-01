class ApiError extends Error { // 1 - Create a new class called ApiError that extends the Error class  2 - Add a constructor that takes two parameters: statusCode and message  3 - Call the super() method with the message parameter  4 - Assign the statusCode parameter to a new property called statusCode 
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { ApiError}