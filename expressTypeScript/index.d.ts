import * as express from "express-serve-static-core";

//To extends request interface
declare global {
  namespace Express {
    interface Request {
      customField?: string;
    }
    interface Response {
      robinCustomField?: string;
    }
  }
}
