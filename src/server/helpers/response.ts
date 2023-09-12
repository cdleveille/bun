import { IResponse } from "@types";

class BaseResponse<T = any> implements IResponse<T> {
	ok: boolean;
	status: number;
	data: T;
	constructor({ ok, status, data }: IResponse<T>) {
		this.ok = ok;
		this.status = status;
		this.data = data;
	}
}

export class SuccessResponse<T = any> extends BaseResponse {
	constructor({ status, data }: Partial<IResponse<T>>) {
		super({ ok: true, status: status ?? 200, data } as IResponse<T>);
	}
}

export class ErrorResponse<T = any> extends BaseResponse {
	constructor({ status, data }: Partial<IResponse<T>>) {
		super({ ok: false, status: status ?? 500, data } as IResponse<T>);
	}
}
