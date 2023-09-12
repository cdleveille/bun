export interface IConfig {
	IS_PROD: boolean;
	PORT: number;
}

export interface IResponse<T = any> {
	ok: boolean;
	status: number;
	data: T;
}
