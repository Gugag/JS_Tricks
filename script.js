const tricks = [
            {
                id: 1,
                title: "Array Destructuring Swap",
                category: "arrays",
                description: "Swap variables without a temporary variable using array destructuring.",
                code: `<span class="keyword">let</span> a = <span class="number">1</span>, b = <span class="number">2</span>;\n[a, b] = [b, a];\n<span class="function">console.log</span>(a, b); <span class="comment">// 2, 1</span>`,
                demo: () => {
                    let a = 1, b = 2;
                    [a, b] = [b, a];
                    return `a = ${a}, b = ${b}`;
                }
            },
            {
                id: 2,
                title: "Remove Array Duplicates",
                category: "arrays",
                description: "Remove duplicate values from an array using Set.",
                code: `<span class="keyword">const</span> arr = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> unique = [...<span class="keyword">new</span> <span class="function">Set</span>(arr)];\n<span class="function">console.log</span>(unique); <span class="comment">// [1, 2, 3, 4]</span>`,
                demo: () => {
                    const arr = [1, 2, 2, 3, 3, 4];
                    const unique = [...new Set(arr)];
                    return `[${unique.join(', ')}]`;
                }
            },
            {
                id: 3,
                title: "Flatten Nested Arrays",
                category: "arrays",
                description: "Flatten multi-dimensional arrays using flat() method.",
                code: `<span class="keyword">const</span> nested = [[<span class="number">1</span>, <span class="number">2</span>], [<span class="number">3</span>, <span class="number">4</span>], [<span class="number">5</span>]];\n<span class="keyword">const</span> flattened = nested.<span class="function">flat</span>();\n<span class="function">console.log</span>(flattened); <span class="comment">// [1, 2, 3, 4, 5]</span>`,
                demo: () => {
                    const nested = [[1, 2], [3, 4], [5]];
                    const flattened = nested.flat();
                    return `[${flattened.join(', ')}]`;
                }
            },
            {
                id: 4,
                title: "Short Circuit Evaluation",
                category: "functions",
                description: "Use && and || operators for conditional execution.",
                code: `<span class="keyword">const</span> user = { name: <span class="string">'John'</span> };\nuser.name && <span class="function">console.log</span>(<span class="string">'Hello '</span> + user.name);\n<span class="keyword">const</span> greeting = user.name || <span class="string">'Guest'</span>;`,
                demo: () => {
                    const user = { name: 'John' };
                    const result = user.name && 'Hello ' + user.name;
                    const greeting = user.name || 'Guest';
                    return `Result: ${result}\nGreeting: ${greeting}`;
                }
            },
            {
                id: 5,
                title: "Object Property Shorthand",
                category: "objects",
                description: "Shorthand syntax for object properties when key and variable name match.",
                code: `<span class="keyword">const</span> name = <span class="string">'John'</span>;\n<span class="keyword">const</span> age = <span class="number">30</span>;\n<span class="keyword">const</span> person = { name, age };\n<span class="function">console.log</span>(person); <span class="comment">// {name: 'John', age: 30}</span>`,
                demo: () => {
                    const name = 'John';
                    const age = 30;
                    const person = { name, age };
                    return JSON.stringify(person);
                }
            },
            {
                id: 6,
                title: "Template Literals for Strings",
                category: "es6",
                description: "Use template literals for string interpolation and multi-line strings.",
                code: `<span class="keyword">const</span> name = <span class="string">'World'</span>;\n<span class="keyword">const</span> greeting = <span class="string">\`Hello \${name}!\`</span>;\n<span class="keyword">const</span> multiline = <span class="string">\`Line 1\nLine 2\`</span>;`,
                demo: () => {
                    const name = 'World';
                    const greeting = `Hello ${name}!`;
                    const multiline = `Line 1\nLine 2`;
                    return `${greeting}\n\n${multiline}`;
                }
            },
            {
                id: 7,
                title: "Default Parameters",
                category: "functions",
                description: "Set default values for function parameters.",
                code: `<span class="keyword">function</span> <span class="function">greet</span>(name = <span class="string">'World'</span>) {\n  <span class="keyword">return</span> <span class="string">\`Hello \${name}!\`</span>;\n}\n<span class="function">console.log</span>(<span class="function">greet</span>()); <span class="comment">// Hello World!</span>`,
                demo: () => {
                    function greet(name = 'World') {
                        return `Hello ${name}!`;
                    }
                    return `${greet()}\n${greet('John')}`;
                }
            },
            {
                id: 8,
                title: "Arrow Functions",
                category: "functions",
                description: "Concise syntax for function expressions.",
                code: `<span class="keyword">const</span> <span class="function">add</span> = (a, b) => a + b;\n<span class="keyword">const</span> <span class="function">square</span> = x => x * x;\n<span class="keyword">const</span> <span class="function">greet</span> = () => <span class="string">'Hello!'</span>;`,
                demo: () => {
                    const add = (a, b) => a + b;
                    const square = x => x * x;
                    const greet = () => 'Hello!';
                    return `add(2, 3) = ${add(2, 3)}\nsquare(4) = ${square(4)}\ngreet() = ${greet()}`;
                }
            },
            {
                id: 9,
                title: "Spread Operator for Arrays",
                category: "arrays",
                description: "Use spread operator to expand arrays.",
                code: `<span class="keyword">const</span> arr1 = [<span class="number">1</span>, <span class="number">2</span>];\n<span class="keyword">const</span> arr2 = [<span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> combined = [...arr1, ...arr2];\n<span class="function">console.log</span>(combined); <span class="comment">// [1, 2, 3, 4]</span>`,
                demo: () => {
                    const arr1 = [1, 2];
                    const arr2 = [3, 4];
                    const combined = [...arr1, ...arr2];
                    return `[${combined.join(', ')}]`;
                }
            },
            {
                id: 10,
                title: "Object Destructuring",
                category: "objects",
                description: "Extract properties from objects into variables.",
                code: `<span class="keyword">const</span> person = { name: <span class="string">'John'</span>, age: <span class="number">30</span> };\n<span class="keyword">const</span> { name, age } = person;\n<span class="function">console.log</span>(name, age); <span class="comment">// John 30</span>`,
                demo: () => {
                    const person = { name: 'John', age: 30 };
                    const { name, age } = person;
                    return `name: ${name}, age: ${age}`;
                }
            },
            {
                id: 11,
                title: "Array Methods Chaining",
                category: "arrays",
                description: "Chain array methods for powerful data transformations.",
                code: `<span class="keyword">const</span> numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];\n<span class="keyword">const</span> result = numbers\n  .<span class="function">filter</span>(n => n % <span class="number">2</span> === <span class="number">0</span>)\n  .<span class="function">map</span>(n => n * <span class="number">2</span>);`,
                demo: () => {
                    const numbers = [1, 2, 3, 4, 5];
                    const result = numbers
                        .filter(n => n % 2 === 0)
                        .map(n => n * 2);
                    return `[${result.join(', ')}]`;
                }
            },
            {
                id: 12,
                title: "Nullish Coalescing Operator",
                category: "es6",
                description: "Use ?? to provide default values only for null/undefined.",
                code: `<span class="keyword">const</span> user = { name: <span class="string">''</span> };\n<span class="keyword">const</span> name1 = user.name || <span class="string">'Default'</span>; <span class="comment">// 'Default'</span>\n<span class="keyword">const</span> name2 = user.name ?? <span class="string">'Default'</span>; <span class="comment">// ''</span>`,
                demo: () => {
                    const user = { name: '' };
                    const name1 = user.name || 'Default';
                    const name2 = user.name ?? 'Default';
                    return `Using ||: '${name1}'\nUsing ??: '${name2}'`;
                }
            },
            {
                id: 13,
                title: "Optional Chaining",
                category: "es6",
                description: "Safely access nested object properties.",
                code: `<span class="keyword">const</span> user = { profile: { name: <span class="string">'John'</span> } };\n<span class="keyword">const</span> name = user.profile?.name;\n<span class="keyword">const</span> email = user.profile?.email; <span class="comment">// undefined</span>`,
                demo: () => {
                    const user = { profile: { name: 'John' } };
                    const name = user.profile?.name;
                    const email = user.profile?.email;
                    return `name: ${name}\nemail: ${email}`;
                }
            },
            {
                id: 14,
                title: "Dynamic Property Names",
                category: "objects",
                description: "Use computed property names in object literals.",
                code: `<span class="keyword">const</span> key = <span class="string">'dynamicKey'</span>;\n<span class="keyword">const</span> obj = {\n  [key]: <span class="string">'value'</span>,\n  [\`prefix_\${key}\`]: <span class="string">'another value'</span>\n};`,
                demo: () => {
                    const key = 'dynamicKey';
                    const obj = {
                        [key]: 'value',
                        [`prefix_${key}`]: 'another value'
                    };
                    return JSON.stringify(obj, null, 2);
                }
            },
            {
                id: 15,
                title: "Rest Parameters",
                category: "functions",
                description: "Collect remaining arguments into an array.",
                code: `<span class="keyword">function</span> <span class="function">sum</span>(...numbers) {\n  <span class="keyword">return</span> numbers.<span class="function">reduce</span>((a, b) => a + b, <span class="number">0</span>);\n}\n<span class="function">console.log</span>(<span class="function">sum</span>(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>)); <span class="comment">// 10</span>`,
                demo: () => {
                    function sum(...numbers) {
                        return numbers.reduce((a, b) => a + b, 0);
                    }
                    return `sum(1, 2, 3, 4) = ${sum(1, 2, 3, 4)}`;
                }
            },
            {
                id: 16,
                title: "Array.from() Magic",
                category: "arrays",
                description: "Create arrays from array-like objects or iterables.",
                code: `<span class="keyword">const</span> range = <span class="function">Array.from</span>({ length: <span class="number">5</span> }, (_, i) => i);\n<span class="keyword">const</span> letters = <span class="function">Array.from</span>(<span class="string">'hello'</span>);\n<span class="function">console.log</span>(range); <span class="comment">// [0, 1, 2, 3, 4]</span>`,
                demo: () => {
                    const range = Array.from({ length: 5 }, (_, i) => i);
                    const letters = Array.from('hello');
                    return `range: [${range.join(', ')}]\nletters: [${letters.map(l => `'${l}'`).join(', ')}]`;
                }
            },
            {
                id: 17,
                title: "Object.entries() Iteration",
                category: "objects",
                description: "Iterate over object key-value pairs.",
                code: `<span class="keyword">const</span> obj = { a: <span class="number">1</span>, b: <span class="number">2</span>, c: <span class="number">3</span> };\n<span class="keyword">for</span> (<span class="keyword">const</span> [key, value] <span class="keyword">of</span> <span class="function">Object.entries</span>(obj)) {\n  <span class="function">console.log</span>(<span class="string">\`\${key}: \${value}\`</span>);\n}`,
                demo: () => {
                    const obj = { a: 1, b: 2, c: 3 };
                    let result = '';
                    for (const [key, value] of Object.entries(obj)) {
                        result += `${key}: ${value}\n`;
                    }
                    return result.trim();
                }
            },
            {
                id: 18,
                title: "Array.reduce() Power",
                category: "arrays",
                description: "Transform arrays into any data structure.",
                code: `<span class="keyword">const</span> arr = [<span class="string">'a'</span>, <span class="string">'b'</span>, <span class="string">'c'</span>];\n<span class="keyword">const</span> obj = arr.<span class="function">reduce</span>((acc, item, index) => {\n  acc[item] = index;\n  <span class="keyword">return</span> acc;\n}, {});`,
                demo: () => {
                    const arr = ['a', 'b', 'c'];
                    const obj = arr.reduce((acc, item, index) => {
                        acc[item] = index;
                        return acc;
                    }, {});
                    return JSON.stringify(obj);
                }
            },
            {
                id: 19,
                title: "Promise.all() Parallel",
                category: "async",
                description: "Execute multiple promises concurrently.",
                code: `<span class="keyword">const</span> promises = [<span class="function">fetch</span>(<span class="string">'/api/1'</span>), <span class="function">fetch</span>(<span class="string">'/api/2'</span>)];\n<span class="keyword">const</span> results = <span class="keyword">await</span> <span class="function">Promise.all</span>(promises);\n<span class="function">console.log</span>(results);`,
                demo: () => {
                    // Simulate with setTimeout
                    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
                    return "Simulated: Both promises resolve together";
                }
            },
            {
                id: 20,
                title: "Async/Await Error Handling",
                category: "async",
                description: "Handle errors in async functions gracefully.",
                code: `<span class="keyword">async function</span> <span class="function">fetchData</span>() {\n  <span class="keyword">try</span> {\n    <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'/api/data'</span>);\n    <span class="keyword">return</span> <span class="keyword">await</span> response.<span class="function">json</span>();\n  } <span class="keyword">catch</span> (error) {\n    <span class="function">console.error</span>(<span class="string">'Error:'</span>, error);\n  }\n}`,
                demo: () => {
                    return "Error handling pattern for async functions";
                }
            },
            {
                id: 21,
                title: "Debounce Function",
                category: "performance",
                description: "Limit function execution frequency.",
                code: `<span class="keyword">function</span> <span class="function">debounce</span>(func, wait) {\n  <span class="keyword">let</span> timeout;\n  <span class="keyword">return</span> <span class="keyword">function</span>(...args) {\n    <span class="function">clearTimeout</span>(timeout);\n    timeout = <span class="function">setTimeout</span>(() => func.<span class="function">apply</span>(<span class="keyword">this</span>, args), wait);\n  };\n}`,
                demo: () => {
                    function debounce(func, wait) {
                        let timeout;
                        return function(...args) {
                            clearTimeout(timeout);
                            timeout = setTimeout(() => func.apply(this, args), wait);
                        };
                    }
                    return "Debounce function created (delays execution)";
                }
            },
            {
                id: 22,
                title: "Throttle Function",
                category: "performance",
                description: "Limit function calls to a specific rate.",
                code: `<span class="keyword">function</span> <span class="function">throttle</span>(func, limit) {\n  <span class="keyword">let</span> inThrottle;\n  <span class="keyword">return</span> <span class="keyword">function</span>(...args) {\n    <span class="keyword">if</span> (!inThrottle) {\n      func.<span class="function">apply</span>(<span class="keyword">this</span>, args);\n      inThrottle = <span class="keyword">true</span>;\n      <span class="function">setTimeout</span>(() => inThrottle = <span class="keyword">false</span>, limit);\n    }\n  };\n}`,
                demo: () => {
                    return "Throttle function created (limits call frequency)";
                }
            },
            {
                id: 23,
                title: "Deep Clone Object",
                category: "objects",
                description: "Create a deep copy of an object.",
                code: `<span class="keyword">const</span> original = { a: <span class="number">1</span>, b: { c: <span class="number">2</span> } };\n<span class="keyword">const</span> deepClone = <span class="function">JSON.parse</span>(<span class="function">JSON.stringify</span>(original));\n<span class="comment">// Or use structuredClone (modern browsers)</span>\n<span class="keyword">const</span> clone = <span class="function">structuredClone</span>(original);`,
                demo: () => {
                    const original = { a: 1, b: { c: 2 } };
                    const deepClone = JSON.parse(JSON.stringify(original));
                    deepClone.b.c = 99;
                    return `Original: ${JSON.stringify(original)}\nClone: ${JSON.stringify(deepClone)}`;
                }
            },
            {
                id: 24,
                title: "Array Intersection",
                category: "arrays",
                description: "Find common elements between arrays.",
                code: `<span class="keyword">const</span> arr1 = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> arr2 = [<span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>];\n<span class="keyword">const</span> intersection = arr1.<span class="function">filter</span>(x => arr2.<span class="function">includes</span>(x));`,
                demo: () => {
                    const arr1 = [1, 2, 3, 4];
                    const arr2 = [3, 4, 5, 6];
                    const intersection = arr1.filter(x => arr2.includes(x));
                    return `[${intersection.join(', ')}]`;
                }
            },
            {
                id: 25,
                title: "Query Selector All to Array",
                category: "dom",
                description: "Convert NodeList to Array for array methods.",
                code: `<span class="keyword">const</span> elements = [...document.<span class="function">querySelectorAll</span>(<span class="string">'.item'</span>)];\nelements.<span class="function">forEach</span>(el => el.<span class="function">classList.add</span>(<span class="string">'active'</span>));`,
                demo: () => {
                    return "Converts NodeList to Array for array methods";
                }
            },
            {
                id: 26,
                title: "localStorage with JSON",
                category: "utilities",
                description: "Store and retrieve objects in localStorage.",
                code: `<span class="keyword">const</span> user = { name: <span class="string">'John'</span>, age: <span class="number">30</span> };\n<span class="comment">// Store object</span>\nlocalStorage.<span class="function">setItem</span>(<span class="string">'user'</span>, <span class="function">JSON.stringify</span>(user));\n<span class="comment">// Retrieve object</span>\n<span class="keyword">const</span> stored = <span class="function">JSON.parse</span>(localStorage.<span class="function">getItem</span>(<span class="string">'user'</span>));`,
                demo: () => {
                    const user = { name: 'John', age: 30 };
                    return `Stored: ${JSON.stringify(user)}`;
                }
            },
            {
                id: 27,
                title: "Random Array Element",
                category: "arrays",
                description: "Get a random element from an array.",
                code: `<span class="keyword">const</span> fruits = [<span class="string">'apple'</span>, <span class="string">'banana'</span>, <span class="string">'orange'</span>];\n<span class="keyword">const</span> randomFruit = fruits[<span class="function">Math.floor</span>(<span class="function">Math.random</span>() * fruits.length)];`,
                demo: () => {
                    const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
                    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
                    return `Random fruit: ${randomFruit}`;
                }
            },
            {
                id: 28,
                title: "Shuffle Array",
                category: "arrays",
                description: "Randomize array order using Fisher-Yates algorithm.",
                code: `<span class="keyword">function</span> <span class="function">shuffle</span>(array) {\n  <span class="keyword">for</span> (<span class="keyword">let</span> i = array.length - <span class="number">1</span>; i > <span class="number">0</span>; i--) {\n    <span class="keyword">const</span> j = <span class="function">Math.floor</span>(<span class="function">Math.random</span>() * (i + <span class="number">1</span>));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  <span class="keyword">return</span> array;\n}`,
                demo: () => {
                    function shuffle(array) {
                        const arr = [...array];
                        for (let i = arr.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [arr[i], arr[j]] = [arr[j], arr[i]];
                        }
                        return arr;
                    }
                    const original = [1, 2, 3, 4, 5];
                    const shuffled = shuffle(original);
                    return `Original: [${original.join(', ')}]\nShuffled: [${shuffled.join(', ')}]`;
                }
            },
            {
                id: 29,
                title: "Check if Array is Empty",
                category: "arrays",
                description: "Multiple ways to check if an array is empty.",
                code: `<span class="keyword">const</span> arr = [];\n<span class="keyword">const</span> isEmpty1 = arr.length === <span class="number">0</span>;\n<span class="keyword">const</span> isEmpty2 = !arr.length;\n<span class="keyword">const</span> isEmpty3 = <span class="function">Array.isArray</span>(arr) && !arr.length;`,
                demo: () => {
                    const arr = [];
                    const isEmpty1 = arr.length === 0;
                    const isEmpty2 = !arr.length;
                    const isEmpty3 = Array.isArray(arr) && !arr.length;
                    return `Method 1: ${isEmpty1}\nMethod 2: ${isEmpty2}\nMethod 3: ${isEmpty3}`;
                }
            },
           {
  id: 30,
  title: "Remove Duplicates from Array",
  category: "arrays",
  description: "Various methods to remove duplicate values from arrays.",
  code: `<span class="keyword">const</span> arr = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> unique1 = [...<span class="keyword">new</span> <span class="function">Set</span>(arr)];\n<span class="keyword">const</span> unique2 = arr.<span class="function">filter</span>((item, index) => arr.<span class="function">indexOf</span>(item) === index);\n<span class="keyword">const</span> unique3 = arr.<span class="function">reduce</span>((acc, curr) => acc.<span class="function">includes</span>(curr) ? acc : [...acc, curr], []);`,
  demo: () => {
    const arr = [1, 2, 2, 3, 3, 4];
    const unique1 = [...new Set(arr)];
    const unique2 = arr.filter((item, index) => arr.indexOf(item) === index);
    const unique3 = arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    return `Set method: [${unique1}]\nFilter method: [${unique2}]\nReduce method: [${unique3}]`;
  }
},

{
  id: 31,
  title: "Deep Clone Object",
  category: "objects",
  description: "Different approaches to create a deep copy of an object.",
  code: `<span class="keyword">const</span> obj = { a: <span class="number">1</span>, b: { c: <span class="number">2</span> } };\n<span class="keyword">const</span> clone1 = <span class="function">JSON.parse</span>(<span class="function">JSON.stringify</span>(obj));\n<span class="keyword">const</span> clone2 = <span class="function">structuredClone</span>(obj);\n<span class="keyword">const</span> clone3 = { ...obj, b: { ...obj.b } };`,
  demo: () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone1 = JSON.parse(JSON.stringify(obj));
    const clone2 = structuredClone(obj);
    const clone3 = { ...obj, b: { ...obj.b } };
    return `Original: ${JSON.stringify(obj)}\nJSON method: ${JSON.stringify(clone1)}\nstructuredClone: ${JSON.stringify(clone2)}\nSpread method: ${JSON.stringify(clone3)}`;
  }
},

{
  id: 32,
  title: "Generate Random String",
  category: "strings",
  description: "Quick ways to generate random strings for IDs or keys.",
  code: `<span class="keyword">const</span> random1 = <span class="function">Math.random</span>().<span class="function">toString</span>(<span class="number">36</span>).<span class="function">substring</span>(<span class="number">2</span>);\n<span class="keyword">const</span> random2 = <span class="function">Date.now</span>().<span class="function">toString</span>(<span class="number">36</span>);\n<span class="keyword">const</span> random3 = <span class="function">crypto.randomUUID</span>();`,
  demo: () => {
    const random1 = Math.random().toString(36).substring(2);
    const random2 = Date.now().toString(36);
    const random3 = crypto.randomUUID();
    return `Math.random: ${random1}\nDate.now: ${random2}\ncrypto.randomUUID: ${random3}`;
  }
},

{
  id: 33,
  title: "Flatten Nested Array",
  category: "arrays",
  description: "Methods to flatten arrays of any depth.",
  code: `<span class="keyword">const</span> nested = [<span class="number">1</span>, [<span class="number">2</span>, [<span class="number">3</span>, <span class="number">4</span>]], <span class="number">5</span>];\n<span class="keyword">const</span> flat1 = nested.<span class="function">flat</span>(<span class="function">Infinity</span>);\n<span class="keyword">const</span> flat2 = <span class="function">JSON.stringify</span>(nested).<span class="function">replace</span>(/\\[|\\]/g, '').<span class="function">split</span>(',').<span class="function">map</span>(<span class="function">Number</span>);\n<span class="keyword">const</span> flat3 = nested.<span class="function">toString</span>().<span class="function">split</span>(',').<span class="function">map</span>(<span class="function">Number</span>);`,
  demo: () => {
    const nested = [1, [2, [3, 4]], 5];
    const flat1 = nested.flat(Infinity);
    const flat2 = JSON.stringify(nested).replace(/\[|\]/g, '').split(',').map(Number);
    const flat3 = nested.toString().split(',').map(Number);
    return `Original: [${nested}]\nflat(): [${flat1}]\nJSON method: [${flat2}]\ntoString(): [${flat3}]`;
  }
},

{
  id: 34,
  title: "Debounce Function",
  category: "functions",
  description: "Delay function execution until after a specified time.",
  code: `<span class="keyword">const</span> <span class="function">debounce</span> = (fn, delay) => {\n  <span class="keyword">let</span> timeoutId;\n  <span class="keyword">return</span> (...args) => {\n    <span class="function">clearTimeout</span>(timeoutId);\n    timeoutId = <span class="function">setTimeout</span>(() => fn.<span class="function">apply</span>(<span class="keyword">this</span>, args), delay);\n  };\n};\n\n<span class="keyword">const</span> debouncedLog = <span class="function">debounce</span>(() => <span class="function">console.log</span>('<span class="string">Hello!</span>'), <span class="number">300</span>);`,
  demo: () => {
    const debounce = (fn, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    };
    return `Debounce function created\nUsage: debounce(fn, delay)\nPrevents rapid function calls`;
  }
},

{
  id: 35,
  title: "Check Object Properties",
  category: "objects",
  description: "Different ways to check if an object has properties.",
  code: `<span class="keyword">const</span> obj = { name: '<span class="string">John</span>', age: <span class="number">30</span> };\n<span class="keyword">const</span> hasName1 = '<span class="string">name</span>' <span class="keyword">in</span> obj;\n<span class="keyword">const</span> hasName2 = obj.<span class="function">hasOwnProperty</span>('<span class="string">name</span>');\n<span class="keyword">const</span> hasName3 = obj.name !== <span class="keyword">undefined</span>;\n<span class="keyword">const</span> hasName4 = <span class="function">Object.hasOwn</span>(obj, '<span class="string">name</span>');`,
  demo: () => {
    const obj = { name: 'John', age: 30 };
    const hasName1 = 'name' in obj;
    const hasName2 = obj.hasOwnProperty('name');
    const hasName3 = obj.name !== undefined;
    const hasName4 = Object.hasOwn(obj, 'name');
    return `'in' operator: ${hasName1}\nhasOwnProperty: ${hasName2}\nundefined check: ${hasName3}\nObject.hasOwn: ${hasName4}`;
  }
},

{
  id: 36,
  title: "Convert String to Number",
  category: "strings",
  description: "Various methods to convert strings to numbers.",
  code: `<span class="keyword">const</span> str = '<span class="string">42</span>';\n<span class="keyword">const</span> num1 = +str;\n<span class="keyword">const</span> num2 = <span class="function">Number</span>(str);\n<span class="keyword">const</span> num3 = <span class="function">parseInt</span>(str, <span class="number">10</span>);\n<span class="keyword">const</span> num4 = <span class="function">parseFloat</span>(str);\n<span class="keyword">const</span> num5 = str * <span class="number">1</span>;`,
  demo: () => {
    const str = '42';
    const num1 = +str;
    const num2 = Number(str);
    const num3 = parseInt(str, 10);
    const num4 = parseFloat(str);
    const num5 = str * 1;
    return `Unary +: ${num1}\nNumber(): ${num2}\nparseInt(): ${num3}\nparseFloat(): ${num4}\nMultiply by 1: ${num5}`;
  }
},

{
  id: 37,
  title: "Get Array Intersection",
  category: "arrays",
  description: "Find common elements between two arrays.",
  code: `<span class="keyword">const</span> arr1 = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> arr2 = [<span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>];\n<span class="keyword">const</span> intersection1 = arr1.<span class="function">filter</span>(x => arr2.<span class="function">includes</span>(x));\n<span class="keyword">const</span> intersection2 = [...<span class="keyword">new</span> <span class="function">Set</span>(arr1)].<span class="function">filter</span>(x => arr2.<span class="function">includes</span>(x));\n<span class="keyword">const</span> intersection3 = arr1.<span class="function">filter</span>(x => <span class="keyword">new</span> <span class="function">Set</span>(arr2).<span class="function">has</span>(x));`,
  demo: () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const intersection1 = arr1.filter(x => arr2.includes(x));
    const intersection2 = [...new Set(arr1)].filter(x => arr2.includes(x));
    const intersection3 = arr1.filter(x => new Set(arr2).has(x));
    return `Arrays: [${arr1}] & [${arr2}]\nFilter + includes: [${intersection1}]\nSet + filter: [${intersection2}]\nSet.has(): [${intersection3}]`;
  }
}
,

{
  id: 38,
  title: "Array Difference",
  category: "arrays",
  description: "Find elements that exist in one array but not in another.",
  code: `<span class="keyword">const</span> arr1 = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>];\n<span class="keyword">const</span> arr2 = [<span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>];\n<span class="keyword">const</span> difference = arr1.<span class="function">filter</span>(x => !arr2.<span class="function">includes</span>(x));`,
  demo: () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const difference = arr1.filter(x => !arr2.includes(x));
    return `arr1: [${arr1}]\narr2: [${arr2}]\nDifference: [${difference}]`;
  }
},

{
  id: 39,
  title: "Capitalize First Letter",
  category: "strings",
  description: "Capitalize the first letter of a string.",
  code: `<span class="keyword">const</span> str = '<span class="string">hello world</span>';\n<span class="keyword">const</span> capitalized1 = str.<span class="function">charAt</span>(<span class="number">0</span>).<span class="function">toUpperCase</span>() + str.<span class="function">slice</span>(<span class="number">1</span>);\n<span class="keyword">const</span> capitalized2 = str[<span class="number">0</span>].<span class="function">toUpperCase</span>() + str.<span class="function">substring</span>(<span class="number">1</span>);\n<span class="keyword">const</span> capitalized3 = str.<span class="function">replace</span>(/^./, str[<span class="number">0</span>].<span class="function">toUpperCase</span>());`,
  demo: () => {
    const str = 'hello world';
    const capitalized1 = str.charAt(0).toUpperCase() + str.slice(1);
    const capitalized2 = str[0].toUpperCase() + str.substring(1);
    const capitalized3 = str.replace(/^./, str[0].toUpperCase());
    return `Original: "${str}"\nMethod 1: "${capitalized1}"\nMethod 2: "${capitalized2}"\nMethod 3: "${capitalized3}"`;
  }
},

{
  id: 40,
  title: "Check if Object is Empty",
  category: "objects",
  description: "Different ways to check if an object has no properties.",
  code: `<span class="keyword">const</span> obj = {};\n<span class="keyword">const</span> isEmpty1 = <span class="function">Object.keys</span>(obj).length === <span class="number">0</span>;\n<span class="keyword">const</span> isEmpty2 = <span class="function">JSON.stringify</span>(obj) === '<span class="string">{}</span>';\n<span class="keyword">const</span> isEmpty3 = <span class="function">Object.entries</span>(obj).length === <span class="number">0</span>;`,
  demo: () => {
    const obj = {};
    const isEmpty1 = Object.keys(obj).length === 0;
    const isEmpty2 = JSON.stringify(obj) === '{}';
    const isEmpty3 = Object.entries(obj).length === 0;
    return `Object.keys: ${isEmpty1}\nJSON.stringify: ${isEmpty2}\nObject.entries: ${isEmpty3}`;
  }
},

{
  id: 41,
  title: "Sleep Function",
  category: "async",
  description: "Create a sleep/delay function using promises.",
  code: `<span class="keyword">const</span> <span class="function">sleep</span> = (ms) => <span class="keyword">new</span> <span class="function">Promise</span>(resolve => <span class="function">setTimeout</span>(resolve, ms));\n\n<span class="keyword">async function</span> <span class="function">example</span>() {\n  <span class="function">console.log</span>('<span class="string">Before sleep</span>');\n  <span class="keyword">await</span> <span class="function">sleep</span>(<span class="number">2000</span>);\n  <span class="function">console.log</span>('<span class="string">After sleep</span>');\n}`,
  demo: () => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    return `Sleep function created\nUsage: await sleep(1000)\nPauses execution for specified milliseconds`;
  }
},

{
  id: 42,
  title: "Get Object Property Safely",
  category: "objects",
  description: "Safely access nested object properties without errors.",
  code: `<span class="keyword">const</span> user = { profile: { name: '<span class="string">John</span>' } };\n<span class="keyword">const</span> name1 = user?.profile?.name;\n<span class="keyword">const</span> name2 = user && user.profile && user.profile.name;\n<span class="keyword">const</span> name3 = (user.profile || {}).name;`,
  demo: () => {
    const user = { profile: { name: 'John' } };
    const name1 = user?.profile?.name;
    const name2 = user && user.profile && user.profile.name;
    const name3 = (user.profile || {}).name;
    return `Optional chaining: ${name1}\nLogical AND: ${name2}\nDefault object: ${name3}`;
  }
},

{
  id: 43,
  title: "Reverse String",
  category: "strings",
  description: "Multiple ways to reverse a string.",
  code: `<span class="keyword">const</span> str = '<span class="string">hello</span>';\n<span class="keyword">const</span> reversed1 = str.<span class="function">split</span>('<span class="string"></span>').<span class="function">reverse</span>().<span class="function">join</span>('<span class="string"></span>');\n<span class="keyword">const</span> reversed2 = [...str].<span class="function">reverse</span>().<span class="function">join</span>('<span class="string"></span>');\n<span class="keyword">const</span> reversed3 = str.<span class="function">split</span>('<span class="string"></span>').<span class="function">reduce</span>((rev, char) => char + rev, '<span class="string"></span>');`,
  demo: () => {
    const str = 'hello';
    const reversed1 = str.split('').reverse().join('');
    const reversed2 = [...str].reverse().join('');
    const reversed3 = str.split('').reduce((rev, char) => char + rev, '');
    return `Original: "${str}"\nMethod 1: "${reversed1}"\nMethod 2: "${reversed2}"\nMethod 3: "${reversed3}"`;
  }
},

{
  id: 44,
  title: "Count Array Elements",
  category: "arrays",
  description: "Count occurrences of elements in an array.",
  code: `<span class="keyword">const</span> fruits = ['<span class="string">apple</span>', '<span class="string">banana</span>', '<span class="string">apple</span>', '<span class="string">orange</span>', '<span class="string">banana</span>', '<span class="string">apple</span>'];\n<span class="keyword">const</span> count = fruits.<span class="function">reduce</span>((acc, fruit) => {\n  acc[fruit] = (acc[fruit] || <span class="number">0</span>) + <span class="number">1</span>;\n  <span class="keyword">return</span> acc;\n}, {});`,
  demo: () => {
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const count = fruits.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {});
    return JSON.stringify(count, null, 2);
  }
},

{
  id: 45,
  title: "Check if String is Palindrome",
  category: "strings",
  description: "Check if a string reads the same forwards and backwards.",
  code: `<span class="keyword">const</span> <span class="function">isPalindrome</span> = (str) => {\n  <span class="keyword">const</span> cleaned = str.<span class="function">toLowerCase</span>().<span class="function">replace</span>(/[^a-z0-9]/g, '<span class="string"></span>');\n  <span class="keyword">return</span> cleaned === cleaned.<span class="function">split</span>('<span class="string"></span>').<span class="function">reverse</span>().<span class="function">join</span>('<span class="string"></span>');\n};\n<span class="function">console.log</span>(<span class="function">isPalindrome</span>('<span class="string">A man a plan a canal Panama</span>'));`,
  demo: () => {
    const isPalindrome = (str) => {
      const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleaned === cleaned.split('').reverse().join('');
    };
    return `"racecar": ${isPalindrome('racecar')}\n"hello": ${isPalindrome('hello')}\n"A man a plan a canal Panama": ${isPalindrome('A man a plan a canal Panama')}`;
  }
},

{
  id: 46,
  title: "Get Random Number in Range",
  category: "utilities",
  description: "Generate random numbers within a specific range.",
  code: `<span class="keyword">const</span> <span class="function">randomBetween</span> = (min, max) => <span class="function">Math.floor</span>(<span class="function">Math.random</span>() * (max - min + <span class="number">1</span>)) + min;\n<span class="keyword">const</span> <span class="function">randomFloat</span> = (min, max) => <span class="function">Math.random</span>() * (max - min) + min;\n<span class="function">console.log</span>(<span class="function">randomBetween</span>(<span class="number">1</span>, <span class="number">10</span>));`,
  demo: () => {
    const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomFloat = (min, max) => Math.random() * (max - min) + min;
    return `Random int (1-10): ${randomBetween(1, 10)}\nRandom float (1-10): ${randomFloat(1, 10).toFixed(2)}`;
  }
},

{
  id: 47,
  title: "Format Numbers with Commas",
  category: "utilities",
  description: "Add thousand separators to numbers.",
  code: `<span class="keyword">const</span> num = <span class="number">1234567</span>;\n<span class="keyword">const</span> formatted1 = num.<span class="function">toLocaleString</span>();\n<span class="keyword">const</span> formatted2 = num.<span class="function">toString</span>().<span class="function">replace</span>(/\\B(?=(\\d{3})+(?!\\d))/g, '<span class="string">,</span>');\n<span class="keyword">const</span> formatted3 = <span class="keyword">new</span> <span class="function">Intl.NumberFormat</span>().<span class="function">format</span>(num);`,
  demo: () => {
    const num = 1234567;
    const formatted1 = num.toLocaleString();
    const formatted2 = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formatted3 = new Intl.NumberFormat().format(num);
    return `Original: ${num}\ntoLocaleString: ${formatted1}\nRegex: ${formatted2}\nIntl.NumberFormat: ${formatted3}`;
  }
},

{
  id: 48,
  title: "Chunk Array",
  category: "arrays",
  description: "Split an array into smaller arrays of specified size.",
  code: `<span class="keyword">const</span> <span class="function">chunk</span> = (arr, size) => {\n  <span class="keyword">const</span> chunks = [];\n  <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < arr.length; i += size) {\n    chunks.<span class="function">push</span>(arr.<span class="function">slice</span>(i, i + size));\n  }\n  <span class="keyword">return</span> chunks;\n};\n<span class="function">console.log</span>(<span class="function">chunk</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>], <span class="number">2</span>));`,
  demo: () => {
    const chunk = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };
    const result = chunk([1, 2, 3, 4, 5, 6, 7], 3);
    return JSON.stringify(result);
  }
},

{
  id: 49,
  title: "Merge Objects",
  category: "objects",
  description: "Different ways to merge multiple objects.",
  code: `<span class="keyword">const</span> obj1 = { a: <span class="number">1</span>, b: <span class="number">2</span> };\n<span class="keyword">const</span> obj2 = { b: <span class="number">3</span>, c: <span class="number">4</span> };\n<span class="keyword">const</span> merged1 = { ...obj1, ...obj2 };\n<span class="keyword">const</span> merged2 = <span class="function">Object.assign</span>({}, obj1, obj2);\n<span class="keyword">const</span> merged3 = <span class="function">Object.assign</span>(obj1, obj2);`,
  demo: () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merged1 = { ...obj1, ...obj2 };
    const merged2 = Object.assign({}, obj1, obj2);
    return `obj1: ${JSON.stringify(obj1)}\nobj2: ${JSON.stringify(obj2)}\nSpread: ${JSON.stringify(merged1)}\nObject.assign: ${JSON.stringify(merged2)}`;
  }
},

{
  id: 50,
  title: "URL Parameters to Object",
  category: "utilities",
  description: "Convert URL search parameters to an object.",
  code: `<span class="keyword">const</span> url = '<span class="string">?name=John&age=30&city=NYC</span>';\n<span class="keyword">const</span> params1 = <span class="keyword">new</span> <span class="function">URLSearchParams</span>(url);\n<span class="keyword">const</span> obj1 = <span class="function">Object.fromEntries</span>(params1);\n<span class="keyword">const</span> obj2 = [...params1].<span class="function">reduce</span>((acc, [k, v]) => ({...acc, [k]: v}), {});`,
  demo: () => {
    const url = '?name=John&age=30&city=NYC';
    const params1 = new URLSearchParams(url);
    const obj1 = Object.fromEntries(params1);
    return `URL: ${url}\nParsed: ${JSON.stringify(obj1)}`;
  }
},

{
  id: 51,
  title: "Truncate String",
  category: "strings",
  description: "Truncate a string to a specified length with ellipsis.",
  code: `<span class="keyword">const</span> <span class="function">truncate</span> = (str, length) => {\n  <span class="keyword">return</span> str.length > length ? str.<span class="function">slice</span>(<span class="number">0</span>, length) + '<span class="string">...</span>' : str;\n};\n<span class="keyword">const</span> text = '<span class="string">This is a very long sentence</span>';\n<span class="function">console.log</span>(<span class="function">truncate</span>(text, <span class="number">10</span>));`,
  demo: () => {
    const truncate = (str, length) => {
      return str.length > length ? str.slice(0, length) + '...' : str;
    };
    const text = 'This is a very long sentence that needs truncation';
    return `Original: "${text}"\nTruncated (20): "${truncate(text, 20)}"`;
  }
},

{
  id: 52,
  title: "Convert to Title Case",
  category: "strings",
  description: "Convert string to title case (capitalize each word).",
  code: `<span class="keyword">const</span> <span class="function">toTitleCase</span> = (str) => {\n  <span class="keyword">return</span> str.<span class="function">toLowerCase</span>().<span class="function">split</span>('<span class="string"> </span>').<span class="function">map</span>(word => \n    word.<span class="function">charAt</span>(<span class="number">0</span>).<span class="function">toUpperCase</span>() + word.<span class="function">slice</span>(<span class="number">1</span>)\n  ).<span class="function">join</span>('<span class="string"> </span>');\n};\n<span class="function">console.log</span>(<span class="function">toTitleCase</span>('<span class="string">hello world</span>'));`,
  demo: () => {
    const toTitleCase = (str) => {
      return str.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    };
    return `"hello world" → "${toTitleCase('hello world')}"\n"JAVASCRIPT TRICKS" → "${toTitleCase('JAVASCRIPT TRICKS')}"`;
  }
},

{
  id: 53,
  title: "Sum Array Values",
  category: "arrays",
  description: "Calculate the sum of all values in an array.",
  code: `<span class="keyword">const</span> numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];\n<span class="keyword">const</span> sum1 = numbers.<span class="function">reduce</span>((acc, num) => acc + num, <span class="number">0</span>);\n<span class="keyword">const</span> sum2 = numbers.<span class="function">reduce</span>((a, b) => a + b);\n<span class="keyword">const</span> sum3 = <span class="function">eval</span>(numbers.<span class="function">join</span>('<span class="string">+</span>'));`,
  demo: () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum1 = numbers.reduce((acc, num) => acc + num, 0);
    const sum2 = numbers.reduce((a, b) => a + b);
    const sum3 = eval(numbers.join('+'));
    return `Array: [${numbers}]\nreduce with initial: ${sum1}\nreduce without initial: ${sum2}\neval method: ${sum3}`;
  }
},

{
  id: 54,
  title: "Remove Falsy Values",
  category: "arrays",
  description: "Filter out falsy values from an array.",
  code: `<span class="keyword">const</span> arr = [<span class="number">0</span>, <span class="number">1</span>, <span class="keyword">false</span>, <span class="number">2</span>, '<span class="string"></span>', <span class="number">3</span>, <span class="keyword">null</span>, <span class="keyword">undefined</span>, <span class="number">4</span>];\n<span class="keyword">const</span> filtered1 = arr.<span class="function">filter</span>(<span class="function">Boolean</span>);\n<span class="keyword">const</span> filtered2 = arr.<span class="function">filter</span>(item => item);\n<span class="keyword">const</span> filtered3 = arr.<span class="function">filter</span>(item => !!item);`,
  demo: () => {
    const arr = [0, 1, false, 2, '', 3, null, undefined, 4];
    const filtered1 = arr.filter(Boolean);
    const filtered2 = arr.filter(item => item);
    const filtered3 = arr.filter(item => !!item);
    return `Original: [${arr.map(v => v === '' ? "''" : v === null ? 'null' : v === undefined ? 'undefined' : v)}]\nFiltered: [${filtered1}]`;
  }
},

{
  id: 55,
  title: "Get Max/Min from Array",
  category: "arrays",
  description: "Find maximum and minimum values in an array.",
  code: `<span class="keyword">const</span> numbers = [<span class="number">3</span>, <span class="number">1</span>, <span class="number">4</span>, <span class="number">1</span>, <span class="number">5</span>, <span class="number">9</span>];\n<span class="keyword">const</span> max1 = <span class="function">Math.max</span>(...numbers);\n<span class="keyword">const</span> min1 = <span class="function">Math.min</span>(...numbers);\n<span class="keyword">const</span> max2 = numbers.<span class="function">reduce</span>((a, b) => <span class="function">Math.max</span>(a, b));\n<span class="keyword">const</span> min2 = numbers.<span class="function">reduce</span>((a, b) => <span class="function">Math.min</span>(a, b));`,
  demo: () => {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
    const max1 = Math.max(...numbers);
    const min1 = Math.min(...numbers);
    const max2 = numbers.reduce((a, b) => Math.max(a, b));
    const min2 = numbers.reduce((a, b) => Math.min(a, b));
    return `Array: [${numbers}]\nMax (spread): ${max1}\nMin (spread): ${min1}\nMax (reduce): ${max2}\nMin (reduce): ${min2}`;
  }
},

{
  id: 56,
  title: "Curry Function",
  category: "functions",
  description: "Transform a function to accept arguments one at a time.",
  code: `<span class="keyword">const</span> <span class="function">curry</span> = (fn) => {\n  <span class="keyword">return</span> <span class="keyword">function</span> curried(...args) {\n    <span class="keyword">if</span> (args.length >= fn.length) {\n      <span class="keyword">return</span> fn.<span class="function">apply</span>(<span class="keyword">this</span>, args);\n    }\n    <span class="keyword">return</span> (...nextArgs) => curried(...args, ...nextArgs);\n  };\n};\n<span class="keyword">const</span> <span class="function">add</span> = (a, b, c) => a + b + c;\n<span class="keyword">const</span> curriedAdd = <span class="function">curry</span>(<span class="function">add</span>);`,
  demo: () => {
    const curry = (fn) => {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn.apply(this, args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
      };
    };
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    return `add(1, 2, 3) = ${add(1, 2, 3)}\ncurriedAdd(1)(2)(3) = ${curriedAdd(1)(2)(3)}\ncurriedAdd(1, 2)(3) = ${curriedAdd(1, 2)(3)}`;
  }
},

{
  id: 57,
  title: "Memoization",
  category: "performance",
  description: "Cache function results to improve performance.",
  code: `<span class="keyword">const</span> <span class="function">memoize</span> = (fn) => {\n  <span class="keyword">const</span> cache = {};\n  <span class="keyword">return</span> (...args) => {\n    <span class="keyword">const</span> key = <span class="function">JSON.stringify</span>(args);\n    <span class="keyword">if</span> (cache[key]) {\n      <span class="keyword">return</span> cache[key];\n    }\n    <span class="keyword">const</span> result = fn(...args);\n    cache[key] = result;\n    <span class="keyword">return</span> result;\n  };\n};`,
  demo: () => {
    const memoize = (fn) => {
      const cache = {};
      return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
          return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
      };
    };
    const fibonacci = memoize((n) => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
    return `fibonacci(10) = ${fibonacci(10)}\nCached for better performance!`;
  }
},

{
  id: 58,
  title: "Check Data Types",
  category: "utilities",
  description: "Reliable way to check JavaScript data types.",
  code: `<span class="keyword">const</span> <span class="function">getType</span> = (value) => <span class="function">Object.prototype.toString.call</span>(value).<span class="function">slice</span>(<span class="number">8</span>, <span class="number">-1</span>).<span class="function">toLowerCase</span>();\n\n<span class="function">console.log</span>(<span class="function">getType</span>([]));<span class="comment"> // 'array'</span>\n<span class="function">console.log</span>(<span class="function">getType</span>({}));<span class="comment"> // 'object'</span>\n<span class="function">console.log</span>(<span class="function">getType</span>(<span class="keyword">null</span>));<span class="comment"> // 'null'</span>`,
  demo: () => {
    const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    return `[] → ${getType([])}\n{} → ${getType({})}\nnull → ${getType(null)}\n"string" → ${getType("string")}\n42 → ${getType(42)}\ntrue → ${getType(true)}`;
  }
},

{
  id: 59,
  title: "Format Date",
  category: "utilities",
  description: "Format dates in different ways.",
  code: `<span class="keyword">const</span> date = <span class="keyword">new</span> <span class="function">Date</span>();\n<span class="keyword">const</span> formatted1 = date.<span class="function">toLocaleDateString</span>();\n<span class="keyword">const</span> formatted2 = date.<span class="function">toISOString</span>().<span class="function">split</span>('<span class="string">T</span>')[<span class="number">0</span>];\n<span class="keyword">const</span> formatted3 = <span class="keyword">new</span> <span class="function">Intl.DateTimeFormat</span>('<span class="string">en-US</span>').<span class="function">format</span>(date);\n<span class="keyword">const</span> formatted4 = \`\${date.<span class="function">getMonth</span>() + <span class="number">1</span>}/\${date.<span class="function">getDate</span>()}/\${date.<span class="function">getFullYear</span>()}\`;`,
  demo: () => {
    const date = new Date();
    const formatted1 = date.toLocaleDateString();
    const formatted2 = date.toISOString().split('T')[0];
    const formatted3 = new Intl.DateTimeFormat('en-US').format(date);
    const formatted4 = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return `toLocaleDateString: ${formatted1}\nISO format: ${formatted2}\nIntl.DateTimeFormat: ${formatted3}\nCustom format: ${formatted4}`;
  }
},

{
    id: 60,
    title: "Detect Dark Mode",
    category: "utilities",
    description: "Check if the user prefers dark mode using media query.",
    code: `const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;`,
    demo: () => {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return `Dark mode: ${isDarkMode}`;
    }
  },
  {
    id: 61,
    title: "Get All Indices",
    category: "arrays",
    description: "Find all indices of a value in an array.",
    code: `const arr = [1, 2, 3, 2, 4, 2];
const indices = arr.reduce((acc, val, i) => val === 2 ? [...acc, i] : acc, []);`,
    demo: () => {
      const arr = [1, 2, 3, 2, 4, 2];
      const indices = arr.reduce((acc, val, i) => val === 2 ? [...acc, i] : acc, []);
      return `Indices of 2: [${indices}]`;
    }
  },
  {
    id: 62,
    title: "Copy Text to Clipboard",
    category: "utilities",
    description: "Copy a string to the clipboard using the Clipboard API.",
    code: `navigator.clipboard.writeText('Copied text');`,
    demo: () => {
      return "navigator.clipboard.writeText('Copied text')";
    }
  },
  {
    id: 63,
    title: "Remove Last Element Conditionally",
    category: "arrays",
    description: "Remove the last item in an array only if it meets a condition.",
    code: `const arr = [1, 2, 3];
if (arr[arr.length - 1] === 3) arr.pop();`,
    demo: () => {
      const arr = [1, 2, 3];
      if (arr[arr.length - 1] === 3) arr.pop();
      return `Modified array: [${arr}]`;
    }
  },
  {
    id: 64,
    title: "Format Date as YYYY-MM-DD",
    category: "date",
    description: "Create a formatted date string.",
    code: `const today = new Date();
const formatted = today.toISOString().split('T')[0];`,
    demo: () => {
      const today = new Date();
      const formatted = today.toISOString().split('T')[0];
      return `Formatted: ${formatted}`;
    }
  },
  {
    id: 65,
    title: "Generate UUID",
    category: "utilities",
    description: "Generate a universally unique identifier (UUID).",
    code: `const uuid = crypto.randomUUID();`,
    demo: () => {
      return `UUID: ${crypto.randomUUID()}`;
    }
  },
  {
    id: 66,
    title: "Count Occurrences in Array",
    category: "arrays",
    description: "Count how many times each item appears in an array.",
    code: `const arr = ['a', 'b', 'a'];
const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});`,
    demo: () => {
      const arr = ['a', 'b', 'a'];
      const count = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      return JSON.stringify(count);
    }
  },
  {
    id: 67,
    title: "Add Days to Date",
    category: "date",
    description: "Add a number of days to a given date.",
    code: `const date = new Date();
date.setDate(date.getDate() + 5);`,
    demo: () => {
      const date = new Date();
      date.setDate(date.getDate() + 5);
      return `Date + 5 days: ${date.toDateString()}`;
    }
  },
  {
    id: 68,
    title: "Toggle Boolean",
    category: "utilities",
    description: "Toggle a boolean value with ! operator.",
    code: `let isOn = true;
isOn = !isOn;`,
    demo: () => {
      let isOn = true;
      isOn = !isOn;
      return `Toggled: ${isOn}`;
    }
  },
  {
    id: 69,
    title: "Capitalize Each Word",
    category: "strings",
    description: "Capitalize the first letter of every word in a string.",
    code: `const title = 'hello world';
const result = title.replace(/\b\w/g, c => c.toUpperCase());`,
    demo: () => {
      const title = 'hello world';
      const result = title.replace(/\b\w/g, c => c.toUpperCase());
      return result;
    }
  },
  {
    id: 70,
    title: "Check for Empty Object",
    category: "objects",
    description: "Verify whether an object has no properties.",
    code: `const obj = {};
const isEmpty = Object.keys(obj).length === 0;`,
    demo: () => {
      const obj = {};
      const isEmpty = Object.keys(obj).length === 0;
      return `Is empty: ${isEmpty}`;
    }
  },

  {
    id: 71,
    title: "Array Union",
    category: "arrays",
    description: "Combine two arrays and remove duplicates.",
    code: `const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const union = [...new Set([...arr1, ...arr2])];`,
    demo: () => {
      const arr1 = [1, 2, 3];
      const arr2 = [3, 4, 5];
      const union = [...new Set([...arr1, ...arr2])];
      return `Union: [${union}]`;
    }
  },
  {
    id: 72,
    title: "Convert Object to Array of Values",
    category: "objects",
    description: "Extract all values from an object into an array.",
    code: `const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);`,
    demo: () => {
      const obj = { a: 1, b: 2, c: 3 };
      const values = Object.values(obj);
      return `Values: [${values}]`;
    }
  },
  {
    id: 73,
    title: "Convert Object to Array of Keys",
    category: "objects",
    description: "Extract all keys from an object into an array.",
    code: `const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);`,
    demo: () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = Object.keys(obj);
      return `Keys: [${keys.map(k => `'${k}'`).join(', ')}]`;
    }
  },
  {
    id: 74,
    title: "Short-Circuit Assignment",
    category: "utilities",
    description: "Assign a value to a variable if it's falsy (||) or truthy (&&).",
    code: `let value = null;
value ||= 'default'; // Assigns 'default' if value is falsy

let settings = { theme: 'dark' };
settings.theme &&= 'light'; // Assigns 'light' if theme is truthy`,
    demo: () => {
      let value = null;
      value ||= 'default';
      let settings = { theme: 'dark' };
      settings.theme &&= 'light';
      return `Value: ${value}\nTheme: ${settings.theme}`;
    }
  },
  {
    id: 75,
    title: "Check if Number is Even/Odd",
    category: "utilities",
    description: "Determine if a number is even or odd using the modulo operator.",
    code: `const num = 5;
const isEven = num % 2 === 0;
const isOdd = num % 2 !== 0;`,
    demo: () => {
      const num = 5;
      const isEven = num % 2 === 0;
      const isOdd = num % 2 !== 0;
      return `${num} is Even: ${isEven}\n${num} is Odd: ${isOdd}`;
    }
  },
  {
    id: 76,
    title: "Get Unique Array of Objects by Property",
    category: "arrays",
    description: "Filter an array of objects to keep only unique ones based on a specific property.",
    code: `const arr = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }];
const unique = [...new Map(arr.map(item => [item.id, item])).values()];`,
    demo: () => {
      const arr = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }];
      const unique = [...new Map(arr.map(item => [item.id, item])).values()];
      return JSON.stringify(unique, null, 2);
    }
  },
  {
    id: 77,
    title: "Measure Execution Time",
    category: "performance",
    description: "Measure how long a function or code block takes to execute.",
    code: `const start = performance.now();
// Your code here
const end = performance.now();
const timeTaken = end - start;`,
    demo: () => {
      const start = performance.now();
      for (let i = 0; i < 1000000; i++) {
        // simulate some work
      }
      const end = performance.now();
      const timeTaken = (end - start).toFixed(2);
      return `Time taken: ${timeTaken} ms`;
    }
  },
  {
    id: 78,
    title: "Simple HTTP Request (Fetch)",
    category: "async",
    description: "Make a basic HTTP GET request using the Fetch API.",
    code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    demo: () => {
      return "Simulated fetch request to a dummy API. Check console for actual usage.";
    }
  },
  {
    id: 79,
    title: "Convert NodeList to Array",
    category: "dom",
    description: "Convert a DOM NodeList (e.g., from querySelectorAll) into a true Array.",
    code: `const elements = document.querySelectorAll('.item');
const elementsArray = Array.from(elements);
// or: const elementsArray = [...elements];`,
    demo: () => {
      return "Demonstrates converting a NodeList to an Array. Open console for more.";
    }
  },
  {
    id: 80,
    title: "Get Current URL Parameters",
    category: "utilities",
    description: "Parse the current URL's query parameters into an object.",
    code: `const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const name = params.get('name');`,
    demo: () => {
      const dummyUrl = "?id=123&name=test";
      const params = new URLSearchParams(dummyUrl);
      const id = params.get('id');
      const name = params.get('name');
      return `URL Parameters (dummy):\nID: ${id}\nName: ${name}`;
    }
  },
  {
    id: 81,
    title: "Check if Property Exists on Object",
    category: "objects",
    description: "Verify the existence of a property on an object.",
    code: `const obj = { a: 1, b: 2 };
const hasPropA = 'a' in obj;
const hasPropC = obj.hasOwnProperty('c');`,
    demo: () => {
      const obj = { a: 1, b: 2 };
      const hasPropA = 'a' in obj;
      const hasPropC = obj.hasOwnProperty('c');
      return `Has 'a': ${hasPropA}\nHas 'c': ${hasPropC}`;
    }
  },
  {
    id: 82,
    title: "Get Date Difference (Days)",
    category: "date",
    description: "Calculate the number of days between two dates.",
    code: `const date1 = new Date('2023-01-01');
const date2 = new Date('2023-01-10');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));`,
    demo: () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-10');
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `Days between: ${diffDays}`;
    }
  },
  {
    id: 83,
    title: "Array.some() for Existence Check",
    category: "arrays",
    description: "Check if at least one element in an array satisfies a condition.",
    code: `const numbers = [1, 5, 10, 15];
const hasEven = numbers.some(num => num % 2 === 0);
const hasNegative = numbers.some(num => num < 0);`,
    demo: () => {
      const numbers = [1, 5, 10, 15];
      const hasEven = numbers.some(num => num % 2 === 0);
      const hasNegative = numbers.some(num => num < 0);
      return `Has even number: ${hasEven}\nHas negative number: ${hasNegative}`;
    }
  },
  {
    id: 84,
    title: "Array.every() for All Check",
    category: "arrays",
    description: "Check if all elements in an array satisfy a condition.",
    code: `const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
const allPositive = numbers.every(num => num > 0);`,
    demo: () => {
      const numbers = [2, 4, 6, 8];
      const allEven = numbers.every(num => num % 2 === 0);
      const allPositive = numbers.every(num => num > 0);
      return `All even: ${allEven}\nAll positive: ${allPositive}`;
    }
  },
  {
    id: 85,
    title: "Convert RGB to Hex",
    category: "utilities",
    description: "Convert RGB color values to their hexadecimal equivalent.",
    code: `function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const hexColor = rgbToHex(255, 99, 71);`,
    demo: () => {
      function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }
      const hexColor = rgbToHex(255, 99, 71);
      return `RGB(255, 99, 71) → ${hexColor}`;
    }
  },
  {
    id: 86,
    title: "Detect AdBlock",
    category: "utilities",
    description: "A common trick to detect if an ad blocker is active.",
    code: `const testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox'; // Common adblock class
document.body.appendChild(testAd);
window.setTimeout(() => {
  const isAdBlocked = testAd.offsetHeight === 0;
  console.log('AdBlock detected:', isAdBlocked);
  document.body.removeChild(testAd);
}, 100);`,
    demo: () => {
      return "This trick attempts to detect AdBlockers. For accurate testing, run on a page with an ad blocker enabled.";
    }
  },
  {
    id: 87,
    title: "URL Validation (Simple)",
    category: "strings",
    description: "A basic regex to validate if a string is a URL.",
    code: `const urlRegex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/gi;
const isValid = urlRegex.test('https://example.com');`,
    demo: () => {
      const urlRegex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/gi;
      const test1 = 'https://example.com';
      const test2 = 'not-a-url';
      return `"${test1}" is valid: ${urlRegex.test(test1)}\n"${test2}" is valid: ${urlRegex.test(test2)}`;
    }
  },
  {
    id: 88,
    title: "Get Value from Input",
    category: "dom",
    description: "Quickly get the value of an input element.",
    code: `const inputElement = document.getElementById('myInput');
const value = inputElement.value;`,
    demo: () => {
      const inputElement = document.createElement('input');
      inputElement.value = 'Hello Demo';
      return `Input value: "${inputElement.value}"`;
    }
  },
  {
    id: 89,
    title: "Add/Remove Class",
    category: "dom",
    description: "Efficiently add or remove a CSS class from an element.",
    code: `const element = document.getElementById('myElement');
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('highlight');`,
    demo: () => {
      return "Uses element.classList methods to add, remove, and toggle classes.";
    }
  },
  {
    id: 90,
    title: "Check if Element has Class",
    category: "dom",
    description: "Check if an element has a specific CSS class.",
    code: `const element = document.getElementById('myElement');
const hasClass = element.classList.contains('active');`,
    demo: () => {
      const tempDiv = document.createElement('div');
      tempDiv.classList.add('test-class');
      const hasClass = tempDiv.classList.contains('test-class');
      const hasOtherClass = tempDiv.classList.contains('another-class');
      return `Has 'test-class': ${hasClass}\nHas 'another-class': ${hasOtherClass}`;
    }
  },
  {
    id: 91,
    title: "Convert Celsius to Fahrenheit",
    category: "utilities",
    description: "Convert temperature from Celsius to Fahrenheit.",
    code: `const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;`,
    demo: () => {
      const celsius = 25;
      const fahrenheit = (celsius * 9/5) + 32;
      return `${celsius}°C is ${fahrenheit}°F`;
    }
  },
  {
    id: 92,
    title: "Convert Fahrenheit to Celsius",
    category: "utilities",
    description: "Convert temperature from Fahrenheit to Celsius.",
    code: `const fahrenheit = 77;
const celsius = (fahrenheit - 32) * 5/9;`,
    demo: () => {
      const fahrenheit = 77;
      const celsius = (fahrenheit - 32) * 5/9;
      return `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    }
  },
  {
    id: 93,
    title: "Get Browser Name",
    category: "utilities",
    description: "Determine the user's browser name.",
    code: `const userAgent = navigator.userAgent;
let browserName;
if (userAgent.includes('Firefox')) {
  browserName = 'Firefox';
} else if (userAgent.includes('Chrome')) {
  browserName = 'Chrome';
} else if (userAgent.includes('Safari')) {
  browserName = 'Safari';
} else {
  browserName = 'Unknown';
}`,
    demo: () => {
      const userAgent = navigator.userAgent;
      let browserName;
      if (userAgent.includes('Firefox')) {
        browserName = 'Firefox';
      } else if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) { // Edge also includes Chrome
        browserName = 'Chrome';
      } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) { // Safari also includes Chrome
        browserName = 'Safari';
      } else if (userAgent.includes('Edg')) {
        browserName = 'Edge';
      } else {
        browserName = 'Unknown';
      }
      return `Detected Browser: ${browserName}`;
    }
  },
  {
    id: 94,
    title: "Check Online/Offline Status",
    category: "utilities",
    description: "Determine if the browser is currently online or offline.",
    code: `const isOnline = navigator.onLine;`,
    demo: () => {
      const isOnline = navigator.onLine;
      return `Browser is online: ${isOnline}`;
    }
  },
  {
    id: 95,
    title: "Scroll to Top Smoothly",
    category: "dom",
    description: "Scroll the window to the top with a smooth animation.",
    code: `window.scrollTo({ top: 0, behavior: 'smooth' });`,
    demo: () => {
      return "Scrolls the window to the top smoothly. (Requires page scrolling to observe)";
    }
  },
  {
    id: 96,
    title: "Redirect to URL",
    category: "utilities",
    description: "Redirect the user to a different URL.",
    code: `window.location.href = 'https://www.example.com';
// Or: window.location.replace('https://www.example.com'); (no back button history)`,
    demo: () => {
      return "Simulates a redirect. (Will not actually redirect for security)";
    }
  },
  {
    id: 97,
    title: "Set/Get Cookie",
    category: "utilities",
    description: "Basic functions to set and get cookies.",
    code: `// Set a cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
const user = getCookie('username');`,
    demo: () => {
      document.cookie = "demoUser=DemoUser; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
      function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
      const user = getCookie('demoUser');
      return `Cookie 'demoUser' set and retrieved: ${user}`;
    }
  },
  {
    id: 98,
    title: "Check Device Type",
    category: "utilities",
    description: "Determine if the user is on a mobile device.",
    code: `const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);`,
    demo: () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      return `Is mobile device: ${isMobile}`;
    }
  },
  {
    id: 99,
    title: "Create Downloadable File",
    category: "dom",
    description: "Programmatically create and trigger a file download.",
    code: `function downloadFile(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
// Usage: downloadFile('my-notes.txt', 'Hello, this is a test.');`,
    demo: () => {
      return "Creates a downloadable file (won't trigger in this demo for security reasons). Check console for example usage.";
    }
  },
  {
    id: 100,
    title: "Group Array of Objects by Property",
    category: "arrays",
    description: "Group elements of an array of objects based on a specific property.",
    code: `const products = [
  { category: 'Electronics', name: 'TV' },
  { category: 'Books', name: 'Novel' },
  { category: 'Electronics', name: 'Phone' }
];
const grouped = products.reduce((acc, item) => {
  (acc[item.category] = acc[item.category] || []).push(item);
  return acc;
}, {});`,
    demo: () => {
      const products = [
        { category: 'Electronics', name: 'TV' },
        { category: 'Books', name: 'Novel' },
        { category: 'Electronics', name: 'Phone' },
        { category: 'Books', name: 'Textbook' }
      ];
      const grouped = products.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
      }, {});
      return JSON.stringify(grouped, null, 2);
    }
  },
  {
    id: 101,
    title: "Get URL Origin",
    category: "utilities",
    description: "Extract the origin (protocol + hostname + port) from a URL.",
    code: `const url = new URL('https://www.example.com:8080/path?query=1');
const origin = url.origin;`,
    demo: () => {
      const url = new URL('https://www.example.com:8080/path?query=1');
      const origin = url.origin;
      return `URL: ${url.href}\nOrigin: ${origin}`;
    }
  },
  {
    id: 102,
    title: "Safe JSON Parse",
    category: "utilities",
    description: "Parse JSON string safely, handling potential errors.",
    code: `function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("JSON parsing error:", e);
    return null;
  }
}
const validJson = safeJSONParse('{"a": 1}');
const invalidJson = safeJSONParse('{a: 1}');`,
    demo: () => {
      function safeJSONParse(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return `Error: Invalid JSON`;
        }
      }
      const validJson = safeJSONParse('{"a": 1}');
      const invalidJson = safeJSONParse('{a: 1}');
      return `Valid JSON: ${JSON.stringify(validJson)}\nInvalid JSON: ${invalidJson}`;
    }
  },
  {
    id: 103,
    title: "Remove Specific Value from Array",
    category: "arrays",
    description: "Remove all occurrences of a specific value from an array.",
    code: `const arr = [1, 2, 3, 2, 4];
const filteredArr = arr.filter(item => item !== 2);`,
    demo: () => {
      const arr = [1, 2, 3, 2, 4, 2];
      const filteredArr = arr.filter(item => item !== 2);
      return `Original: [${arr}]\nFiltered: [${filteredArr}]`;
    }
  },
  {
    id: 104,
    title: "Pad String",
    category: "strings",
    description: "Pad a string with another string until it reaches a desired length.",
    code: `const str = '5';
const paddedLeft = str.padStart(3, '0'); // '005'
const paddedRight = str.padEnd(5, '-');  // '5----'`,
    demo: () => {
      const str = '5';
      const paddedLeft = str.padStart(3, '0');
      const paddedRight = str.padEnd(5, '-');
      return `Original: "${str}"\npadStart(3, '0'): "${paddedLeft}"\npadEnd(5, '-'): "${paddedRight}"`;
    }
  },
  {
    id: 105,
    title: "Check if Date is Valid",
    category: "date",
    description: "Verify if a Date object represents a valid date.",
    code: `const validDate = new Date('2023-10-26');
const invalidDate = new Date('invalid date string');
const isValid1 = !isNaN(validDate.getTime());
const isValid2 = !isNaN(invalidDate.getTime());`,
    demo: () => {
      const validDate = new Date('2023-10-26');
      const invalidDate = new Date('invalid date string');
      const isValid1 = !isNaN(validDate.getTime());
      const isValid2 = !isNaN(invalidDate.getTime());
      return `Valid Date: ${isValid1}\nInvalid Date: ${isValid2}`;
    }
  },
  {
    id: 106,
    title: "Get Weekday Name",
    category: "date",
    description: "Get the full weekday name from a Date object.",
    code: `const today = new Date();
const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });`,
    demo: () => {
      const today = new Date();
      const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
      return `Today's weekday: ${weekday}`;
    }
  },
  {
    id: 107,
    title: "Get Month Name",
    category: "date",
    description: "Get the full month name from a Date object.",
    code: `const today = new Date();
const month = today.toLocaleDateString('en-US', { month: 'long' });`,
    demo: () => {
      const today = new Date();
      const month = today.toLocaleDateString('en-US', { month: 'long' });
      return `Current month: ${month}`;
    }
  },
  {
    id: 108,
    title: "Add Event Listener Once",
    category: "dom",
    description: "Execute an event listener only once and then remove it.",
    code: `const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Clicked once!');
}, { once: true });`,
    demo: () => {
      return "Event listener will only fire once. Check console after clicking the demo button.";
    }
  },
  {
    id: 109,
    title: "Prevent Default Event",
    category: "dom",
    description: "Stop the default action of an event (e.g., form submission, link click).",
    code: `document.getElementById('myLink').addEventListener('click', (event) => {
  event.preventDefault(); // Prevents navigation
  console.log('Link click prevented.');
});`,
    demo: () => {
      return "Prevents default event action. Try clicking a form submit button or link after adding this logic.";
    }
  },
  {
    id: 110,
    title: "Stop Event Propagation",
    category: "dom",
    description: "Stop an event from bubbling up the DOM tree.",
    code: `document.getElementById('childElement').addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents parent handlers from firing
  console.log('Child clicked, propagation stopped.');
});`,
    demo: () => {
      return "Stops event bubbling. Useful for nested elements with individual click handlers.";
    }
  },

  {
    id: 111,
    title: "Convert Object to Map",
    category: "objects",
    description: "Convert a plain JavaScript object into a Map object.",
    code: `const obj = { a: 1, b: 2 };
const myMap = new Map(Object.entries(obj));`,
    demo: () => {
      const obj = { a: 1, b: 2 };
      const myMap = new Map(Object.entries(obj));
      return `Map: ${JSON.stringify(Array.from(myMap))}`;
    }
  },
  {
    id: 112,
    title: "Convert Map to Object",
    category: "objects",
    description: "Convert a Map object back into a plain JavaScript object.",
    code: `const myMap = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(myMap);`,
    demo: () => {
      const myMap = new Map([['a', 1], ['b', 2]]);
      const obj = Object.fromEntries(myMap);
      return `Object: ${JSON.stringify(obj)}`;
    }
  },
  {
    id: 113,
    title: "Check for Mobile OS",
    category: "utilities",
    description: "Detect the operating system of a mobile device (iOS/Android).",
    code: `const userAgent = navigator.userAgent;
const isAndroid = /Android/i.test(userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(userAgent);`,
    demo: () => {
      const userAgent = navigator.userAgent;
      const isAndroid = /Android/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      return `Is Android: ${isAndroid}\nIs iOS: ${isIOS}`;
    }
  },
  {
    id: 114,
    title: "Remove Whitespace from String",
    category: "strings",
    description: "Remove all whitespace characters from a string.",
    code: `const str = '  Hello   World  ';
const noWhitespace = str.replace(/\s/g, '');`,
    demo: () => {
      const str = '  Hello   World  ';
      const noWhitespace = str.replace(/\s/g, '');
      return `Original: "${str}"\nNo Whitespace: "${noWhitespace}"`;
    }
  },
  {
    id: 115,
    title: "Check for Empty String",
    category: "strings",
    description: "Verify if a string is empty or contains only whitespace.",
    code: `const str1 = '';
const str2 = '   ';
const isEmpty1 = str1.length === 0;
const isEmpty2 = str2.trim().length === 0;`,
    demo: () => {
      const str1 = '';
      const str2 = '   ';
      const isEmpty1 = str1.length === 0;
      const isEmpty2 = str2.trim().length === 0;
      return `"${str1}" is empty: ${isEmpty1}\n"${str2}" (trimmed) is empty: ${isEmpty2}`;
    }
  },
  {
    id: 116,
    title: "Scroll to Element",
    category: "dom",
    description: "Scroll the window to bring a specific DOM element into view.",
    code: `document.getElementById('targetElement').scrollIntoView({ behavior: 'smooth', block: 'center' });`,
    demo: () => {
      return "Scrolls to a target element smoothly. (Requires a scrollable page and target element)";
    }
  },
  {
    id: 117,
    title: "Create Range of Numbers",
    category: "arrays",
    description: "Generate an array containing a range of numbers.",
    code: `const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
const numbers = range(1, 5); // [1, 2, 3, 4, 5]`,
    demo: () => {
      const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
      const numbers = range(1, 5);
      return `Range (1-5): [${numbers}]`;
    }
  },
  {
    id: 118,
    title: "Remove Element from DOM",
    category: "dom",
    description: "Remove a specific element from the document object model.",
    code: `const element = document.getElementById('elementToRemove');
element.parentNode.removeChild(element);
// or: element.remove(); (modern browsers)`,
    demo: () => {
      return "Removes a DOM element. (Won't actually remove for demo purposes)";
    }
  },
  {
    id: 119,
    title: "Check if Object is Array",
    category: "utilities",
    description: "Determine if a given variable is an array.",
    code: `const arr = [];
const obj = {};
const isArray1 = Array.isArray(arr);
const isArray2 = arr instanceof Array;`,
    demo: () => {
      const arr = [];
      const obj = {};
      const isArray1 = Array.isArray(arr);
      const isArray2 = arr instanceof Array;
      const isArray3 = Array.isArray(obj);
      return `[] is array (Array.isArray): ${isArray1}\n[] is array (instanceof): ${isArray2}\n{} is array: ${isArray3}`;
    }
  },
  {
    id: 120,
    title: "Get Unique Values from Array of Objects",
    category: "arrays",
    description: "Extract unique values of a specific property from an array of objects.",
    code: `const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }];
const uniqueNames = [...new Set(users.map(user => user.name))];`,
    demo: () => {
      const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }];
      const uniqueNames = [...new Set(users.map(user => user.name))];
      return `Users: ${JSON.stringify(users)}\nUnique Names: [${uniqueNames.map(n => `'${n}'`).join(', ')}]`;
    }
  },
  {
    id: 121,
    title: "URL Encode String",
    category: "strings",
    description: "Encode a string for use in a URL.",
    code: `const uri = 'my file.txt';
const encodedUri = encodeURIComponent(uri);`,
    demo: () => {
      const uri = 'my file with spaces & symbols.txt';
      const encodedUri = encodeURIComponent(uri);
      return `Original: "${uri}"\nEncoded: "${encodedUri}"`;
    }
  },
  {
    id: 122,
    title: "URL Decode String",
    category: "strings",
    description: "Decode a URL-encoded string.",
    code: `const encodedUri = 'my%20file.txt';
const decodedUri = decodeURIComponent(encodedUri);`,
    demo: () => {
      const encodedUri = 'my%20file%20with%20spaces%20%26%20symbols.txt';
      const decodedUri = decodeURIComponent(encodedUri);
      return `Encoded: "${encodedUri}"\nDecoded: "${decodedUri}"`;
    }
  },
  {
    id: 123,
    title: "Check for Leap Year",
    category: "date",
    description: "Determine if a given year is a leap year.",
    code: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const is2024Leap = isLeapYear(2024);`,
    demo: () => {
      function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      }
      return `2024 is leap year: ${isLeapYear(2024)}\n2023 is leap year: ${isLeapYear(2023)}\n2000 is leap year: ${isLeapYear(2000)}`;
    }
  },
  {
    id: 124,
    title: "String Includes Check",
    category: "strings",
    description: "Check if a string contains another substring.",
    code: `const sentence = 'Hello world, welcome to the universe.';
const hasWord = sentence.includes('world');`,
    demo: () => {
      const sentence = 'Hello world, welcome to the universe.';
      const hasWord = sentence.includes('world');
      const hasOtherWord = sentence.includes('moon');
      return `"${sentence}" includes "world": ${hasWord}\n"${sentence}" includes "moon": ${hasOtherWord}`;
    }
  },
  {
    id: 125,
    title: "Convert to PascalCase",
    category: "strings",
    description: "Convert a string to PascalCase (e.g., 'hello world' -> 'HelloWorld').",
    code: `const toPascalCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => word.toUpperCase())
    .replace(/\s+/g, '');
const pascalString = toPascalCase('hello world example');`,
    demo: () => {
      const toPascalCase = (str) =>
        str
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => word.toUpperCase())
          .replace(/\s+/g, '');
      const pascalString = toPascalCase('hello world example string');
      return `Original: "hello world example string"\nPascalCase: "${pascalString}"`;
    }
  },
  {
    id: 126,
    title: "Convert to Kebab-Case",
    category: "strings",
    description: "Convert a string to kebab-case (e.g., 'Hello World' -> 'hello-world').",
    code: `const toKebabCase = (str) =>
  str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/\s+/g, '-');
const kebabString = toKebabCase('Hello World Example');`,
    demo: () => {
      const toKebabCase = (str) =>
        str
          .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
          .toLowerCase()
          .replace(/\s+/g, '-');
      const kebabString = toKebabCase('Hello World Example String');
      return `Original: "Hello World Example String"\nKebab-Case: "${kebabString}"`;
    }
  },
  {
    id: 127,
    title: "Convert to Snake_Case",
    category: "strings",
    description: "Convert a string to snake_case (e.g., 'Hello World' -> 'hello_world').",
    code: `const toSnakeCase = (str) =>
  str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/\s+/g, '_');
const snakeString = toSnakeCase('Hello World Example');`,
    demo: () => {
      const toSnakeCase = (str) =>
        str
          .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
          .toLowerCase()
          .replace(/\s+/g, '_');
      const snakeString = toSnakeCase('Hello World Example String');
      return `Original: "Hello World Example String"\nSnake_Case: "${snakeString}"`;
    }
  },
  {
    id: 128,
    title: "Check if Value is Number",
    category: "utilities",
    description: "Reliably check if a value is a number.",
    code: `const num = 123;
const str = 'abc';
const isNum1 = typeof num === 'number' && !isNaN(num);
const isNum2 = !isNaN(parseFloat(str)) && isFinite(str);`,
    demo: () => {
      const num = 123;
      const str = 'abc';
      const isNum1 = typeof num === 'number' && !isNaN(num);
      const isNum2 = !isNaN(parseFloat(str)) && isFinite(str);
      const isNum3 = !isNaN(parseFloat('123'));
      return `123 is number: ${isNum1}\n"abc" is number: ${isNum2}\n"123" is number: ${isNum3}`;
    }
  },
  {
    id: 129,
    title: "Set HTML Element Content",
    category: "dom",
    description: "Set the inner HTML or text content of a DOM element.",
    code: `document.getElementById('myDiv').innerHTML = '<b>Hello</b> World';
document.getElementById('mySpan').textContent = 'Plain Text';`,
    demo: () => {
      return "Sets innerHTML or textContent of an element. (No visible change in demo)";
    }
  },
  {
    id: 130,
    title: "Get Element by ID Shorthand",
    category: "dom",
    description: "A common shorthand for `document.getElementById` for quicker access.",
    code: `const $ = (id) => document.getElementById(id);
const myElement = $('myDiv');`,
    demo: () => {
      const $ = (id) => document.getElementById(id);
      return "Shorthand for document.getElementById.";
    }
  },
  {
    id: 131,
    title: "Clear All Timers",
    category: "performance",
    description: "Clear all active `setTimeout` and `setInterval` timers.",
    code: `// This is a conceptual trick. In practice, you'd track timer IDs.
// For example:
// let timerIds = [];
// timerIds.push(setTimeout(...));
// timerIds.forEach(id => clearTimeout(id));
// This is not a direct browser API but a common pattern.`,
    demo: () => {
      return "Conceptual: In real apps, track and clear timer IDs to prevent leaks.";
    }
  },
  {
    id: 132,
    title: "Remove Accents from String",
    category: "strings",
    description: "Remove diacritics (accents) from a string.",
    code: `const normalizeString = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const text = 'résumé café';
const normalizedText = normalizeString(text);`,
    demo: () => {
      const normalizeString = (str) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const text = 'résumé café éléphant';
      const normalizedText = normalizeString(text);
      return `Original: "${text}"\nNormalized: "${normalizedText}"`;
    }
  },
  {
    id: 133,
    title: "Check for Property in Object and Access",
    category: "objects",
    description: "Check if a property exists before accessing it, using optional chaining or logical AND.",
    code: `const user = { details: { name: 'Alice' } };
const userName1 = user?.details?.name; // Optional chaining
const userName2 = user.details && user.details.name; // Logical AND`,
    demo: () => {
      const user = { details: { name: 'Alice' } };
      const userName1 = user?.details?.name;
      const userName2 = user.details && user.details.name;
      const missingUser = {};
      const missingName = missingUser?.details?.name;
      return `User Name 1: ${userName1}\nUser Name 2: ${userName2}\nMissing Name: ${missingName}`;
    }
  },
  {
    id: 134,
    title: "Get Last Element of Array",
    category: "arrays",
    description: "Access the last element of an array.",
    code: `const arr = [1, 2, 3, 4];
const lastElement = arr[arr.length - 1];`,
    demo: () => {
      const arr = [1, 2, 3, 4];
      const lastElement = arr[arr.length - 1];
      return `Array: [${arr}]\nLast element: ${lastElement}`;
    }
  },
  {
    id: 135,
    title: "Remove First Element of Array",
    category: "arrays",
    description: "Remove the first element from an array efficiently.",
    code: `const arr = [1, 2, 3, 4];
const removed = arr.shift(); // Modifies original array
// If you want a new array:
// const newArr = arr.slice(1);`,
    demo: () => {
      const arr = [1, 2, 3, 4];
      const arrShift = [...arr];
      const removedShift = arrShift.shift();
      const newArrSlice = arr.slice(1);
      return `Original: [${arr}]\nshift() result: ${removedShift}, array: [${arrShift}]\nsplice(1) new array: [${newArrSlice}]`;
    }
  },
  {
    id: 136,
    title: "Format Phone Number",
    category: "strings",
    description: "Simple formatting of a 10-digit number into a phone number string.",
    code: `const formatPhoneNumber = (digits) => {
  const cleaned = ('' + digits).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? \`(\${match[1]}) \${match[2]}-\${match[3]}\` : null;
};
const formatted = formatPhoneNumber(1234567890);`,
    demo: () => {
      const formatPhoneNumber = (digits) => {
        const cleaned = ('' + digits).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        return match ? `(${match[1]}) ${match[2]}-${match[3]}` : null;
      };
      const formatted = formatPhoneNumber(1234567890);
      const invalid = formatPhoneNumber('123');
      return `1234567890 → ${formatted}\n"123" → ${invalid}`;
    }
  },
  {
    id: 137,
    title: "Check if Element is Visible",
    category: "dom",
    description: "Check if a DOM element is currently visible in the viewport.",
    code: `function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Usage: const visible = isElementVisible(document.getElementById('myElement'));`,
    demo: () => {
      return "Determines if an element is visible in the viewport. (Requires a target element to test)";
    }
  },
  {
    id: 138,
    title: "Replace All Occurrences",
    category: "strings",
    description: "Replace all occurrences of a substring in a string.",
    code: `const text = 'apple, banana, apple, orange';
const newText = text.replace(/apple/g, 'grape'); // Using regex global flag
// Or: const newText = text.replaceAll('apple', 'grape'); (ES2021)`,
    demo: () => {
      const text = 'apple, banana, apple, orange';
      const newText = text.replace(/apple/g, 'grape');
      const text2 = 'test test test';
      const newText2 = text2.replaceAll('test', 'done');
      return `Original: "${text}"\nReplaced (regex): "${newText}"\nReplaced (replaceAll): "${newText2}"`;
    }
  },
  {
    id: 139,
    title: "Empty an Array",
    category: "arrays",
    description: "Different ways to empty an array.",
    code: `let arr1 = [1, 2, 3];
arr1.length = 0; // Method 1

let arr2 = [1, 2, 3];
arr2.splice(0, arr2.length); // Method 2

let arr3 = [1, 2, 3];
arr3 = []; // Method 3 (creates new array, not good for const or references)`,
    demo: () => {
      let arr1 = [1, 2, 3];
      arr1.length = 0;
      let arr2 = [4, 5, 6];
      arr2.splice(0, arr2.length);
      let arr3 = [7, 8, 9];
      arr3 = [];
      return `Method 1 (length = 0): [${arr1}]\nMethod 2 (splice): [${arr2}]\nMethod 3 (reassign): [${arr3}]`;
    }
  },
  {
    id: 140,
    title: "Delay with setTimeout",
    category: "async",
    description: "Execute a function after a specified delay.",
    code: `console.log('Start');
setTimeout(() => {
  console.log('Delayed message');
}, 1000); // 1 second delay`,
    demo: () => {
      return "Check your browser console for 'Start' immediately, then 'Delayed message' after 1 second.";
    }
  },
  {
    id: 141,
    title: "Array to Object Transformation",
    category: "arrays",
    description: "Convert an array of key-value pairs or objects into a single object.",
    code: `const arr = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(arr); // { a: 1, b: 2 }

const users = [{ id: 'a', name: 'Alice' }, { id: 'b', name: 'Bob' }];
const userObj = users.reduce((acc, user) => ({ ...acc, [user.id]: user.name }), {}); // { a: 'Alice', b: 'Bob' }`,
    demo: () => {
      const arr = [['a', 1], ['b', 2]];
      const obj = Object.fromEntries(arr);
      const users = [{ id: 'a', name: 'Alice' }, { id: 'b', name: 'Bob' }];
      const userObj = users.reduce((acc, user) => ({ ...acc, [user.id]: user.name }), {});
      return `From array of pairs: ${JSON.stringify(obj)}\nFrom array of objects: ${JSON.stringify(userObj)}`;
    }
  },
  {
    id: 142,
    title: "Filter Object by Keys",
    category: "objects",
    description: "Create a new object containing only specified keys from an existing object.",
    code: `const original = { a: 1, b: 2, c: 3 };
const allowedKeys = ['a', 'c'];
const filtered = Object.keys(original)
  .filter(key => allowedKeys.includes(key))
  .reduce((obj, key) => {
    obj[key] = original[key];
    return obj;
  }, {});`,
    demo: () => {
      const original = { a: 1, b: 2, c: 3 };
      const allowedKeys = ['a', 'c'];
      const filtered = Object.keys(original)
        .filter(key => allowedKeys.includes(key))
        .reduce((obj, key) => {
          obj[key] = original[key];
          return obj;
        }, {});
      return `Original: ${JSON.stringify(original)}\nFiltered (keys 'a', 'c'): ${JSON.stringify(filtered)}`;
    }
  },
  {
    id: 143,
    title: "Execute Function on DOM Ready",
    category: "dom",
    description: "Run a function once the DOM is fully loaded and parsed.",
    code: `document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  // Your code here
});`,
    demo: () => {
      return "This code runs once the DOM is loaded. Check browser console.";
    }
  },
  {
    id: 144,
    title: "Check if Argument is Defined",
    category: "functions",
    description: "Verify if a function argument has been provided (is not undefined).",
    code: `function checkArg(arg) {
  if (typeof arg !== 'undefined') {
    console.log('Argument is defined:', arg);
  } else {
    console.log('Argument is undefined.');
  }
}
checkArg('hello');
checkArg();`,
    demo: () => {
      let output = '';
      function checkArg(arg) {
        if (typeof arg !== 'undefined') {
          output += `Argument is defined: ${arg}\n`;
        } else {
          output += `Argument is undefined.\n`;
        }
      }
      checkArg('hello');
      checkArg();
      return output.trim();
    }
  },
  {
    id: 145,
    title: "String Interpolation with Variables",
    category: "strings",
    description: "Easily embed variables or expressions within strings using template literals.",
    code: `const name = 'Alice';
const age = 30;
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;`,
    demo: () => {
      const name = 'Alice';
      const age = 30;
      const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
      return greeting;
    }
  },
  {
    id: 146,
    title: "Dynamic Object Key Access",
    category: "objects",
    description: "Access object properties using a variable for the key name.",
    code: `const obj = { name: 'John', age: 30 };
const propName = 'name';
const value = obj[propName]; // John`,
    demo: () => {
      const obj = { name: 'John', age: 30 };
      const propName = 'name';
      const value = obj[propName];
      const dynamicProp = 'age';
      const ageValue = obj[dynamicProp];
      return `Accessed by variable '${propName}': ${value}\nAccessed by variable '${dynamicProp}': ${ageValue}`;
    }
  },
  {
    id: 147,
    title: "Array Fill with Value",
    category: "arrays",
    description: "Fill an array with a static value.",
    code: `const arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const filledSection = [1, 2, 3, 4, 5].fill('x', 2, 4); // [1, 2, 'x', 'x', 5]`,
    demo: () => {
      const arr = new Array(5).fill(0);
      const filledSection = [1, 2, 3, 4, 5].fill('x', 2, 4);
      return `Filled with 0s: [${arr}]\nFilled section: [${filledSection}]`;
    }
  },
  {
    id: 148,
    title: "Generate Random Hex Color",
    category: "utilities",
    description: "Generate a random hexadecimal color code.",
    code: `const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');`,
    demo: () => {
      const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      return `Random Hex Color: ${randomHexColor}`;
    }
  },
  {
    id: 149,
    title: "Convert String to Array of Characters",
    category: "strings",
    description: "Break a string down into an array of its individual characters.",
    code: `const str = 'hello';
const charArray1 = str.split(''); // ['h', 'e', 'l', 'l', 'o']
const charArray2 = [...str]; // ['h', 'e', 'l', 'l', 'o']`,
    demo: () => {
      const str = 'hello';
      const charArray1 = str.split('');
      const charArray2 = [...str];
      return `Using split(''): [${charArray1.map(c => `'${c}'`).join(', ')}]\nUsing spread operator: [${charArray2.map(c => `'${c}'`).join(', ')}]`;
    }
  },
  {
    id: 150,
    title: "Check for Weekend Date",
    category: "date",
    description: "Determine if a given date falls on a Saturday or Sunday.",
    code: `function isWeekend(date) {
  const day = date.getDay(); // Sunday - 0, Saturday - 6
  return day === 0 || day === 6;
}
const today = new Date();
const isTodayWeekend = isWeekend(today);`,
    demo: () => {
      function isWeekend(date) {
        const day = date.getDay();
        return day === 0 || day === 6;
      }
      const today = new Date();
      const isTodayWeekend = isWeekend(today);
      const saturday = new Date('2025-06-14'); // Assuming this is a Saturday
      const isSaturdayWeekend = isWeekend(saturday);
      return `Today (${today.toDateString()}) is weekend: ${isTodayWeekend}\n'2025-06-14' is weekend: ${isSaturdayWeekend}`;
    }
  },
  {
    id: 151,
    title: "Find Object in Array by Property",
    category: "arrays",
    description: "Find the first object in an array that matches a specific property value.",
    code: `const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const user = users.find(u => u.id === 2);`,
    demo: () => {
      const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
      const user = users.find(u => u.id === 2);
      const notFound = users.find(u => u.id === 99);
      return `Found user with ID 2: ${JSON.stringify(user)}\nUser with ID 99: ${JSON.stringify(notFound)}`;
    }
  },
  {
    id: 152,
    title: "Get Element's Data Attributes",
    category: "dom",
    description: "Access custom data attributes from a DOM element.",
    code: `<div id="myElement" data-id="123" data-name="test"></div>
const element = document.getElementById('myElement');
const dataId = element.dataset.id; // "123"
const dataName = element.dataset.name; // "test"`,
    demo: () => {
      const tempDiv = document.createElement('div');
      tempDiv.setAttribute('data-id', '123');
      tempDiv.setAttribute('data-name', 'test data');
      const dataId = tempDiv.dataset.id;
      const dataName = tempDiv.dataset.name;
      return `data-id: ${dataId}\ndata-name: ${dataName}`;
    }
  },
  {
    id: 153,
    title: "Shorten Number with Suffix",
    category: "utilities",
    description: "Convert large numbers into human-readable format (e.g., 1200 to 1.2K).",
    code: `function shortenNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num;
}
const shortened = shortenNumber(1234567);`,
    demo: () => {
      function shortenNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num;
      }
      return `1234567 → ${shortenNumber(1234567)}\n9876 → ${shortenNumber(9876)}\n500 → ${shortenNumber(500)}`;
    }
  },
  {
    id: 154,
    title: "Create Array with Unique Values",
    category: "arrays",
    description: "Another method to create an array with only unique values.",
    code: `const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];`,
    demo: () => {
      const arr = [1, 2, 2, 3, 4, 4, 5];
      const unique = [...new Set(arr)];
      return `Original: [${arr}]\nUnique: [${unique}]`;
    }
  },
  {
    id: 155,
    title: "Simple Cache with Map",
    category: "performance",
    description: "Implement a basic caching mechanism using a Map for function results.",
    code: `const cache = new Map();
function calculateExpensive(arg) {
  if (cache.has(arg)) {
    console.log('Fetching from cache...');
    return cache.get(arg);
  }
  console.log('Calculating...');
  const result = arg * 2; // Simulate expensive calculation
  cache.set(arg, result);
  return result;
}
calculateExpensive(5);
calculateExpensive(5);`,
    demo: () => {
      const cache = new Map();
      let output = '';
      function calculateExpensive(arg) {
        if (cache.has(arg)) {
          output += 'Fetching from cache...\n';
          return cache.get(arg);
        }
        output += 'Calculating...\n';
        const result = arg * 2;
        cache.set(arg, result);
        return result;
      }
      calculateExpensive(5);
      calculateExpensive(5);
      return output.trim();
    }
  },
  {
    id: 156,
    title: "Create Read-Only Object",
    category: "objects",
    description: "Make an object immutable using Object.freeze().",
    code: `const obj = { a: 1, b: { c: 2 } };
Object.freeze(obj);
// obj.a = 5; // This will fail silently in non-strict mode, or throw error in strict mode
// obj.b.c = 3; // Note: nested objects are NOT deeply frozen by default`,
    demo: () => {
      const obj = { a: 1, b: { c: 2 } };
      Object.freeze(obj);
      try {
        obj.a = 5; // Attempt to modify
      } catch (e) {
        // Handle in strict mode
      }
      obj.b.c = 3; // This will succeed as it's not deeply frozen
      return `Original: ${JSON.stringify(obj)}\nAfter attempted modification (a is frozen, b.c is not): ${JSON.stringify(obj)}`;
    }
  },
  {
    id: 157,
    title: "Iterate Over Set",
    category: "es6",
    description: "Loop through elements of a Set using for...of or forEach.",
    code: `const mySet = new Set([1, 2, 3]);
for (const item of mySet) {
  console.log(item);
}
mySet.forEach(item => console.log(item));`,
    demo: () => {
      const mySet = new Set([1, 2, 3, 2, 4]);
      let output = 'For...of:\n';
      for (const item of mySet) {
        output += `${item}\n`;
      }
      output += 'forEach:\n';
      mySet.forEach(item => output += `${item}\n`);
      return output.trim();
    }
  },
  {
    id: 158,
    title: "Check if all elements are truthy",
    category: "arrays",
    description: "Verify if every element in an array is truthy.",
    code: `const arr1 = [1, true, 'hello'];
const allTruthy1 = arr1.every(Boolean); // true
const arr2 = [1, false, 'hello'];
const allTruthy2 = arr2.every(Boolean); // false`,
    demo: () => {
      const arr1 = [1, true, 'hello'];
      const allTruthy1 = arr1.every(Boolean);
      const arr2 = [1, false, 'hello'];
      const allTruthy2 = arr2.every(Boolean);
      return `[1, true, 'hello'] all truthy: ${allTruthy1}\n[1, false, 'hello'] all truthy: ${allTruthy2}`;
    }
  },
  {
    id: 159,
    title: "Concatenate Arrays without Modifying Originals",
    category: "arrays",
    description: "Combine two or more arrays into a new array without altering the original arrays.",
    code: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
const combinedSpread = [...arr1, ...arr2]; // [1, 2, 3, 4]`,
    demo: () => {
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      const combined = arr1.concat(arr2);
      const combinedSpread = [...arr1, ...arr2];
      return `Original arr1: [${arr1}]\nOriginal arr2: [${arr2}]\nUsing concat: [${combined}]\nUsing spread: [${combinedSpread}]`;
    }
  },
  {
    id: 160,
    title: "Get Current Timestamp",
    category: "date",
    description: "Get the current time in milliseconds since the Unix epoch.",
    code: `const timestamp1 = Date.now();
const timestamp2 = new Date().getTime();
const timestamp3 = +new Date(); // Unary plus operator`,
    demo: () => {
      const timestamp1 = Date.now();
      const timestamp2 = new Date().getTime();
      const timestamp3 = +new Date();
      return `Date.now(): ${timestamp1}\ngetTime(): ${timestamp2}\nUnary plus: ${timestamp3}`;
    }
  },

  {
    id: 161,
    title: "Validate Email Address (Basic)",
    category: "regex",
    description: "Use a regular expression to perform a basic validation of an email format.",
    code: `const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValid = emailRegex.test('test@example.com');`,
    demo: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email1 = 'test@example.com';
      const email2 = 'invalid-email';
      return `"${email1}" is valid: ${emailRegex.test(email1)}\n"${email2}" is valid: ${emailRegex.test(email2)}`;
    }
  },
  {
    id: 162,
    title: "Extract Numbers from String",
    category: "regex",
    description: "Extract all numerical digits from a string.",
    code: `const text = 'I have 12 apples and 34 oranges.';
const numbers = text.match(/\d+/g); // ["12", "34"]`,
    demo: () => {
      const text = 'I have 12 apples and 34 oranges.';
      const numbers = text.match(/\d+/g);
      return `Original: "${text}"\nNumbers: [${numbers ? numbers.join(', ') : 'None'}]`;
    }
  },
  {
    id: 163,
    title: "Remove Non-Alphabetic Characters",
    category: "regex",
    description: "Remove any character from a string that is not an alphabet letter.",
    code: `const text = 'Hello123World!@#';
const cleanedText = text.replace(/[^a-zA-Z]/g, ''); // "HelloWorld"`,
    demo: () => {
      const text = 'Hello123World!@#';
      const cleanedText = text.replace(/[^a-zA-Z]/g, '');
      return `Original: "${text}"\nCleaned: "${cleanedText}"`;
    }
  },
  {
    id: 164,
    title: "Check for Alphanumeric String",
    category: "regex",
    description: "Determine if a string contains only alphanumeric characters (letters and numbers).",
    code: `const alphanumericRegex = /^[a-zA-Z0-9]+$/;
const isAlphanumeric1 = alphanumericRegex.test('HelloWorld123'); // true
const isAlphanumeric2 = alphanumericRegex.test('Hello World!'); // false`,
    demo: () => {
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      const str1 = 'HelloWorld123';
      const str2 = 'Hello World!';
      return `"${str1}" is alphanumeric: ${alphanumericRegex.test(str1)}\n"${str2}" is alphanumeric: ${alphanumericRegex.test(str2)}`;
    }
  },
  {
    id: 165,
    title: "Find First Match",
    category: "regex",
    description: "Find the first occurrence of a pattern in a string.",
    code: `const text = 'The quick brown fox jumps over the lazy dog.';
const firstWordStartingWithT = text.match(/\\bT\\w+/); // ["The"]`,
    demo: () => {
      const text = 'The quick brown fox jumps over the lazy dog.';
      const firstWordStartingWithT = text.match(/\bT\w+/);
      return `Original: "${text}"\nFirst word starting with 'T': ${firstWordStartingWithT ? firstWordStartingWithT[0] : 'None'}`;
    }
  },
  {
    id: 166,
    title: "Replace Multiple Spaces with Single",
    category: "regex",
    description: "Normalize whitespace by replacing multiple spaces with a single space.",
    code: `const text = '  Hello   World   Example  ';
const normalized = text.replace(/\s\s+/g, ' ').trim(); // "Hello World Example"`,
    demo: () => {
      const text = '  Hello   World   Example  ';
      const normalized = text.replace(/\s\s+/g, ' ').trim();
      return `Original: "${text}"\nNormalized: "${normalized}"`;
    }
  },
  {
    id: 167,
    title: "Validate IPv4 Address (Basic)",
    category: "regex",
    description: "A simple regex to check for valid IPv4 address format.",
    code: `const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
const isValid1 = ipv4Regex.test('192.168.1.1'); // true
const isValid2 = ipv4Regex.test('256.0.0.1'); // false (values > 255 not checked by regex alone)`,
    demo: () => {
      const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
      const ip1 = '192.168.1.1';
      const ip2 = '256.0.0.1'; // Regex says true, but semantically false
      const ip3 = '1.2.3'; // Regex says false
      return `"${ip1}" valid: ${ipv4Regex.test(ip1)}\n"${ip2}" valid: ${ipv4Regex.test(ip2)} (regex limitation)\n"${ip3}" valid: ${ipv4Regex.test(ip3)}`;
    }
  },
  {
    id: 168,
    title: "Remove HTML Tags",
    category: "regex",
    description: "Strip HTML tags from a string, leaving only plain text.",
    code: `const html = '<p>Hello <b>world</b>!</p>';
const plainText = html.replace(/<[^>]*>/g, ''); // "Hello world!"`,
    demo: () => {
      const html = '<p>Hello <b>world</b>! This is a <a href="#">link</a>.</p>';
      const plainText = html.replace(/<[^>]*>/g, '');
      return `Original: "${html}"\nPlain text: "${plainText}"`;
    }
  },
  {
    id: 169,
    title: "Match Specific Word (Whole Word)",
    category: "regex",
    description: "Match a word only if it appears as a whole word, not part of another word.",
    code: `const text = 'The quick brown fox. A foxy trick.';
const foxRegex = /\\bfox\\b/g;
const matches = text.match(foxRegex); // ["fox"]`,
    demo: () => {
      const text = 'The quick brown fox. A foxy trick.';
      const foxRegex = /\bfox\b/g;
      const matches = text.match(foxRegex);
      return `Text: "${text}"\nMatches of whole word 'fox': [${matches ? matches.join(', ') : 'None'}]`;
    }
  },
  {
    id: 170,
    title: "Extract Hashtags",
    category: "regex",
    description: "Find all hashtags (words starting with #) in a string.",
    code: `const tweet = 'Loving #JavaScript and #Regex tricks! #WebDev';
const hashtags = tweet.match(/#\\w+/g); // ["#JavaScript", "#Regex", "#WebDev"]`,
    demo: () => {
      const tweet = 'Loving #JavaScript and #Regex tricks! #WebDev This is just #fun.';
      const hashtags = tweet.match(/#\w+/g);
      return `Tweet: "${tweet}"\nHashtags: [${hashtags ? hashtags.join(', ') : 'None'}]`;
    }
  },
  // Adding more tricks for existing categories to expand the list
  {
    id: 171,
    title: "Add Element to Array at Specific Index",
    category: "arrays",
    description: "Insert an element into an array at a given index using splice().",
    code: `const arr = [1, 2, 4];
arr.splice(2, 0, 3); // Inserts 3 at index 2, removing 0 elements
// arr is now [1, 2, 3, 4]`,
    demo: () => {
      const arr = [1, 2, 4];
      arr.splice(2, 0, 3);
      return `Original: [1, 2, 4]\nAfter splice(2, 0, 3): [${arr}]`;
    }
  },
  {
    id: 172,
    title: "Deep Merge Objects",
    category: "objects",
    description: "Merge two objects deeply, handling nested objects.",
    code: `function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);`,
    demo: () => {
      function deepMerge(target, source) {
        const output = { ...target };
        if (target && typeof target === 'object' && source && typeof source === 'object') {
          Object.keys(source).forEach(key => {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
              if (!(key in target))
                Object.assign(output, { [key]: source[key] });
              else
                output[key] = deepMerge(target[key], source[key]);
            } else {
              Object.assign(output, { [key]: source[key] });
            }
          });
        }
        return output;
      }
      const obj1 = { a: 1, b: { c: 2, f: 5 } };
      const obj2 = { b: { d: 3, f: 6 }, e: 4 };
      const merged = deepMerge(obj1, obj2);
      return `Obj1: ${JSON.stringify(obj1)}\nObj2: ${JSON.stringify(obj2)}\nDeep Merged: ${JSON.stringify(merged)}`;
    }
  },
  {
    id: 173,
    title: "Convert Set to Array",
    category: "es6",
    description: "Convert a Set data structure into an array.",
    code: `const mySet = new Set([1, 2, 3]);
const arr = [...mySet]; // [1, 2, 3]
// Or: const arr = Array.from(mySet);`,
    demo: () => {
      const mySet = new Set([1, 2, 3, 2, 4]);
      const arr = [...mySet];
      return `Set: [${[...mySet]}]\nArray from Set: [${arr}]`;
    }
  },
  {
    id: 174,
    title: "Check if all properties are truthy",
    category: "objects",
    description: "Verify if all enumerable properties of an object have truthy values.",
    code: `const obj1 = { a: 1, b: 'hello', c: true };
const allTruthy1 = Object.values(obj1).every(Boolean); // true
const obj2 = { a: 1, b: '', c: true };
const allTruthy2 = Object.values(obj2).every(Boolean); // false`,
    demo: () => {
      const obj1 = { a: 1, b: 'hello', c: true };
      const allTruthy1 = Object.values(obj1).every(Boolean);
      const obj2 = { a: 1, b: '', c: true };
      const allTruthy2 = Object.values(obj2).every(Boolean);
      return `Obj1 {a:1, b:'hello', c:true} all truthy: ${allTruthy1}\nObj2 {a:1, b:'', c:true} all truthy: ${allTruthy2}`;
    }
  },
  {
    id: 175,
    title: "Parse CSV String to Array of Arrays",
    category: "strings",
    description: "Convert a simple CSV string into a 2D array.",
    code: `function parseCSV(csvString) {
  const lines = csvString.trim().split('\\n');
  return lines.map(line => line.split(','));
}
const csvData = "header1,header2\\nvalue1a,value1b\\nvalue2a,value2b";
const parsed = parseCSV(csvData);`,
    demo: () => {
      function parseCSV(csvString) {
        const lines = csvString.trim().split('\n');
        return lines.map(line => line.split(','));
      }
      const csvData = "Name,Age,City\\nAlice,30,NY\\nBob,24,LA";
      const parsed = parseCSV(csvData);
      return `CSV Data:\n"${csvData}"\nParsed Array: ${JSON.stringify(parsed)}`;
    }
  },
  {
    id: 176,
    title: "Get Week Number of Year",
    category: "date",
    description: "Calculate the ISO week number for a given date.",
    code: `Date.prototype.getWeek = function() {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Sunday in week 1 and count number of weeks from date.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};
const weekNum = new Date().getWeek();`,
    demo: () => {
      Date.prototype.getWeek = function() {
        const date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        const week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
      };
      const today = new Date();
      const weekNum = today.getWeek();
      return `Current date: ${today.toDateString()}\nWeek number: ${weekNum}`;
    }
  },
  {
    id: 177,
    title: "Check if Date is Today",
    category: "date",
    description: "Compare a date to the current date to see if it's today.",
    code: `function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}
const someDate = new Date(); // This will be true
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const isSomeDateToday = isToday(someDate);`,
    demo: () => {
      function isToday(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
      }
      const someDate = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return `Is today: ${isToday(someDate)}\nIs tomorrow today: ${isToday(tomorrow)}`;
    }
  },
  {
    id: 178,
    title: "Array Sum of Object Properties",
    category: "arrays",
    description: "Sum a specific numeric property across all objects in an array.",
    code: `const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
const total = items.reduce((sum, item) => sum + item.price, 0); // 60`,
    demo: () => {
      const items = [{ name: 'A', price: 10 }, { name: 'B', price: 20.5 }, { name: 'C', price: 30 }];
      const total = items.reduce((sum, item) => sum + item.price, 0);
      return `Items: ${JSON.stringify(items)}\nTotal Price: ${total}`;
    }
  },
  {
    id: 179,
    title: "Get Max Value from Array of Objects",
    category: "arrays",
    description: "Find the maximum value of a specific numeric property from objects in an array.",
    code: `const items = [{ value: 10 }, { value: 50 }, { value: 20 }];
const max = Math.max(...items.map(item => item.value)); // 50`,
    demo: () => {
      const items = [{ name: 'A', score: 10 }, { name: 'B', score: 95 }, { name: 'C', score: 70 }];
      const maxScore = Math.max(...items.map(item => item.score));
      return `Items: ${JSON.stringify(items)}\nMaximum Score: ${maxScore}`;
    }
  },
  {
    id: 180,
    title: "Get Min Value from Array of Objects",
    category: "arrays",
    description: "Find the minimum value of a specific numeric property from objects in an array.",
    code: `const items = [{ value: 10 }, { value: 50 }, { value: 20 }];
const min = Math.min(...items.map(item => item.value)); // 10`,
    demo: () => {
      const items = [{ name: 'A', score: 10 }, { name: 'B', score: 95 }, { name: 'C', score: 70 }];
      const minScore = Math.min(...items.map(item => item.score));
      return `Items: ${JSON.stringify(items)}\nMinimum Score: ${minScore}`;
    }
  },
  {
    id: 181,
    title: "Check if String Starts With",
    category: "strings",
    description: "Check if a string begins with a specified substring.",
    code: `const str = 'Hello World';
const startsWithHello = str.startsWith('Hello'); // true
const startsWithworld = str.startsWith('world'); // false`,
    demo: () => {
      const str = 'Hello World';
      const startsWithHello = str.startsWith('Hello');
      const startsWithWorld = str.startsWith('World');
      return `"${str}" starts with "Hello": ${startsWithHello}\n"${str}" starts with "World": ${startsWithWorld}`;
    }
  },
  {
    id: 182,
    title: "Check if String Ends With",
    category: "strings",
    description: "Check if a string ends with a specified substring.",
    code: `const str = 'Hello World';
const endsWithWorld = str.endsWith('World'); // true
const endsWithHello = str.endsWith('Hello'); // false`,
    demo: () => {
      const str = 'Hello World';
      const endsWithWorld = str.endsWith('World');
      const endsWithHello = str.endsWith('Hello');
      return `"${str}" ends with "World": ${endsWithWorld}\n"${str}" ends with "Hello": ${endsWithHello}`;
    }
  },
  {
    id: 183,
    title: "Parse Integer from String",
    category: "utilities",
    description: "Convert a string to an integer, handling non-numeric prefixes.",
    code: `const numStr1 = '123px';
const numStr2 = 'abc123';
const int1 = parseInt(numStr1); // 123
const int2 = parseInt(numStr2); // NaN`,
    demo: () => {
      const numStr1 = '123px';
      const numStr2 = 'abc123';
      const int1 = parseInt(numStr1);
      const int2 = parseInt(numStr2);
      return `parseInt('123px'): ${int1}\nparseInt('abc123'): ${int2}`;
    }
  },
  {
    id: 184,
    title: "Generate Array of Zeros",
    category: "arrays",
    description: "Create an array filled with a specific number of zeros.",
    code: `const zeros = Array(5).fill(0); // [0, 0, 0, 0, 0]`,
    demo: () => {
      const zeros = Array(5).fill(0);
      return `Array of 5 zeros: [${zeros}]`;
    }
  },
  {
    id: 185,
    title: "Check if number is finite",
    category: "utilities",
    description: "Determine if a value is a finite number (not Infinity, -Infinity, or NaN).",
    code: `const num1 = 10;
const num2 = Infinity;
const num3 = NaN;
const isFinite1 = Number.isFinite(num1); // true
const isFinite2 = Number.isFinite(num2); // false`,
    demo: () => {
      const num1 = 10;
      const num2 = Infinity;
      const num3 = NaN;
      return `10 is finite: ${Number.isFinite(num1)}\nInfinity is finite: ${Number.isFinite(num2)}\nNaN is finite: ${Number.isFinite(num3)}`;
    }
  },
  {
    id: 186,
    title: "Check if Integer",
    category: "utilities",
    description: "Determine if a value is an integer.",
    code: `const num1 = 10;
const num2 = 10.5;
const isInt1 = Number.isInteger(num1); // true
const isInt2 = Number.isInteger(num2); // false`,
    demo: () => {
      const num1 = 10;
      const num2 = 10.5;
      const num3 = NaN;
      return `10 is integer: ${Number.isInteger(num1)}\n10.5 is integer: ${Number.isInteger(num2)}\nNaN is integer: ${Number.isInteger(num3)}`;
    }
  },
  {
    id: 187,
    title: "Get URL Hostname",
    category: "utilities",
    description: "Extract the hostname (domain name) from a URL.",
    code: `const url = new URL('https://www.example.com/path');
const hostname = url.hostname; // "www.example.com"`,
    demo: () => {
      const url = new URL('https://www.example.com/path?query=1');
      const hostname = url.hostname;
      return `URL: ${url.href}\nHostname: ${hostname}`;
    }
  },
  {
    id: 188,
    title: "Check Browser Language",
    category: "utilities",
    description: "Get the user's preferred language settings from their browser.",
    code: `const browserLanguage = navigator.language; // E.g., "en-US"
const languages = navigator.languages; // E.g., ["en-US", "en", "es"]`,
    demo: () => {
      const browserLanguage = navigator.language;
      const languages = navigator.languages;
      return `Browser Language: ${browserLanguage}\nAll Languages: [${languages.join(', ')}]`;
    }
  },
  {
    id: 189,
    title: "Check if Element is Child of Another",
    category: "dom",
    description: "Determine if a DOM element is a child of another element.",
    code: `const parent = document.getElementById('parentElement');
const child = document.getElementById('childElement');
const isChild = parent.contains(child);`,
    demo: () => {
      return "Checks if one DOM element contains another. (Requires actual DOM elements to test)";
    }
  },
  {
    id: 190,
    title: "Copy Object Properties to Another",
    category: "objects",
    description: "Copy properties from one object to another (shallow copy).",
    code: `const source = { a: 1, b: 2 };
const target = { c: 3 };
Object.assign(target, source); // target is now { c: 3, a: 1, b: 2 }`,
    demo: () => {
      const source = { a: 1, b: 2 };
      const target = { c: 3 };
      Object.assign(target, source);
      return `Source: ${JSON.stringify(source)}\nTarget after assign: ${JSON.stringify(target)}`;
    }
  },
  {
    id: 191,
    title: "Iterate Object Values",
    category: "objects",
    description: "Loop through only the values of an object.",
    code: `const obj = { a: 1, b: 'hello', c: true };
for (const value of Object.values(obj)) {
  console.log(value);
}
Object.values(obj).forEach(value => console.log(value));`,
    demo: () => {
      const obj = { a: 1, b: 'hello', c: true };
      let output = 'Values:\n';
      Object.values(obj).forEach(value => output += `${value}\n`);
      return output.trim();
    }
  },
  {
    id: 192,
    title: "Iterate Object Keys",
    category: "objects",
    description: "Loop through only the keys (property names) of an object.",
    code: `const obj = { a: 1, b: 'hello', c: true };
for (const key of Object.keys(obj)) {
  console.log(key);
}
Object.keys(obj).forEach(key => console.log(key));`,
    demo: () => {
      const obj = { a: 1, b: 'hello', c: true };
      let output = 'Keys:\n';
      Object.keys(obj).forEach(key => output += `${key}\n`);
      return output.trim();
    }
  },
  {
    id: 193,
    title: "Check if Property is Enumerable",
    category: "objects",
    description: "Determine if a property is enumerable (visible in for...in loops and Object.keys()).",
    code: `const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
const isEnumerable1 = obj.propertyIsEnumerable('a'); // true
const isEnumerable2 = obj.propertyIsEnumerable('c'); // false`,
    demo: () => {
      const obj = { a: 1, b: 2 };
      Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
      const isEnumerable1 = obj.propertyIsEnumerable('a');
      const isEnumerable2 = obj.propertyIsEnumerable('c');
      return `Property 'a' is enumerable: ${isEnumerable1}\nProperty 'c' is enumerable: ${isEnumerable2}`;
    }
  },
  {
    id: 194,
    title: "Measure Text Width (Canvas)",
    category: "dom",
    description: "Calculate the pixel width of a given text string using a canvas context.",
    code: `function getTextWidth(text, font) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font || getComputedStyle(document.body).font;
  return context.measureText(text).width;
}
const width = getTextWidth('Hello World', '16px Arial');`,
    demo: () => {
      function getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font || '16px Arial'; // Fallback font
        return context.measureText(text).width;
      }
      const text = 'Hello World!';
      const font = '20px sans-serif';
      const width = getTextWidth(text, font);
      return `Text: "${text}" with font "${font}"\nWidth: ${width.toFixed(2)}px`;
    }
  },
  {
    id: 195,
    title: "Check if element has focus",
    category: "dom",
    description: "Determine if a specific DOM element currently has keyboard focus.",
    code: `const input = document.getElementById('myInput');
const hasFocus = (document.activeElement === input);`,
    demo: () => {
      // Create a dummy input for demonstration
      const dummyInput = document.createElement('input');
      dummyInput.id = 'dummyFocusInput';
      document.body.appendChild(dummyInput);

      dummyInput.focus(); // Simulate focusing the input
      const hasFocusAfterFocus = (document.activeElement === dummyInput);

      dummyInput.blur(); // Simulate blurring the input
      const hasFocusAfterBlur = (document.activeElement === dummyInput);

      document.body.removeChild(dummyInput); // Clean up
      return `After focusing: ${hasFocusAfterFocus}\nAfter blurring: ${hasFocusAfterBlur}`;
    }
  },
  {
    id: 196,
    title: "Execute Code after Page Load",
    category: "dom",
    description: "Run code after the entire page (including images and stylesheets) has fully loaded.",
    code: `window.addEventListener('load', (event) => {
  console.log('Page fully loaded');
  // Your code here
});`,
    demo: () => {
      return "This code runs after the entire page (including assets) is loaded. Check browser console.";
    }
  },
  {
    id: 197,
    title: "Encode to Base64",
    category: "utilities",
    description: "Encode a string into its Base64 representation.",
    code: `const originalString = 'Hello World!';
const encodedString = btoa(originalString); // SGVsbG8gV29ybGQh`,
    demo: () => {
      const originalString = 'Hello World!';
      const encodedString = btoa(originalString);
      return `Original: "${originalString}"\nBase64 Encoded: "${encodedString}"`;
    }
  },
  {
    id: 198,
    title: "Decode from Base64",
    category: "utilities",
    description: "Decode a Base64 string back to its original form.",
    code: `const encodedString = 'SGVsbG8gV29ybGQh';
const decodedString = atob(encodedString); // Hello World!`,
    demo: () => {
      const encodedString = 'SGVsbG8gV29ybGQh';
      const decodedString = atob(encodedString);
      return `Encoded: "${encodedString}"\nBase64 Decoded: "${decodedString}"`;
    }
  },
  {
    id: 199,
    title: "Get Average of Array",
    category: "arrays",
    description: "Calculate the average value of numbers in an array.",
    code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, val) => acc + val, 0);
const average = sum / numbers.length; // 3`,
    demo: () => {
      const numbers = [10, 20, 30, 40, 50];
      const sum = numbers.reduce((acc, val) => acc + val, 0);
      const average = sum / numbers.length;
      return `Array: [${numbers}]\nAverage: ${average}`;
    }
  },
  {
    id: 200,
    title: "Group Array by Multiple Properties",
    category: "arrays",
    description: "Group elements of an array of objects based on multiple properties.",
    code: `const products = [
  { type: 'A', color: 'red', name: 'P1' },
  { type: 'B', color: 'blue', name: 'P2' },
  { type: 'A', color: 'blue', name: 'P3' },
  { type: 'A', color: 'red', name: 'P4' }
];
const grouped = products.reduce((acc, item) => {
  const key = \`\${item.type}-\${item.color}\`;
  (acc[key] = acc[key] || []).push(item);
  return acc;
}, {});`,
    demo: () => {
      const products = [
        { type: 'A', color: 'red', name: 'P1' },
        { type: 'B', color: 'blue', name: 'P2' },
        { type: 'A', color: 'blue', name: 'P3' },
        { type: 'A', color: 'red', name: 'P4' }
      ];
      const grouped = products.reduce((acc, item) => {
        const key = `${item.type}-${item.color}`;
        (acc[key] = acc[key] || []).push(item);
        return acc;
      }, {});
      return `Original: ${JSON.stringify(products, null, 2)}\nGrouped: ${JSON.stringify(grouped, null, 2)}`;
    }
  },

  {
    id: 201,
    title: "Vibrate Device",
    category: "browser apis",
    description: "Make the device vibrate using the Vibration API.",
    code: `if ('vibrate' in navigator) {
  navigator.vibrate(200); // Vibrate for 200ms
  // navigator.vibrate([100, 30, 100, 30, 100]); // Pattern
} else {
  console.log('Vibration API not supported.');
}`,
    demo: () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(200);
        return 'Device vibrated for 200ms (if supported).';
      } else {
        return 'Vibration API not supported by your browser.';
      }
    }
  },
  {
    id: 202,
    title: "Request Fullscreen",
    category: "browser apis",
    description: "Make an element or the entire page go fullscreen.",
    code: `const element = document.documentElement; // Or a specific element
if (element.requestFullscreen) {
  element.requestFullscreen();
} else if (element.mozRequestFullScreen) { /* Firefox */
  element.mozRequestFullScreen();
} else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  element.webkitRequestFullscreen();
} else if (element.msRequestFullscreen) { /* IE/Edge */
  element.msRequestFullscreen();
}`,
    demo: () => {
      return "Clicking the demo button will attempt to make the page fullscreen. (Requires user gesture to work)";
    }
  },
  {
    id: 203,
    title: "Exit Fullscreen",
    category: "browser apis",
    description: "Exit fullscreen mode for the document.",
    code: `if (document.exitFullscreen) {
  document.exitFullscreen();
} else if (document.mozCancelFullScreen) { /* Firefox */
  document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
  document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { /* IE/Edge */
  document.msExitFullscreen();
}`,
    demo: () => {
      return "Clicking the demo button will attempt to exit fullscreen mode. (Only works if currently in fullscreen)";
    }
  },
  {
    id: 204,
    title: "Send Desktop Notification",
    category: "browser apis",
    description: "Display a desktop notification to the user (requires permission).",
    code: `if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello!', { body: 'This is a test notification.' });
    } else {
      console.log('Notification permission denied.');
    }
  });
} else {
  console.log('Notifications not supported.');
}`,
    demo: () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('JS Tricks', { body: 'This is your trick notification!' });
            return 'Notification sent (if permission granted).';
          } else {
            return 'Notification permission denied or blocked.';
          }
        });
        return 'Requesting notification permission...';
      } else {
        return 'Notifications not supported by your browser.';
      }
    }
  },
  {
    id: 205,
    title: "Get Geolocation",
    category: "browser apis",
    description: "Retrieve the user's current geographical position (requires permission).",
    code: `if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    },
    (error) => {
      console.error('Geolocation error:', error.message);
    }
  );
} else {
  console.log('Geolocation not supported.');
}`,
    demo: () => {
      if ('geolocation' in navigator) {
        return 'Check console for geolocation data (requires permission).';
      } else {
        return 'Geolocation not supported by your browser.';
      }
    }
  },
  {
    id: 206,
    title: "Battery Status API",
    category: "browser apis",
    description: "Get information about the device's battery charging status and level.",
    code: `if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    console.log('Battery charging:', battery.charging);
    console.log('Battery level:', battery.level * 100 + '%');
    battery.addEventListener('chargingchange', () => {
      console.log('Battery charging changed:', battery.charging);
    });
  });
} else {
  console.log('Battery Status API not supported.');
}`,
    demo: () => {
      if ('getBattery' in navigator) {
        return 'Check console for battery status (if supported).';
      } else {
        return 'Battery Status API not supported by your browser.';
      }
    }
  },
  {
    id: 207,
    title: "Page Visibility API",
    category: "browser apis",
    description: "Detect when the page becomes visible or hidden.",
    code: `document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});`,
    demo: () => {
      return "Minimize/switch tabs to see console messages about page visibility.";
    }
  },
  {
    id: 208,
    title: "Web Share API",
    category: "browser apis",
    description: "Share text, URLs, or files from the browser to other apps (requires HTTPS).",
    code: `if (navigator.share) {
  navigator.share({
    title: 'JavaScript Tricks',
    text: 'Check out these awesome JS tricks!',
    url: window.location.href,
  })
  .then(() => console.log('Successfully shared'))
  .catch((error) => console.error('Error sharing:', error));
} else {
  console.log('Web Share API not supported or not on HTTPS.');
}`,
    demo: () => {
      if (navigator.share) {
        return "Clicking this will open the native share dialog (requires HTTPS).";
      } else {
        return 'Web Share API not supported by your browser or not on HTTPS.';
      }
    }
  },
  {
    id: 209,
    title: "Broadcast Channel API",
    category: "browser apis",
    description: "Communicate between different Browse contexts (tabs, windows, iframes) from the same origin.",
    code: `const channel = new BroadcastChannel('my_channel');
channel.postMessage('Hello from this tab!');
channel.onmessage = (event) => {
  console.log('Received message:', event.data);
};`,
    demo: () => {
      const channel = new BroadcastChannel('my_channel');
      channel.postMessage('Hello from demo!');
      channel.onmessage = (event) => {
        return `Received message from another tab: ${event.data}`;
      };
      return "Open another tab with this page and click its demo for 'Broadcast Channel' to see messages.";
    }
  },
  {
    id: 210,
    title: "User-Agent String Check",
    category: "browser apis",
    description: "Access the browser's user-agent string for basic browser/device detection.",
    code: `const userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);`,
    demo: () => {
      return `User Agent: ${navigator.userAgent}`;
    }
  },
  {
    id: 211,
    title: "Check for Pointer Events Support",
    category: "browser apis",
    description: "Determine if the browser supports Pointer Events (unifying mouse, touch, pen).",
    code: `const supportsPointerEvents = window.PointerEvent !== undefined;`,
    demo: () => {
      const supportsPointerEvents = window.PointerEvent !== undefined;
      return `Supports Pointer Events: ${supportsPointerEvents}`;
    }
  },
  {
    id: 212,
    title: "Request Idle Callback",
    category: "browser apis",
    description: "Schedule a low-priority function to run during a browser's idle periods.",
    code: `if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Idle callback executed!');
  });
} else {
  console.log('requestIdleCallback not supported.');
}`,
    demo: () => {
      if ('requestIdleCallback' in window) {
        return 'Open console. "Idle callback executed!" will appear when browser is idle.';
      } else {
        return 'requestIdleCallback not supported by your browser.';
      }
    }
  },
  // Adding more tricks for existing categories
  {
    id: 213,
    title: "Array Contains All Elements",
    category: "arrays",
    description: "Check if one array contains all elements of another array.",
    code: `const mainArr = [1, 2, 3, 4, 5];
const subArr = [2, 4];
const containsAll = subArr.every(val => mainArr.includes(val)); // true`,
    demo: () => {
      const mainArr = [1, 2, 3, 4, 5];
      const subArr1 = [2, 4];
      const subArr2 = [2, 6];
      const containsAll1 = subArr1.every(val => mainArr.includes(val));
      const containsAll2 = subArr2.every(val => mainArr.includes(val));
      return `Main: [${mainArr}]\nSub1: [${subArr1}] -> Contains all: ${containsAll1}\nSub2: [${subArr2}] -> Contains all: ${containsAll2}`;
    }
  },
  {
    id: 214,
    title: "CamelCase to Human Readable",
    category: "strings",
    description: "Convert a camelCase string to a human-readable format with spaces.",
    code: `const camelCaseStr = 'camelCaseStringExample';
const readable = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase(); // "camel case string example"`,
    demo: () => {
      const camelCaseStr = 'camelCaseStringExample';
      const readable = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase();
      return `Original: "${camelCaseStr}"\nReadable: "${readable}"`;
    }
  },
  {
    id: 215,
    title: "Randomize Array Order (Fisher-Yates)",
    category: "arrays",
    description: "Another implementation of the Fisher-Yates shuffle algorithm.",
    code: `function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const numbers = [1, 2, 3, 4, 5];
shuffleArray(numbers);`,
    demo: () => {
      function shuffleArray(array) {
        const newArr = [...array]; // Create a copy to not modify original for demo
        for (let i = newArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
      }
      const numbers = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(numbers);
      return `Original: [${numbers}]\nShuffled: [${shuffled}]`;
    }
  },
  {
    id: 216,
    title: "Count Vowels in String",
    category: "regex",
    description: "Count the number of vowels (a, e, i, o, u) in a string.",
    code: `const text = 'Hello World';
const vowelCount = (text.match(/[aeiou]/gi) || []).length;`,
    demo: () => {
      const text = 'Hello World JavaScript';
      const vowelCount = (text.match(/[aeiou]/gi) || []).length;
      return `Text: "${text}"\nVowel Count: ${vowelCount}`;
    }
  },
  {
    id: 217,
    title: "Remove Trailing Slashes from URL",
    category: "strings",
    description: "Remove trailing slashes from the end of a URL string.",
    code: `const url = 'https://example.com/path///';
const cleanedUrl = url.replace(/\\/+\\s*$/, ''); // "https://example.com/path"`,
    demo: () => {
      const url = 'https://example.com/path///';
      const cleanedUrl = url.replace(/\/+\s*$/, '');
      const url2 = 'https://example.com/path';
      const cleanedUrl2 = url2.replace(/\/+\s*$/, '');
      return `Original 1: "${url}"\nCleaned 1: "${cleanedUrl}"\nOriginal 2: "${url2}"\nCleaned 2: "${cleanedUrl2}"`;
    }
  },
  {
    id: 218,
    title: "Convert to Boolean (Explicit)",
    category: "utilities",
    description: "Explicitly convert a value to its boolean equivalent using `!!`.",
    code: `const value1 = 0;
const value2 = 'hello';
const bool1 = !!value1; // false
const bool2 = !!value2; // true`,
    demo: () => {
      const value1 = 0;
      const value2 = 'hello';
      const value3 = null;
      const value4 = {};
      return `0 -> ${!!value1}\n'hello' -> ${!!value2}\nnull -> ${!!value3}\n{} -> ${!!value4}`;
    }
  },
  {
    id: 219,
    title: "Get Days in Month",
    category: "date",
    description: "Calculate the number of days in a specific month of a given year.",
    code: `function daysInMonth(year, month) { // month is 0-indexed (Jan is 0)
  return new Date(year, month + 1, 0).getDate();
}
const days = daysInMonth(2024, 1); // February 2024 (leap year)`,
    demo: () => {
      function daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
      }
      const daysFeb2024 = daysInMonth(2024, 1); // Feb 2024
      const daysFeb2023 = daysInMonth(2023, 1); // Feb 2023
      return `Days in Feb 2024: ${daysFeb2024}\nDays in Feb 2023: ${daysFeb2023}`;
    }
  },
  {
    id: 220,
    title: "Clone Date Object",
    category: "date",
    description: "Create a new Date object that is a clone of an existing one.",
    code: `const originalDate = new Date();
const clonedDate = new Date(originalDate.getTime()); // Or new Date(originalDate)`,
    demo: () => {
      const originalDate = new Date();
      const clonedDate = new Date(originalDate.getTime());
      clonedDate.setDate(clonedDate.getDate() + 1); // Modify clone
      return `Original: ${originalDate.toDateString()}\nCloned (modified): ${clonedDate.toDateString()}\n(Original remains unchanged)`;
    }
  },

        ];

        // Render tricks
        function renderTricks(tricksToRender = tricks) {
            const grid = document.getElementById('tricksGrid');
            grid.innerHTML = '';
            
            tricksToRender.forEach(trick => {
                const trickCard = document.createElement('div');
                trickCard.className = 'trick-card';
                trickCard.innerHTML = `
                    <h3 class="trick-title">${trick.title}</h3>
                    <p class="trick-description">${trick.description}</p>
                    <div class="code-block">${trick.code}</div>
                    <button class="demo-button" onclick="runDemo(${trick.id})">Try Demo</button>
                    <div class="demo-output" id="output-${trick.id}"></div>
                `;
                grid.appendChild(trickCard);
            });
        }

        // Run demo function
        function runDemo(trickId) {
            const trick = tricks.find(t => t.id === trickId);
            const output = document.getElementById(`output-${trickId}`);
            
            if (trick && trick.demo) {
                try {
                    const result = trick.demo();
                    output.textContent = result;
                    output.style.display = 'block';
                } catch (error) {
                    output.textContent = `Error: ${error.message}`;
                    output.style.display = 'block';
                }
            }
        }

        // Search functionality
        document.getElementById('searchBox').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredTricks = tricks.filter(trick => 
                trick.title.toLowerCase().includes(searchTerm) ||
                trick.description.toLowerCase().includes(searchTerm) ||
                trick.category.toLowerCase().includes(searchTerm)
            );
            renderTricks(filteredTricks);
        });

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                const category = e.target.dataset.category;
                const filteredTricks = category === 'all' ? tricks : tricks.filter(trick => trick.category === category);
                renderTricks(filteredTricks);
            });
        });

        // Make runDemo function global
        window.runDemo = runDemo;

        // Initial render
        renderTricks();
        document.getElementById('trickCount').textContent = tricks.length;
