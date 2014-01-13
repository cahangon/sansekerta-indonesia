/**+++++++++++++++++++++++
 *  Sansekerta-Indonesia
 *  ++++++++++++++++++++++
 *
 *  Application Server
 *
 Copyright (c) 2014 Cah Angon

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

var searchEngine = require('search-index'),
    fs = require('fs'),
    batchFileName = 'data/sample/p.json',
    facets = ['sansekerta', 'bahasa'],
    batch = null;

fs.readFile(batchFileName, 'utf8', function (err, data) {
    if (err) {
        console.log('Error: ' + err);
    }

    batch = data;

    searchEngine.index(batch, batchFileName, facets, function (msg) {
        console.log(msg);
    });
});

// Test Query
var query = {
    "query": ['prambayun'],
    "facets": ["bahasa"]
};

searchEngine.search(query, function (result) {
    console.log(result);
});