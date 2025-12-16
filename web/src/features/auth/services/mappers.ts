/**
 * Auth Mappers - Transform API responses to domain models
 */

import type { User as ApiUser } from "@hireable/shared/types/api";
import type {
  User as DomainUser,
  Role,
} from "@hireable/shared/types/domain/user";

/**
 * Maps API user response to domain User model
 */
export function mapUserResponseToDomain(res: ApiUser): DomainUser {
  return {
    id: String(res.id),
    email: res.email,
    firstName: res.firstName,
    lastName: res.lastName,
    role: (res.role?.toUpperCase() ?? "GUEST") as Role,
    avatar: res.avatar,
    createdAt: new Date(res.createdAt),
    updatedAt: new Date(res.updatedAt),
  };
}

/**
 * Maps domain User to API format (for requests)
 */
export function mapUserToApiFormat(
  user: Partial<DomainUser>
): Partial<ApiUser> {
  return {
    ...(user.id && { id: user.id }),
    ...(user.email && { email: user.email }),
    ...(user.firstName && { firstName: user.firstName }),
    ...(user.lastName && { lastName: user.lastName }),
    ...(user.role && { role: user.role.toLowerCase() as ApiUser["role"] }),
    ...(user.avatar && { avatar: user.avatar }),
  };
}
