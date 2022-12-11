function processList(commands) {
  let commandProcessor = (function () {
    let list = [];
    return {
      add: (newItem) => list.push(newItem),
      remove: (item) => (list = list.filter((x) => x != item)),
      print: () => console.log(list)
    };
  })();

  for (let command of commands) {
    let [commandName, arg] = command.split(" ");
    commandProcessor[commandName](arg);
  }
}

processList(["add hello", "add again", "remove hello", "add again", "print"]);
processList(["add pesho", "add gosho", "add pesho", "remove pesho", "print"]);