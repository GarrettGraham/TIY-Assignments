it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), undefined);
  assert.euqal(solution(30), undefined);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), undefined);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), undefined);
});

// What about 1000?