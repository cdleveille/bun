import { Config, SuccessResponse } from "@helpers";
import { log } from "@services";

Bun.serve({
	fetch(_req) {
		return Response.json(new SuccessResponse({ data: "hello from bun!" }));
	}
});

log.info(`Server started in ${Config.IS_PROD ? "production" : "development"} mode on port ${Config.PORT}.`);
