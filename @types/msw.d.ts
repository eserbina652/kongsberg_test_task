declare module "msw" {
  import { RequestHandler } from "msw/node";

  export interface RestContext {
    get: RequestHandler;
    post: RequestHandler;
    put: RequestHandler;
    delete: RequestHandler;
    patch: RequestHandler;
    head: RequestHandler;
  }

  export const rest: RestContext;
}

declare module "msw/node" {
  import { ResponseResolver, MockedRequest, MockedResponse } from "msw";

  export interface RequestHandler {
    (req: MockedRequest, res: MockedResponse): ResponseResolver<
      MockedRequest,
      MockedResponse
    >;
  }
}
