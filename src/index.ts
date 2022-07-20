export default {
	port: Number(process.env.PORT ?? 3000),
	fetch(req: Request) {
		return new Response("Hello from bun!");
	},
};
