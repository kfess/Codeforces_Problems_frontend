import { ResponseResolver, MockedRequest, restContext } from "msw";
import type { Contest } from "@features/contests/contest";

export const mockContest: ResponseResolver<MockedRequest, typeof restContext> =
  (req, res, ctx) => {
    const contests: Contest[] = Array.from({ length: 50 }, () => {
      return {
        id: 5,
        name: "contest-5",
        type: "CF",
        classification: "Global",
        phase: "BEFORE",
        frozen: false,
        durationSeconds: 18000,
        startTimeSeconds: 1674381600,
        problems: [
          {
            contestId: 1000,
            name: "problem-A",
            index: "A2",
            rating: 800,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
          {
            contestId: 1000,
            name: "problem-B",
            index: "B2",
            rating: 1200,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
          {
            contestId: 1000,
            name: "problem-C",
            index: "C2",
            rating: 1800,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
          {
            contestId: 1000,
            name: "problem-D",
            index: "D2",
            rating: 2200,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
          {
            contestId: 1000,
            name: "problem-E",
            index: "E2",
            rating: 2600,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
          {
            contestId: 1000,
            name: "problem-F",
            index: "F2",
            rating: 3000,
            type: "PROGRAMMING",
            tags: ["implementation"],
          },
        ],
      };
    });
    return res(ctx.json(contests));
  };
