import solution from '.';

describe('optimize-paths', () => {
  test('should work', (): void => {
    expect(
      solution([
        'me.companies.id',
        'me.companies.address.house',
        'me.companies.name',
        'me.companies.address.street',
        'me.companies.address',
        'me.companies.name.first',
        'me.companies.name',
        'me.companies.name.last',
        'me.companies.address.city',
        'me.store.products.name',
        'me.store.id',
        'me.store.products.id',
      ]),
      // ).toEqual([
      //   'me.companies.address',
      //   'me.companies.id',
      //   'me.companies.name',
      //   'me.store.id',
      //   'me.store.products.id',
      //   'me.store.products.name',
      // ]);
    ).toEqual([
      ['me', 'companies', ['address', 'id', 'name']],
      ['me', 'store', 'id'],
      ['me', 'store', 'products', ['id', 'name']],
    ]);
  });
});
/**
 * 1.
 * [
 *  'me.companies.address',
 *  'me.companies.id',
 *  'me.companies.name',
 *  'me.store.id',
 *  'me.store.products.id',
 *  'me.store.products.name',
 * ]
 */

/**
 * 2.
 * [
 *  ['me', 'companies', 'address'],
 *  ['me', 'companies', 'id'],
 *  ['me', 'companies', 'name'],
 *  ['me', 'store', 'id'],
 *  ['me', 'store', 'products', 'id'],
 *  ['me', 'store', 'products', 'name'],
 * ]
 */

/**
 * 3.
 * [
 *  ['me', 'companies', ['address', 'id', 'name']],
 *  ['me', 'store', 'id'],
 *  ['me', 'store', 'products', ['id', 'name']],
 * ]
 */
