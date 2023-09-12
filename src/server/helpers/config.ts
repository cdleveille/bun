import { IConfig } from "@types";

export const Config = {
	IS_PROD: Bun.env.NODE_ENV === "production",
	PORT: parseInt(Bun.env.PORT || "3000")
} as IConfig;
