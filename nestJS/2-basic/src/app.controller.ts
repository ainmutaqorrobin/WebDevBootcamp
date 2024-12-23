import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asd")
  getRootRoute() {
    return "Test robin nest server";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye bro -Robin";
  }
}
