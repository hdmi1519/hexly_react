export interface APIResponse<T = unknown> {
  success: boolean;
  error?: string;
  request_id?: string;
  response?: T;
}
