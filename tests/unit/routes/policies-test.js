import { module, test } from 'qunit';
import { setupTest } from 'bay-chiro/tests/helpers';

module('Unit | Route | policies', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:policies');
    assert.ok(route);
  });
});
