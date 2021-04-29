import { PaginationOption } from './classes/paginationOptions';


/** Дефолтный класс с любыми ключами */
export class DefaultStringChoices<T> {
  [key: string]: T;
}

/** Дефолтный класс с любыми ключами для значений типа string[],
 * в системе используется для router.navigate(commands) для разных ролей
 * например:
 * - `const RolesRouterMap: DefaultUrls = {operator: ['app', 'base'], admin: ['app', 'admin']}`
 */
export class DefaultUrls {
  [key: string]: string[];
}
/** Дефолтный класс с любыми ключами для фильтрации и обязательными для BaseTableComponent */
export class DefaultParams {
  [key: string]: any;

  ordering?: string;
  paginationOption?: PaginationOption;
}
