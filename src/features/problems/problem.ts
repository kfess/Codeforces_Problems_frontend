import { z } from "zod";

// https://codeforces.com/apiHelp/objects#Problem

const typeSchema = z.union([z.literal("PROGRAMMING"), z.literal("QUESTION")]);
type ProblemType = z.infer<typeof typeSchema>;

const tagSchema = z.union([
  z.literal("implementation"),
  z.literal("math"),
  z.literal("greedy"),
  z.literal("dp"),
  z.literal("data structures"),
  z.literal("brute force"),
  z.literal("constructive algorithms"),
  z.literal("graphs"),
  z.literal("sortings"),
  z.literal("binary search"),
  z.literal("dfs and similar"),
  z.literal("trees"),
  z.literal("strings"),
  z.literal("number theory"),
  z.literal("combinatorics"),
  z.literal("*special"),
  z.literal("geometry"),
  z.literal("bitmasks"),
  z.literal("two pointers"),
  z.literal("dsu"),
  z.literal("shortest paths"),
  z.literal("probabilities"),
  z.literal("divide and conquer"),
  z.literal("hashing"),
  z.literal("games"),
  z.literal("flows"),
  z.literal("interactive"),
  z.literal("matrices"),
  z.literal("fft"),
  z.literal("ternary search"),
  z.literal("expression parsing"),
  z.literal("meet-in-the-middle"),
  z.literal("2-sat"),
  z.literal("chinese remainder theorem"),
  z.literal("schedules"),
]);
type Tag = z.infer<typeof tagSchema>;

export const problemSchema = z.object({
  contestId: z.number().optional(),
  problemsetName: z.string().optional(),
  index: z.string().optional(),
  name: z.string(),
  type: typeSchema,
  points: z.number().optional(),
  rating: z.number().optional(),
  tags: z.array(tagSchema),
});
type Problem = z.infer<typeof problemSchema>;
