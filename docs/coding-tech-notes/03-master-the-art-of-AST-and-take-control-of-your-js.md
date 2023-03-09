---
id: 03-master-the-art-of-the-ast-and-take-control-of-your-js
title: Master the Art of the AST and Take Control of Your JS
---

#### ESTree-based AST (abstract syntax tree)
source code represented as a tree data structure

+ Input step - parse, traverse
+ Output step - manipulate, generate

parse: convert code to AST (there are several open source parsers online, e.g. [astexplorer](https://astexplorer.net), [esprima](https://esprima.org/))

traversing: example, visitor pattern (when you care about only the nodes you want to use) instead of going from top to bottom

manipulate: example, using Babel to get rid of "debugger;"

generate code: example, jscodeshift (FB's refactoring tool) to replace all `var` nodes with `let`







source: [youtube link](https://youtu.be/C06MohLG_3s)

<iframe width="560" height="315" src="https://www.youtube.com/embed/C06MohLG_3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>