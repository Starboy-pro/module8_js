let map = new Map([
    ['1',  'str1'],
    ['2',  'str2'],
    ['3',  'str3']
  ]);
  
 console.log("Ключ -", map.keys('str1'), "Значение - ", map.get('1'))
 console.log("Ключ -", map.keys('str2'), "Значение - ", map.get('2'))
 console.log("Ключ -", map.keys('str3'), "Значение - ", map.get('3'))
