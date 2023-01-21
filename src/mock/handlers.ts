import { rest } from "msw";
import { mockContest } from "@mock/resolvers/mockContest";

export const handlers = [rest.get("/mock/contests", mockContest)];
