import { HttpResponse } from 'msw';
import type { APIResponse } from '@shared/types';

export function successResponse<T>(data: T, status = 200) {
  const body: APIResponse<T> = {
    success: true,
    response: data,
  };

  return HttpResponse.json(body, { status });
}

export function errorResponse(message: string, status = 400) {
  const body: APIResponse = {
    success: false,
    error: message,
    request_id: crypto.randomUUID(),
  };

  return HttpResponse.json(body, { status });
}
