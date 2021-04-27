/** Класс для формирования контролов в форме, каждый контрол может выглядеть по разному, например:
 * - controlName: [null]
 * - controlName: ['', [Список обычных валидаторов], [Список асинхронных валидаторов]]
 * - controlName: [{value: null, disabled: true}, [...], [...]
 */
export class ControlsConfig {
  [key: string]: any;
}
