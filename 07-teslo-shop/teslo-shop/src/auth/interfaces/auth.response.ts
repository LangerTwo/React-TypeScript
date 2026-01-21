import type { User } from "@/interfaces/user.interface";

// Login, Register, Check-status
export interface AuthResponse {
    user:  User;
    token: string;
}