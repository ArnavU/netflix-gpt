import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants.js";

export const geminiAi = new GoogleGenAI({apiKey: GEMINI_KEY});