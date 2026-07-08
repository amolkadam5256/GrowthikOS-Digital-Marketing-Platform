const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export interface User {
  id: number;
  email: string;
  name: string | null;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const params = new URLSearchParams();
  params.append("username", email);
  params.append("password", password);

  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail ?? "Failed to log in. Please check your credentials.");
  }

  return response.json();
}

export async function signupUser(email: string, password: string, name: string): Promise<User> {
  const response = await fetch(`${API_URL}/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail ?? "Failed to sign up. Please try again.");
  }

  return response.json();
}
