describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('checking the delete button addition', function () {
    submitServerInfo();
    expect(document.getElementById('server1').children.length).toEqual(3);
    expect(document.getElementById('server1').lastChild.innerHTML).toEqual('X');
  })

  afterEach(function () {
    // teardown logic
    serverTbody.remove('tr');
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
  });
});
